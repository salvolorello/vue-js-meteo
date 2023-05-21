<template>
  <div class="meteo_card_container">
    <div class="div_1">
      <div class="date global_set">
        <h1>Saturday</h1>
        <p>22 Mag</p>
      </div>
      <div class="card_img global_set">
        <img :src="meteoNow.img" />
        <div class="_temp global_set">
          <h2>{{ Math.round(meteoNow.temperature) }}</h2>
          <h2>{{ Math.round(meteoNow.temperature) }}</h2>
        </div>
      </div>

      <div class="_PUV global_set">
        <p>Precipitazioni : {{ meteoNow.precipitation_probability }} %</p>
        <p>Vento : {{ meteoNow.windSpeed }}km/h</p>
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
    meteoNow: {},
  },
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
}
._temp {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  padding: 0%;
}
._temp h2 {
  font-size: 3vw;
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
}
</style>
