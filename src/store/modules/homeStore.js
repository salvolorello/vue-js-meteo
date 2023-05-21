import { getImagewether } from "@/functions/getImageWether";
import axios from "axios";
import moment from "moment";

export const homeStore = {
  state: {
    meteo: [],
    nowMeteo: {},
    itemsForAutocmplete: [],
    loadingAutocomplete: false,
    loadingMeteoCard: false,
    dayMeteo: [],
  },
  getters: {},
  mutations: {
    // GET THE CORDINATE OF SELECTED ITEM FROM AUTOCMPLETATE SEARC
    GET_CITY_CORD_START(state) {
      state.loadingAutocomplete = true;
    },
    GET_CITY_CORD_FAIL(state) {
      state.loadingAutocomplete = false;
    },
    GET_CITY_CORD_SUCCESS(state, itemsToAutocomplete) {
      state.itemsForAutocmplete = itemsToAutocomplete;
      state.loadingAutocomplete = false;
    },

    //  GET METEO DETAIL FOR METEOCARD
    GET_METEO_START(state) {
      state.loadingMeteoCard = true;
    },
    GET_METEO_FAIL(state) {
      state.loadingMeteoCard = false;
    },
    GET_METEO_SUCCESS(state, payload) {
      state.meteo = payload.res;
      state.nowMeteo = payload.nowMeteo;
      state.dayMeteo = payload.dayMeteo;
      state.loadingMeteoCard = false;
    },
  },
  actions: {
    //  fetch meteo

    async getMeteo({ commit }, payload) {
      try {
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${payload.latitude}&longitude=${payload.longitude}&hourly=temperature_2m,precipitation_probability,weathercode,cloudcover,relativehumidity_2m&current_weather=true`
        );
        const {
          time,
          precipitation_probability,
          cloudcover,
          weathercode,
          relativehumidity_2m,
        } = res.data.hourly;
        const { current_weather } = res.data;
        //edit data for meteo now
        const date = new Date();
        const finalDate = moment(date).format("dddd");
        const today = date.toISOString().split(":")[0] + ":00";
        const todayDate = date.toISOString().split("T")[0];
        //  now date
        let nowMeteo = {
          temperature: "",
          precipitation_probability: "",
          weathercode: "",
          windSpeed: "",
          cloudcover: "",
          img: "",
          name: payload.name,
          date: finalDate + "  " + today.split("T")[1],
          text_meteo: "",
        };
        const fullMeteo = {
          day1: [],
          day2: [],
          day3: [],
          day4: [],
          day5: [],
          day6: [],
          day7: [],
        };

        function pushFullMeteo(array, count, img, text) {
          const dayString = moment(new Date(time[count])).format("dddd");
          array.push({
            time: time[count],
            precipitation_probability: precipitation_probability[count],
            cloudcover: cloudcover[count],
            weathercode: weathercode[count],
            relativehumidity_2m: relativehumidity_2m[count],
            img: img,
            text_meteo: text,
            dayOfWeek: dayString,
          });
        }

        const dayMeteo = [];
        for (let index = 0; index < time.length; index++) {
          const { imgSrc, text_meteo } = getImagewether({
            precipitation_probability: precipitation_probability[index],
            cloudcover: cloudcover[index],
          });

          if (index <= 23) {
            pushFullMeteo(fullMeteo.day1, index, imgSrc, text_meteo);
          }
          if (index > 23 && index <= 47) {
            pushFullMeteo(fullMeteo.day2, index, imgSrc, text_meteo);
          }
          if (index > 47 && index <= 71) {
            pushFullMeteo(fullMeteo.day3, index, imgSrc, text_meteo);
          }
          if (index > 71 && index <= 95) {
            pushFullMeteo(fullMeteo.day4, index, imgSrc, text_meteo);
          }
          if (index > 95 && index <= 119) {
            pushFullMeteo(fullMeteo.day5, index, imgSrc, text_meteo);
          }
          if (index > 119 && index <= 143) {
            pushFullMeteo(fullMeteo.day6, index, imgSrc, text_meteo);
          }
          if (index > 143 && index <= 167) {
            pushFullMeteo(fullMeteo.day7, index, imgSrc, text_meteo);
          }

          if (time[index].includes(todayDate)) {
            dayMeteo.push({
              time: time[index].split("T")[1],
              precipitation_probability: precipitation_probability[index],
              cloudcover: cloudcover[index],
              weathercode: weathercode[index],
              relativehumidity_2m: relativehumidity_2m[index],
              img: imgSrc,
              text_meteo: text_meteo,
            });
          }
          if (time[index] === today) {
            nowMeteo.precipitation_probability = precipitation_probability[index];
            nowMeteo.weathercode = weathercode[index];
            nowMeteo.cloudcover = cloudcover[index];
            nowMeteo.relativehumidity_2m = relativehumidity_2m[index];
            nowMeteo.temperature = current_weather.temperature;
            nowMeteo.windSpeed = current_weather.windspeed;
            nowMeteo.img = imgSrc;
            nowMeteo.text_meteo = text_meteo;
          }
        }
        console.log(fullMeteo);
        //  get data for only this, day

        commit("GET_METEO_SUCCESS", { res: res.data, nowMeteo, dayMeteo });
      } catch (error) {}
    },

    async getCityCord({ commit }, val) {
      // Lazily load input items
      try {
        commit("GET_CITY_CORD_START");
        const res = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${val}&count=10&language=it&format=json`
        );

        const itemsToAutocomplete = res.data.results.map(
          (item) =>
            item.name +
            " , " +
            item.latitude.toFixed(2) +
            " , " +
            item.longitude.toFixed(2)
        );
        commit("GET_CITY_CORD_SUCCESS", itemsToAutocomplete);
      } catch (error) {
        console.log(error);
        commit("GET_CITY_CORD_FAIL");
      }
    },
  },
};
