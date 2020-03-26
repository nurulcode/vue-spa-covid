<template>
  <v-row>
    <v-col cols="12">
      <!-- Card -->
      <div class="text-center">
        <h2 class="success--text">KAWAL CORONA</h2>
        <p><span class=" font-weight-light">Coronavirus Global & Indonesia Live Data</span></p>
      </div>
      <v-carousel cycle hide-delimiters height="200" show-arrows-on-hover interval="6000">
        <v-carousel-item v-for="(item, i) in getSlide" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      <hr />

      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="info" dark>
            <div class="pa-4 text-center font-weight-light">
              <div class="text-center mt-2" v-if="countryAll.length != 0">
                <h2>{{ countryAll.Country_Region }}</h2>
                <p>{{ new Date(countryAll.Last_Update) | moment("LLLL") }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="primary">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"></v-card-title>
                <v-card-subtitle>
                  <span>TERJANGKIT</span>
                  <h2 class="font-weight-bold">{{ countryAll.Confirmed }}</h2>
                  <span>ORANG</span>
                </v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="60" tile>
                <v-img src="../assets/indonesia-PZq.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="orange">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"></v-card-title>

                <v-card-subtitle>
                  <span>PEMULIHAN</span>
                  <h2 class="font-weight-bold">{{ countryAll.Active }}</h2>
                  <span>ORANG</span>
                </v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="60" tile>
                <v-img src="../assets/sad-u6e.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="success">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"></v-card-title>

                <v-card-subtitle>
                  <span>SEMBUH</span>
                  <h2 class="font-weight-bold">{{ countryAll.Recovered }}</h2>
                  <span>ORANG</span>
                </v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="60" tile>
                <v-img src="../assets/happy-ipM.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="error">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"></v-card-title>

                <v-card-subtitle>
                  <span>MENINGGAL</span>
                  <h2 class="font-weight-bold">{{ countryAll.Deaths }}</h2>
                  <span>ORANG</span>
                </v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="60" tile>
                <v-img src="../assets/emoji-LWx.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Card -->
      <template>
        <div class="mt-5">
          <v-card>
            <v-card-title>
              BERDASARKAN PROVINSI
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
