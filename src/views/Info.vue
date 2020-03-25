<template>
  <div>
    <div class="text-center">
      <h2>INFORMASI</h2>
      <p><span class=" font-weight-light">Mencegah informasi yang tidak benar atau hoaks</span></p>
    </div>
    <hr />
    <v-col v-for="(item, i) in getInfo" :key="i" cols="12">
      <v-card :color="item.color" dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title v-text="item.title"></v-card-title>

            <v-card-subtitle v-text="item.artist"> </v-card-subtitle>

            <v-card-actions>
              <v-btn text>Baca Sekarang</v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getInfo: "info/info"
    })
  }
};
</script>
