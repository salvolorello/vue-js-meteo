<template>
  <div class="meteo_card_container">
    <div class="div_1">
      <div class="card_img global_set">
        <img :src="meteoNow.img" />
      </div>
      <div class="_temp global_set">
        <h2>{{ Math.round(meteoNow.temperature) }}</h2>
      </div>
      <div class="_c_f global_set">
        <p>C°|F°</p>
      </div>
      <div class="_PUV global_set">
        <p>Precipitazioni : {{ meteoNow.precipitation_probability }} %</p>
        <p>Umidità : {{ meteoNow.relativehumidity_2m }} %</p>
        <p>Vento : {{ meteoNow.windSpeed }}km/h</p>
      </div>
    </div>
    <div class="div_2">
      <h2>{{ meteoNow.name }}</h2>
      <p>{{ meteoNow.date }}</p>
      <p>{{ meteoNow.text_meteo }}</p>
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  max-height: auto;
  height: auto;
  margin-top: 2%;
  /* background-color: blue; */
}

.div_1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  /* background-color: red; */
}

.global_set {
  display: flex;
  align-items: flex-start;
  padding: 1%;
  height: 100%;
}

._temp {
  /* padding-top: 0%; */
  /* background-color: red; */
  /* padding-bottom: 3PX; */
  margin-bottom: 11%;
}
._temp h2 {
  font-size: 7vw;
}

.card_img {
  /* background-color: green; */
  /* padding-top: 10%; */
  width: 40%;
  align-items: flex-start;
  justify-content:center;

}
.card_img img {
  /* max-width: 30vw; */
  width: 8em;
  height: auto;
  /* background-color: red; */
}

._c_f {
  /* padding-top: 8%; */
  /* background-color: aqua; */
}
._c_f p {
  font-size: 1.5vw;
}
._PUV {
  flex-direction: column;
  /* background-color: violet; */
  width: 100%;
  /* padding-top: 7.5%; */
}
._PUV p {
  font-size: large;
  margin-top: -4%;
  margin-left: 5%;
}

.div_2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  width: 50%;
  max-width: 50%;
  max-height: 100%;
  height: 100%;
  /* padding-top: 2%; */
}
.div_2 p {
  margin-bottom: 0vw;
}
@media (max-width:850px) {

  ._PUV{
    /* font-size: 50%; */
    margin-top: 2%;
    align-items: flex-end;
  }
  ._PUV p{
    font-size: 0.8em;
    margin-bottom: 4%;
  }
  .div_2{
    display: none;
    width: 0px;
  }
  .div_1{
    width: 100% !important;
    
  }
  .card_img{
    width: 30%;
  }
  .card_img img{
    width: 30vw;

  }
  ._temp{
    font-size: large;
    margin-top: 10%;
     
  }
  ._c_f p{
    font-size: large;
  }
  
}
</style>
