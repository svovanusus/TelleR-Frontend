<template>
  <div class="page">
    <h1>Index</h1>
    <router-link to="/blogs/1">Blog 1</router-link>
    <router-link to="/blogs/2">Blog 2</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'index-view',
})
export default class IndexView extends Vue {}
</script>
