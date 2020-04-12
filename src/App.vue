<template>
  <v-app id="teller">
    <main-navbar />

    <mobile-navbar />
    <search-bar />

    <v-content>
      <router-view />
    </v-content>

    <main-footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import MainNavbar from '@/layouts/MainNavbar.vue';
import MobileNavbar from '@/layouts/MobileNavbar.vue';
import SearchBar from '@/layouts/SearchBar.vue';
import MainFooter from '@/layouts/MainFooter.vue';

@Component({
  name: 'app',
  components: {
    MainNavbar,
    MobileNavbar,
    SearchBar,
    MainFooter,
  },
})
export default class App extends Vue {}
</script>
