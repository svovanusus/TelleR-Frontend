<template>
  <div class="blog-wrapper">
    <h1>THIS IS BLOG</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'blog-wrapper',
  components: {},
})
export default class BlogWrapper extends Vue {

}
</script>
