<template>
  <v-footer color="secondary" class="white--text">
    <span>Vuetify</span>
    <v-spacer />
    <span>&copy; 2019</span>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'main-footer',
  components: {},
})
export default class MainFooter extends Vue {

}
</script>
