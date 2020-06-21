<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <v-responsive aspect-ratio="1">
          <v-img class="rounded" :src="avatar" />
        </v-responsive>
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <h3>{{ author.fullName }}</h3>
        <p>Published {{ publishDate.toLocaleString() }}</p>
        <p v-if="publishDate.toLocaleString() !== editDate.toLocaleString()">
          (Last edited {{ editDate.toLocaleString() }})
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="post-content" v-html="content"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import PostService from '@/services/api/post-service';
import UserResponseDto from '@/entities/dto/response/UserResponseDto';

@Component({
  name: 'post',
})
export default class Post extends Vue {
  @Prop() readonly pid!: string;

  title: string = '';

  author: UserResponseDto = {
    id: 0,
    fullName: '',
    avatar: undefined,
  };

  publishDate: Date = new Date();

  editDate: Date = new Date();

  content: string = '';

  get postId(): number {
    return Number(this.pid);
  }

  get avatar(): string {
    return this.author.avatar && this.author.avatar.length
      ? this.author.avatar
      : 'https://teller-uploads.s3.amazonaws.com/img/user-avatar.png';
  }

  update() {
    this.$store.state.IsLoading = true;
    PostService.getById(this.postId).then((response) => {
      if (response && response.data) {
        this.title = response.data.title;
        this.content = response.data.content;
        this.author = response.data.author;
        this.publishDate = new Date(response.data.publishDate);
        this.editDate = new Date(response.data.updateDate);
      } else {
        this.title = '';
        this.content = '';
      }
      this.$store.state.IsLoading = false;
    });
  }

  mounted() {
    this.update();
  }

  @Watch('pid')
  onPidUpdate() {
    this.update();
  }
}
</script>
