<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">404 - Not found!</h1>
        <p class="text-center">Ooops.. Something wwent wrong.</p>
        <p class="text-center">
          Requested page is not found.
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
  name: 'not-found-view',
})
export default class NotFoundView extends Vue {
  mounted() {
    this.$store.state.IsLoading = false;
  }
}
</script>
