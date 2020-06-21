<template>
  <v-container>
    <v-row class="ablot">
      <v-col>
        <v-row>
          <v-col cols="2" lg="1">
            <v-responsive aspect-ratio="1">
              <v-img class="rounded" :src="author.avatar" />
            </v-responsive>
          </v-col>
          <v-col>
            <h1><v-icon>mdi-console-line</v-icon> {{ title }}</h1>
            <h3>Author: {{ author.fullName }}</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="description && description.length">
            <h3>Description</h3>
            <p v-html="description"></p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogService from '@/services/api/blog-service';
import PostService from '@/services/api/post-service';
import { RootState } from '@/store';
import UserResponseDto from '@/entities/dto/response/UserResponseDto';

@Component({
  name: 'about',
  components: {},
})
export default class ComponentClass extends Vue {
  rootState: RootState = this.$store.state;

  title: string = '';

  description: string = '';

  get author(): UserResponseDto {
    return this.rootState.CurrentBlog ? this.rootState.CurrentBlog.author : ({
      id: 0,
      fullName: '',
      avatar: '',
    });
  }

  mounted() {
    BlogService.getBlogInfo(Number(this.rootState.CurrentBlog ? this.rootState.CurrentBlog.id : 0))
      .then((response) => {
        if (response && response.data) {
          this.title = response.data.title;
          this.description = response.data.description.replace(/\n/gm, '<br>');
        }
        this.$store.state.IsLoading = false;
      });
  }
}
</script>
