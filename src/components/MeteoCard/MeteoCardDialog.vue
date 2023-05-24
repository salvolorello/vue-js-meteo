<template>
  <div class="meteo_card_container">
    <div class="div_1">
      <div class="card_img global_set">
        <img :src="meteoNow.img" />
      </div>
      <div class="_temp global_set">
        <h2>{{ Math.round(meteoNow.temperature_2m) }}</h2>
      </div>
      <div class="_c_f global_set">
        <p>C°|F°</p>
      </div>
      <div class="_PUV global_set">
        <p>Precipitazioni : {{ meteoNow.precipitation_probability }} %</p>
        <p>Umidità : {{ meteoNow.relativehumidity_2m }} %</p>
        <!-- <p>Vento : {{ meteoNow.windSpeed }}km/h</p> -->
      </div>
    </div>
    <div class="div_2">
      <div style="display: flex; align-items: center; justify-content: center; flex-direction: row;">
        <p>{{meteoNow.time.split('T')[1] }} </p>
        <v-icon>mdi-clock</v-icon>
      </div>
      
      <p>{{ meteoNow.text_meteo }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
moment.locale('it')

export default {
  data() {
    return {
      //   data
    };
  },
  props: {
    meteoNow: {},
  },
};
</script>

<style scoped>
.meteo_card_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* width: 80vw; */
  /* max-width: 90vw; */
  /* max-height: 10vw; */
  height: 10vw;
  /* background-color: blue; */
}

.div_1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 40vw; */
  width: 70%;
  max-width: 60vw;
  max-height: 10vw;
  height: 10vw;
}

.global_set {
  display: flex;
  align-items: flex-start;
  padding: 1%;
  height: 100%;
}

._temp {
  padding-top: 0%;
}
._temp h2 {
  font-size: 7vw;
}

.card_img {
  /* background-color: green; */
  padding-top: 4.5%;
}
.card_img img {
  max-width: 30vw;
  width: 8.5vw;
}

._c_f {
  padding-top: 2vw;
  /* background-color: aqua; */
}
._c_f p {
  font-size: 1.5vw;
}
._PUV {
  flex-direction: column;
  /* background-color: violet; */
  width: 100%;
  padding-top: 7.5%;
}
._PUV p {
  margin-top: -1vw;
}

.div_2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* width: 40vw; */
  width: 30%;
  max-width: 40vw;
  max-height: 10vw;
  height: 10vw;
  padding-top: 4%;
  padding-right: 3%;
}
.div_2 p {
  margin-bottom: 0vw;
}
</style>
