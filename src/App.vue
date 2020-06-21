<template>
  <v-app id="teller">
    <main-navbar />

    <mobile-navbar />

    <v-content>
      <router-view />
    </v-content>

    <main-footer />

    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import MainNavbar from '@/layouts/MainNavbar.vue';
import MobileNavbar from '@/layouts/MobileNavbar.vue';
import MainFooter from '@/layouts/MainFooter.vue';

@Component({
  name: 'app',
  components: {
    MainNavbar,
    MobileNavbar,
    MainFooter,
  },
})
export default class App extends Vue {
  get isLoading(): boolean {
    return this.$store.state.IsLoading;
  }
}
</script>
