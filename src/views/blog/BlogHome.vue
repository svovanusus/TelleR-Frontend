<template>
  <div class="blog-page">
    <h1>{{ title }}</h1>
    <div class="blog-info">
      <p>Author: {{ author }}</p>
    </div>
    <div class="post-container">
      <div class="post" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BlogService from '@/services/api/blog-service';
import PostService from '@/services/api/post-service';

import BannerPageSection from '@/components/BannerPageSection.vue';

@Component({
  name: 'blog-home-view',
  components: {
    BannerPageSection,
  },
})
export default class BlogHomeView extends Vue {
  @Prop() readonly blogName!: string;

  title: string = '';

  author: string = '';

  posts: {
    id: number,
    title: string,
    description: string,
    content: string,
    author: {
      id: number,
      fullname: string,
    },
    createDate: Date,
  }[] = [];

  mounted() {
    BlogService.getByName(this.blogName)
      .then((response) => {
        this.title = response.data.title;
        this.author = response.data.author.fullname;

        PostService.getForBlog(Number(response.data.id))
          .then((postsResponse) => {
            this.posts = postsResponse.data;
          });
      });
  }
}
</script>
