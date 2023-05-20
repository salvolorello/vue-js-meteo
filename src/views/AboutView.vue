<template>
  <div class="about">
    <HeaderPage title="Counter Page" />

    <h2>current Value</h2>
    <h1>{{ count }}</h1>

    <div class="btn_container"></div>
    <BtnCustom text="+" :actions="incrementa" />
    <BtnCustom text="-" :actions="decrementa" />
  </div>
</template>

<script>
import BtnCustom from "@/components/BtnCustom/BtnCustom.vue";
import HeaderPage from "@/components/HeaderPage/HeaderPage.vue";

export default {
  computed: {
    count() {
      return this.$store.state.counterStore.count;
    },
  },
  components: { HeaderPage, BtnCustom },
  methods: {
    incrementa() {
      this.$store.dispatch("increment");
    },
    decrementa() {
      this.count--;
    },
  },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
