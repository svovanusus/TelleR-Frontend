<template>
  <section class="page-section banner">
    <div class="banner-cover" :style="`background: url('${ imageSrc }');`"></div>
    <h1 class="page-section-title banner-title">{{ title }}</h1>
    <div class="section-content banner-content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  min-height: 100vh;
  position: relative;

  .banner-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Config from '@/config';

@Component({
  name: 'banner-page-section',
  components: {},
})
export default class BannerPageSection extends Vue {
  @Prop({ default: '' }) readonly title!: string;

  @Prop({ default: `${Config.BASE_FILE_STORAGE_URL}/img/banner-cover-placeholder.png` }) readonly imageSrc?: string;
}
</script>
