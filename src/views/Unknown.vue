<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Unknown error!</h1>
        <p class="text-center">Ooops.. Something wwent wrong. We are already working on it.</p>
        <p class="text-center">
          You can back to previous page.
          <v-btn
            dark
            link
            elevation="0"
            @click.prevent.stop="$router.back()"
          >
            <v-icon>mdi-arrow-left</v-icon>
            Back
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'unknown-error-view',
})
export default class UnknownErrorView extends Vue {
  mounted() {
    this.$store.state.IsLoading = false;
  }
}
</script>
