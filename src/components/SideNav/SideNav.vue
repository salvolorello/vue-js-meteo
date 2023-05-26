<template>
  <div class="body">
    <v-app-bar-nav-icon class="mobile_menu" ></v-app-bar-nav-icon >
    <v-card style="height: 100%" class="desktop_menu">
      <v-navigation-drawer permanent expand-on-hover dark>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="../../assets/1665516406904.jpeg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Salvatore Lorello </v-list-item-title>
              <v-list-item-subtitle>salvo.lorello@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item
            link
            v-for="rotue in routesList"
            :key="rotue.name"
            :to="rotue.path"
          >
            <v-list-item-icon>
              <v-icon>{{ rotue.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ rotue.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import { routesList } from "@/router/routesList";

export default {
  data: () => {
    return {
      // data
      routesList,
    };
  },

  props: {},
  component: {},
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
}
.mobile_menu{
  display: none;
}

@media (max-width: 850px) {
  .mobile_menu{
  display: flex;
}
.desktop_menu{
  display: none;
}
}
</style>
