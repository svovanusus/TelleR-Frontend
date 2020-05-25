<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'blog-wrapper',
  components: {},
})
export default class BlogWrapper extends Vue {}
</script>
