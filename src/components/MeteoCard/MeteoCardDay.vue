<template v-slot:activator="{on,attrs}" >
  <div class="meteo_card_container"  v-bind="attrs"
          v-on="on">
    <div class="div_1">
      <div class="date global_set">
        <h1>{{ meteoDay.data[0].dayOfWeek }}</h1>
        <p>{{ meteoDay.avg.shortDate }}</p>
      </div>
      <div class="card_img global_set">
        <img :src="meteoDay.avg.imgSrc"  />
        <div class="_temp global_set">
          <p>{{ meteoDay.avg.min_temp }}</p>
          <p><strong>{{ meteoDay.avg.max_temp }}</strong></p>
        </div>
      </div>

      <div class="_PUV global_set">
        <p>Precipitazioni : {{ meteoDay.avg.avg_precipitation_probability }} %</p>
        <p>Umidità : {{ meteoDay.avg_temperature_2m }}km/h</p>
        <p>Vento : {{ meteoDay.avg.avg_relativehumidity_2m }}km/h</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   data
    };
  },
  props: {
    meteoDay: {},
    on:undefined,
    attrs:undefined,
  },
  computed: {
    meteoNow() {
      return this.$store.state.homeStore.darkMode;
    },
  }
};
</script>

<style scoped>
.meteo_card_container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80vw;
  max-width: 90vw;
  max-height: 10vw;
  height: 10vw;
  /* background-color: blue; */
}

.meteo_card_container:hover {
  cursor: pointer;
  background-color: gray;
}

.div_1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 10vw;
  width: 80vw;
  height: 10vw;
}

.global_set {
  display: flex;
  align-items: flex-start;
  padding: 1%;
  height: 100%;
}

.date {
  display: flex;
  flex-direction: column;
  /* background-color: antiquewhite; */
  width: 30vw;
}

.date h1 {
  font-size: 4vw;
}

.date p {
  font-size: 2vw;
  margin-top: -1vw;
}

._temp {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  padding: 0%;
}

._temp p {
  font-size: 3vw;
  margin-bottom: -0.8vw;
}

.card_img {
  /* background-color: green; */
  flex-direction: row;
  align-items: center;
  width: 20vw;
  justify-content: center;
}

.card_img img {
  height: 11vw;
  /* background-color: antiquewhite; */
  margin-top: 3vw;
}

._PUV {
  flex-direction: column;
  /* background-color: violet; */
  width: 30vw;
  align-items: flex-end;
  justify-content: center;
}

._PUV p {
  font-size: 1.3vw;
  margin-bottom: -0.2vw;
}</style>
