<template>
  <div class="meteo_card_container">
    <div class="div_1">
      <div class="card_img global_set">
        <p>{{ meteoDay.time }}</p>
        <img :src="meteoDay.img" />
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
  },
  mounted() {},
};
</script>

<style scoped>
.meteo_card_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 10vw;
  /* height: 5vw; */
  /* background-color: blue; */
}

.div_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 10vw;
  /* height: 9vw; */
}

.global_set {
  display: flex;
  align-items: flex-start;
  padding: 1%;
  height: 100%;
}

.card_img {
  /* background-color: green; */
  padding-top: 0%;
  flex-direction: column;
  align-items: center;
}
.card_img img {
  max-width: 30vw;
  width: 7vw;
}
.card_img p {
  font-size: 1.5vw;
  margin-bottom: -0vw;
}
</style>
