<template>
  <div>
    <v-col v-for="(item, i) in items" :key="i" cols="12">
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
export default {
  data: () => ({
    items: [
      {
        color: "success",
        title: "5 Cara Efektif Agar Tidak Tertular Virus Corona",
        artist: "https://www.alodokter.com/"
      },
      {
        color: "success",
        title: "[HOAX], Pasien Suspect Corona Kabur dari RSU Manokwari",
        artist: "BLUD RSU MANOKWARI"
      }
    ]
  })
};
</script>
