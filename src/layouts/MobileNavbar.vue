<template>
  <v-navigation-drawer
    v-model="isOpen"
    app
    temporary
  >
    <v-toolbar elevation="1" >
      <v-toolbar-title>{{ blogName }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="isOpen = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item-group
        color="accent"
      >
        <v-list-item
          v-for="(item, index) in navigationItems"
          :key="`mobile-navigation-item-${ index }`"
          :to="item.linkUrl"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RootState, Types as RootTypes } from '@/store';

import NavigationItem from '@/entities/NavigationItem';

@Component({
  name: 'mobile-navbar',
  components: {},
})
export default class MobileNavbar extends Vue {
  storeState: RootState = this.$store.state;

  get blogName(): string {
    return this.storeState.CurrentBlog
      ? this.storeState.CurrentBlog.title
      : '';
  }

  get navigationItems(): NavigationItem[] {
    return this.storeState.CurrentBlog
      ? this.$store.getters[RootTypes.getters.NAVIGATION_ITEMS]
      : [];
  }

  get isOpen(): boolean {
    return this.storeState.MobileNavOpen;
  }

  set isOpen(val: boolean) {
    this.storeState.MobileNavOpen = val;
  }
}
</script>
