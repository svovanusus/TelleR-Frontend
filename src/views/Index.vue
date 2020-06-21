<template>
  <div class="landing">
    <v-sheet color="primary" dark tile height="400" class="py-12">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="text-center">Tell about your hobbies.</h1>
            <h3 class="text-center mt-2">
              Let's create your first blog now!
              For this you need only signup in platform.
            </h3>
            <div class="text-center mt-4">
              <v-btn dark link href="https://admin.teller.website" target="_blank">Sign-up now</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="white" tile class="py-12">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <h2 class="text-center py-4">Tell about blog</h2>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia commodi
              enim impedit, perferendis nulla rerum facere quos similique quas ut ipsum, totam velit
              ullam a dolores numquam tempore tempora!
            </p>
          </v-col>
          <v-col cols="12" sm="8">
            <v-img src="@/assets/img/step1.jpg" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="secondary" dark tile class="py-12">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" order-sm="2">
            <h2 class="text-center py-4">Write your first post</h2>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia commodi
              enim impedit, perferendis nulla rerum facere quos similique quas ut ipsum, totam velit
              ullam a dolores numquam tempore tempora!
            </p>
          </v-col>
          <v-col cols="12" sm="8" order-sm="1">
            <v-img src="@/assets/img/step2.jpg" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="dark" dark tile class="py-12">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <h2 class="text-center py-4">Publish it</h2>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia commodi
              enim impedit, perferendis nulla rerum facere quos similique quas ut ipsum, totam velit
              ullam a dolores numquam tempore tempora!
            </p>
          </v-col>
          <v-col cols="12" sm="8">
            <v-img src="@/assets/img/step3.jpg" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="primary" dark tile class="py-12">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="text-center">Start your first blog.</h1>
            <div class="text-center mt-4">
              <v-btn dark link href="https://admin.teller.website" target="_blank">Sign-up now</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'index-view',
})
export default class IndexView extends Vue {
  mounted() {
    this.$store.state.IsLoading = false;
  }
}
</script>
