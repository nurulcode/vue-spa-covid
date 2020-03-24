<template>
  <v-row>
    <v-carousel cycle hide-delimiters height="250" show-arrows-on-hover interval="6000">
      <v-carousel-item v-for="(item, i) in getSlide" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-col cols="12">
      <!-- Card -->
      <div class="text-center">
        <h2>Jumlah Kasus {{ countryAll.Country_Region }}</h2>
        <p>Pembaruan Terakhir : {{ new Date(countryAll.Last_Update) | moment("LLLL") }}</p>
      </div>

      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="success" dark>
            <div class="pa-4 text-center">
              <h1 color="success">{{ countryAll.Confirmed }}</h1>
              <p>Terjangkit</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="success" dark>
            <div class="pa-4 text-center">
              <h1 color="success">{{ countryAll.Active }}</h1>
              <p>Pemulihan</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="success" dark>
            <div class="pa-4 text-center">
              <h1 color="success">{{ countryAll.Recovered }}</h1>
              <p>Sembuh</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="success" dark>
            <div class="pa-4 text-center">
              <h1 color="success">{{ countryAll.Deaths }}</h1>
              <p>Meninggal</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Card -->
      <template>
        <div class="mt-5">
          <v-card>
            <v-card-title color="success">
              Data Provinsi
              <v-spacer></v-spacer>
              <v-text-field color="success" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
          </v-card>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  inject: ["theme"],
  data() {
    return {
      alignment: "start",
      justify: "space-around",
      country: "Indonesia",
      headers: [
        {
          text: "Provinsi",
          align: "start",
          sortable: false,
          value: "attributes.Provinsi"
        },
        { text: "Terjangkit", value: "attributes.Kasus_Posi" },
        { text: "Sembuh", value: "attributes.Kasus_Semb" },
        { text: "Meninggal", value: "attributes.Kasus_Meni" }
      ],
      search: "",
      desserts: [],
      countryAll: []
    };
  },
  created() {
    this.axios.get("https://api.kawalcorona.com/").then(result => {
      result.data.map(item => {
        if (item.attributes.Country_Region == this.country) return (this.countryAll = item.attributes);
      });
    });

    this.axios.get("https://api.kawalcorona.com/indonesia/provinsi/").then(result => {
      this.desserts = result.data;
    });
  },
  computed: {
    ...mapGetters({
      getSlide: "slide/slide"
    })
  }
};
</script>
