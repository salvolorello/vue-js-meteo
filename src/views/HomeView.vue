<template>
  <div class="home_container">
<div class="title">
  <HeaderPage title="DashBoarad" />
    <div class="switch">
      <v-switch v-model="dark_team" label="Dark Mode" color="gray" :value.sync='dark_team' hide-details ></v-switch>

    </div>
</div>
   
    <div class="_head">
      <MeteoCard :meteo-now="meteoNow" />
    </div>
    <div class="search_city">
      <v-card-text>
        <v-autocomplete solo v-model="model" :items="items" :loading="loadingAutocomplete" :search-input.sync="search"
          color="white" hide-no-data hide-selected item-text="Description" item-value="id"
          label="Search your prefered location" placeholder="Start typing to Search"
          prepend-inner-icon="mdi-map-marker"></v-autocomplete>
      </v-card-text>
    </div>
    <div class="carosel_day">
      <v-slide-group multiple show-arrows class="">
        <v-slide-item v-for="day in meteoDay" :key="day.time">
          <MeteoCardMini :meteoDay="day" />

        </v-slide-item>
      </v-slide-group>
    </div>


    <div class="all_day_container">
      <div v-for="day in meteoFull">
        <!-- <MeteoCardDay :meteo-day="day" /> -->
        <DialogMeteoDay :meteoDay="day" />
      </div>

    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage/HeaderPage.vue";
import MeteoCard from "@/components/MeteoCard/MeteoCard.vue";
import MeteoCardMini from "@/components/MeteoCard/MeteoCardMini.vue";
import MeteoCardDay from "@/components/MeteoCard/MeteoCardDay.vue";
import DialogMeteoDay from "@/components/DialogMeteoDay/DialogMeteoDay.vue";



export default {
  name: "Home",
  data() {
    return {
      model: null,
      search: null,
      dark_team: false

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
    meteoFull() {
      return this.$store.state.homeStore.meteo;
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
    dark_team(val){
    
        this.$vuetify.theme.dark = val
        this.$store.dispatch('setDarkMode')
  
      
        
    }
  },

  components: {
    HeaderPage,
    MeteoCard,
    MeteoCardMini,
    MeteoCardDay,
    DialogMeteoDay,

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

<style  scoped>
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* p: 1%; */
  /* background-color: aqua; */
  height: 10%;
}
.switch {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 85vw;
  margin-top: -4.5%;
}

.home_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  /* background-color: green; */
}

._head {
  display: flex;
  flex-direction: row;
  /* background-color: bisque; */
  height: 20%;
}

.search_city {
  width: 84%;
  height: 11%;
  /* background-color: blue; */
}

.carosel_day {
  margin-top: 0%;
  width: 84%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  /* background-color: brown; */
  height: 19%;
}

::-webkit-scrollbar {
  display: none;
}

.all_day_container {
  overflow-y: scroll;
  height: 37vh;
  /* background-color: aqua; */
}


.dark_team {
  background-color: black;
  color: white;

}
</style>
