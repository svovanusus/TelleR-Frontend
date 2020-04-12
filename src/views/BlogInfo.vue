<template>
  <div class="blog-info">
    <h1>{{ title }}</h1>
    <p>Author: {{ author.fullName }}</p>
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <h3><router-link :to="`/blogs/${id}/posts/${post.id}`">{{ post.title }}</router-link></h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  border: 1px solid #333;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BlogService from '@/services/api/blog-service';
import PostService from '@/services/api/post-service';

@Component({
  name: 'blog-info-view',
})
export default class BlogInfoView extends Vue {
  @Prop({ default: 0 }) readonly id!: string;

  title: string = '';

  author: {
    id: number,
    author: string,
  } = {
    id: 0,
    author: '',
  };

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
    BlogService.get(Number(this.id))
      .then((response) => {
        this.title = response.data.title;
        this.author = response.data.author;
      });

    PostService.getForBlog(Number(this.id))
      .then((response) => {
        this.posts = response.data;
      });
  }
}
</script>
