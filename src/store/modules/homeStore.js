import { getImagewether } from "@/functions/getImageWether";
import axios from "axios";
import moment from "moment";

export const homeStore = {
  state: {
    meteo: [],
    nowMeteo: {},
  },
  getters: {},
  mutations: {
    GET_METEO(state, payload) {
      state.meteo = payload.res;
      state.nowMeteo = payload.nowMeteo;
      console.log(state.nowMeteo);
    },

    GET_CITY_CORD(state, payload) {},
  },
  actions: {
    //  fetch meteo
    async getMeteo({ commit }, payload) {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${payload.latitude}&longitude=${payload.longitude}&hourly=temperature_2m,precipitation_probability,weathercode,cloudcover,relativehumidity_2m&current_weather=true`
      );
      console.log(res.data);
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
      console.log(today);
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
      for (let index = 0; index < time.length; index++) {
        if (time[index] === today) {
          nowMeteo.precipitation_probability = precipitation_probability[index];
          nowMeteo.weathercode = weathercode[index];
          nowMeteo.cloudcover = cloudcover[index];
          nowMeteo.relativehumidity_2m = relativehumidity_2m[index];
          nowMeteo.temperature = current_weather.temperature;
          nowMeteo.windSpeed = current_weather.windspeed;
        }
      }

      const { imgSrc, text_meteo } = getImagewether(nowMeteo);
      nowMeteo.img = imgSrc;
      nowMeteo.text_meteo = text_meteo;

      commit("GET_METEO", { res: res.data, nowMeteo });
    },

    async getCityCord({ commit }) {
      const res = await axios.get(
        "https://geocoding-api.open-meteo.com/v1/search?name=acque&count=10&language=it&format=json"
      );
      console.log(res);
      commit("GET_CITY_CORD");
    },
  },
};
