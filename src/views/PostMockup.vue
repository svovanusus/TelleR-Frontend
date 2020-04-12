<template>
  <div class="post">
    <v-sheet color="dark" dark tile>
      <v-container>
        <v-row>
          <v-col class="text-center" cols="12">
            <h2 class="display-2 mb-2">Post title</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="white" light tile>
      <v-container>
        <v-row>
          <v-col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni officia, natus esse fuga rerum nobis, architecto
              dolor eius eum delectus totam consequuntur quibusdam
              consectetur soluta? Rerum quibusdam accusantium officiis totam.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'post-mockup',
  components: {},
})
export default class PostMockup extends Vue {}
</script>
