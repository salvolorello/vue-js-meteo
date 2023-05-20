<template>
  <div class="home_container">
    <HeaderPage title="DashBoarad" />
    <div class="_head">
      <MeteoCard :meteo-now="meteoNow" />
    </div>
    <div class="search_city">
      <v-card-text>
        <v-autocomplete
          solo
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="id"
          label="Search your prefered location"
          placeholder="Start typing to Search"
          prepend-inner-icon="mdi-map-marker"
        ></v-autocomplete>
      </v-card-text>
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage/HeaderPage.vue";
import MeteoCard from "@/components/MeteoCard/MeteoCard.vue";
export default {
  name: "Home",
  data() {
    return {
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
      dataMapped: [],
    };
  },

  computed: {
    meteoNow() {
      return this.$store.state.homeStore.nowMeteo;
    },
  },

  watch: {
    model(val) {
      if (val != null) {
        const latitude = val.split(" , ")[1];
        const longitude = val.split(" , ")[2];
        const name = val.split(" , ")[0];
        console.log(longitude);
        this.$store.dispatch("getMeteo", { latitude, longitude, name });
      }
    },
    search(val) {
      // Items have already been loaded
      // if (this.items.length > 0) return;
      if (this.model != null) return;
      if (val === "" || val === null || val.length < 3) return;

      this.isLoading = true;
      // Lazily load input items
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${val}&count=10&language=it&format=json`
      )
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res.results.map(
            (item) =>
              item.name +
              " , " +
              item.latitude.toFixed(2) +
              " , " +
              item.longitude.toFixed(2)
          );
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },

  components: {
    HeaderPage,
    MeteoCard,
  },
  methods: {
    onInputChange() {
      console.log();
    },
  },

  mounted() {
    // this.$store.dispatch("getCityCord");
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      this.$store.dispatch("getMeteo", {
        name: pos.coords.latitude.toFixed(2) + " , " + pos.coords.longitude.toFixed(2),
        latitude: pos.coords.latitude.toFixed(2),
        longitude: pos.coords.longitude.toFixed(2),
      });
    });
  },
};
</script>

<style scoped>
.home_container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
._head {
  display: flex;
  flex-direction: row;
}
.search_city {
  width: 90%;
}
</style>
