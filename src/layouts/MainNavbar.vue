<template>
  <v-app-bar
    app
    color="primary"
    dark
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click.stop="mobileNavOpen" class="hidden-sm-and-up" />
    <v-toolbar-title class="mr-6">{{ blogTitle }}</v-toolbar-title>
    <template v-if="isNavigationShow">
      <v-btn
        v-for="(item, index) in navigationItems"
        :key="`main-navigation-item-${ index }`"
        text
        large
        :to="item.linkUrl"
        v-text="item.title"
        class="ml-2 hidden-xs-only"
      ></v-btn>
    </template>
    <v-spacer />
    <v-btn dark link href="https://admin.teller.website" target="_blank" elevation="0" class="ml-2">
      Admin Panel
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RootState, Types as RootTypes } from '@/store';

import NavigationItem from '@/entities/NavigationItem';

@Component({
  name: 'main-navbar',
  components: {},
})
export default class MainNavbar extends Vue {
  readonly storeState: RootState = this.$store.state;

  get isNavigationShow():boolean {
    return typeof this.storeState.CurrentBlog !== 'undefined';
  }

  get blogTitle(): string {
    return this.storeState.CurrentBlog ? this.storeState.CurrentBlog.title : 'TelleR';
  }

  get navigationItems(): NavigationItem[] {
    return this.storeState.CurrentBlog
      ? this.$store.getters[RootTypes.getters.NAVIGATION_ITEMS]
      : [];
  }

  mobileNavOpen() {
    this.storeState.MobileNavOpen = true;
  }
}
</script>
