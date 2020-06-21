<template>
  <v-container class="blog-page">
    <v-row>
      <v-col><h1>Posts</h1></v-col>
    </v-row>
    <v-row>
      <template v-if="posts.length">
        <v-col cols="12" sm="6" lg="4" xl="3"  v-for="post in posts" :key="`post-${post.id}`">
          <v-card>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.description }}</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn link elevation="0" color="primary" text :to="`/@${blogName}/post/${post.id}`">
                Read more
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
      <p v-else>This blog not contains posts yet.</p>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogService from '@/services/api/blog-service';
import PostService from '@/services/api/post-service';
import PostResponseDto from '@/entities/dto/response/PostResponseDto';
import { RootState } from '@/store';

@Component({
  name: 'blog-home-view',
  components: {},
})
export default class BlogHomeView extends Vue {
  rootState: RootState = this.$store.state;

  title: string = '';

  author: string = '';

  posts: PostResponseDto[] = [];

  get blogName(): string {
    return this.rootState.CurrentBlogName;
  }

  mounted() {
    PostService.getForBlog(this.rootState.CurrentBlog ? this.rootState.CurrentBlog.id : 0)
      .then((response) => {
        if (response && response.data) {
          this.posts = response.data;
        }
        this.$store.state.IsLoading = false;
      });
  }
}
</script>
