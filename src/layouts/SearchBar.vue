<template>
  <v-navigation-drawer
    v-model="isOpen"
    app
    right
    temporary
    width="512"
  >
    <v-toolbar
      flat
      color="secondary"
      dark
      extended
    >
      <v-text-field
        slot="extension"
        block
        color="white"
        placeholder="Start typing here..."
        single-line
        hide-details
        :loading="searchLoading"
        @input="searchInput"
      />
      <v-btn
        icon
        @click="isOpen = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Search</v-toolbar-title>
    </v-toolbar>
    <v-skeleton-loader
      type="list-item-two-line@5"
      boilerplate
    />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RootState } from '@/store';

@Component({
  name: 'search-bar',
  components: {},
})
export default class SearchBar extends Vue {
  readonly storeState: RootState = this.$store.state;

  get isOpen(): boolean {
    return this.storeState.SearchOpen;
  }

  set isOpen(val: boolean) {
    this.storeState.SearchOpen = val;
  }

  searchLoading = false;

  searching: number | null = null;

  searchInput() {
    this.searchLoading = true;
    if (this.searching) clearTimeout(this.searching);
    this.searching = setTimeout(() => {
      this.searchLoading = false;
      this.searching = null;
      console.log('Done!');
    }, 2000);
  }
}
</script>
