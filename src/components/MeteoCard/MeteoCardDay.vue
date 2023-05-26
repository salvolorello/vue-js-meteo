<template v-slot:activator="{on,attrs}" >
  <div class="mx-auto meteo_card_container "  v-bind="attrs"
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
  width: 100%;
  height: 4%;
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
  /* max-height: 10vw; */
  width: 100%;
  height: 10%;
  /* height: 10%; */
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
  width: 80%;
}

.date h1 {
  font-size: 4em;
}

.date p {
  font-size: 2em;
  margin-top: -0.5em;
}

._temp {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 0%;
}

._temp p {
  font-size: 3rem;
  margin-bottom: -0.5rem;
}

.card_img {
  /* background-color: green; */
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  justify-content: center;
}

.card_img img {
  width: 9rem;
  /* background-color: antiquewhite; */
  margin-top: 11%;
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
}

@media (max-width: 768px) {
  ._PUV{
    display: none;
  }

  .date{
    font-size: x-small;

    
  }
  .date h1{
    font-size: 1.3rem;
  }
  .date p{
    font-size: 1rem;
  }
  .card_img img{
    width: 6rem;
  }
  ._temp p{
    font-size: 1rem;
  }
  ._temp{
    margin-bottom: 14%;
  }

 

  .div_1{
    width: 100%;
  }
}


</style>


