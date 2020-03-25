<template>
  <v-row>
    <v-col cols="12">
      <!-- Card -->
      <div class="text-center">
        <h2 class="success--text">KAWAL CORONA</h2>
        <p><span class=" font-weight-light"></span></p>
      </div>

      <hr />
      <v-row class="mt-2" dense>
        <v-col cols="12">
          <v-card color="success" dark>
            <div class="pa-4 text-center font-weight-light">
              <div class="text-center mt-2">
                <h2>{{ getItem[0].title }}</h2>
                <p>{{ getItem[0].date }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- Card -->
      <template>
        <div class="mt-5">
          <v-card>
            <v-card-title>
              BERDASARKAN KABUPATEN
              <v-spacer></v-spacer>
              <v-text-field color="success" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="getData" :search="search"></v-data-table>
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
          text: "Kabupaten Kota",
          align: "start",
          sortable: false,
          value: "Kab"
        },
        { text: "OPD", value: "OPD" }
      ],
      search: "",
      desserts: []
    };
  },

  computed: {
    ...mapGetters({
      getData: "pb/papua_barat",
      getItem: "pb/info"
    })
  }
};
</script>
