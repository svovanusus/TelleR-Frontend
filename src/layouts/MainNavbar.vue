<template>
  <v-app-bar
    app
    color="primary"
    dark
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click.stop="mobileNavOpen" class="hidden-sm-and-up" />
    <v-toolbar-title>TelleR</v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="(item, index) in navigationItems"
      :key="`main-navigation-item-${ index }`"
      text
      large
      :to="item.linkUrl"
      v-text="item.title"
      class="ml-2 hidden-xs-only"
    ></v-btn>
    <v-btn
      icon
      class="ml-4"
      @click="searchOpen"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RootState } from '@/store';

import NavigationItem from '@/entities/NavigationItem';

@Component({
  name: 'main-navbar',
  components: {},
})
export default class MainNavbar extends Vue {
  readonly storeState: RootState = this.$store.state;

  get navigationItems(): NavigationItem[] {
    return this.storeState.NavigationItems;
  }

  searchOpen() {
    this.storeState.SearchOpen = true;
  }

  mobileNavOpen() {
    this.storeState.MobileNavOpen = true;
  }
}
</script>
