<template>
  <v-app id="teller">
    <main-navbar />

    <mobile-navbar />

    <v-content>
      <template v-if="errorType === ErrorType.NONE">
        <router-view />
      </template>
      <template v-else-if="errorType === ErrorType.ERROR_404">
        <not-found-error />
      </template>
      <template v-else-if="errorType === ErrorType.ERROR_500">
        <server-error />
      </template>
      <template v-else-if="errorType === ErrorType.ERROR_UNKNOWN">
        <unknown-error />
      </template>
    </v-content>

    <main-footer />

    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { ErrorType } from '@/store';

@Component({
  name: 'app',
  components: {
    MainNavbar: () => import('@/layouts/MainNavbar.vue'),
    MobileNavbar: () => import('@/layouts/MobileNavbar.vue'),
    MainFooter: () => import('@/layouts/MainFooter.vue'),
    NotFoundError: () => import('@/views/404.vue'),
    ServerError: () => import('@/views/500.vue'),
    UnknownError: () => import('@/views/Unknown.vue'),
  },
})
export default class App extends Vue {
  public ErrorType = ErrorType;

  get isLoading(): boolean {
    return this.$store.state.IsLoading;
  }

  get errorType(): ErrorType {
    return this.$store.state.ErrorType;
  }
}
</script>
