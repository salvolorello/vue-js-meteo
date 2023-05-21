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
          :loading="loadingAutocomplete"
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
    <div class="carosel_day">
      <div v-for="day in meteoDay">
        <MeteoCardMini :meteoDay="day" />
      </div>
    </div>
    <div class="all_day_container">
      <MeteoCardDay :meteo-now="meteoNow" />
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage/HeaderPage.vue";
import MeteoCard from "@/components/MeteoCard/MeteoCard.vue";
import MeteoCardMini from "@/components/MeteoCard/MeteoCardMini.vue";
import MeteoCardDay from "@/components/MeteoCard/MeteoCardDay.vue";
export default {
  name: "Home",
  data() {
    return {
      model: null,
      search: null,
      // tab: null,
    };
  },

  computed: {
    meteoNow() {
      return this.$store.state.homeStore.nowMeteo;
    },
    loadingAutocomplete() {
      return this.$store.state.homeStore.loadingAutocomplete;
    },
    items() {
      return this.$store.state.homeStore.itemsForAutocmplete;
    },
    meteoDay() {
      return this.$store.state.homeStore.dayMeteo;
    },
  },

  watch: {
    model(val) {
      if (val != null) {
        const latitude = val.split(" , ")[1];
        const longitude = val.split(" , ")[2];
        const name = val.split(" , ")[0];
        this.$store.dispatch("getMeteo", { latitude, longitude, name });
      }
    },
    search(val) {
      // Items have already been loaded
      // if (this.items.length > 0) return;
      if (this.model != null) return;
      if (val === "" || val === null || val.length < 3) return;
      this.$store.dispatch("getCityCord", val);
    },
  },

  components: {
    HeaderPage,
    MeteoCard,
    MeteoCardMini,
    MeteoCardDay,
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
  height: 5vw;
}
.carosel_day {
  margin-top: 0.5vw;
  width: 90%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
