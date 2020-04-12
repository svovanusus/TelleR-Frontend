<template>
  <div class="page">
    <v-parallax src="https://i.pinimg.com/originals/58/77/e8/5877e80a048b5e044bca0d8e8295a4d4.jpg" dark>
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-4 mb-4">Blog name</h1>
          <h4 class="subheading font-weight-thin">The best of blogs</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-sheet
      color="dark-grey"
      dark
      tile
      style="overflow: hidden;"
    >
      <v-container class="blog-about-section">
        <v-row>
          <v-col class="text-center" cols="12">
            <h2 class="display-2 mb-2">About</h2>
          </v-col>
        </v-row>
        <v-row justify="stretch" align="stretch">
          <v-col md="3" class="rounded mt-lg-n10 my-xl-n12 blog-avatar-wrapper">
            <v-responsive :aspect-ratio="1" class="mt-lg-n10 my-xl-n12">
              <v-img
                src="https://via.placeholder.com/500x500.png?text=TLR"
                class="blog-avatar mb-n12"
              />
            </v-responsive>
          </v-col>
          <v-col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam corporis
              laboriosam accusamus fugiat cumque repellat fuga corrupti perferendis culpa, est
              rem quam, deserunt modi. In esse eum rem non.
            </p>
            <p>
              Reiciendis facere quis eum distinctio, harum optio culpa ad nesciunt voluptatem
              voluptas, laboriosam cumque repudiandae inventore aut neque ut nisi incidunt eius
              sed architecto. Libero nisi a tempora provident iusto.
            </p>
            <p>
              Cum, repudiandae animi blanditiis voluptates corporis hic minima laborum, totam,
              beatae vel explicabo earum quod iusto quas illum in itaque necessitatibus eveniet.
              Unde tempora maxime minus, repellendus impedit molestiae? Officia.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet
      color="white"
      light
      tile
    >
      <v-container>
        <v-row>
          <v-col class="text-center" cols="12">
            <h2 class="display-2 mb-2">Last Posts</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="index in 10" :key="index">
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  to="/post"
                >
                  Read more
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.blog-avatar-container {
  min-width: 125px;
  max-width: 250px;
}

.blog-avatar {
  border-radius: 50%;
  border: 4px solid #fff;
}

@media only screen and (max-width: 959px) {
  .blog-about-section{
    position: relative;
  }

  .blog-avatar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 106px;
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'blog-mockup',
  components: {},
})
export default class BlogMockup extends Vue {}
</script>
