export default {
  namespaced: true,
  state: {
    items: [
      {
        Kab: "Kota Sorong",
        OPD: 20
      },
      {
        Kab: "Kab. Manokwari",
        OPD: 36
      },
      {
        Kab: "Kab. Sorong",
        OPD: 12
      },
      {
        Kab: "Kab. Fak-Fak",
        OPD: 12
      },
      {
        Kab: "Kab. Raja Ampat",
        OPD: 2
      },
      {
        Kab: "Kab. Kaimana",
        OPD: 0
      },
      {
        Kab: "Kab. Teluk Bintuni",
        OPD: 0
      },
      {
        Kab: "Kab. Teluk Wondama",
        OPD: 3
      },
      {
        Kab: "Kab. Sorong Selatan",
        OPD: 0
      },
      {
        Kab: "Kab. Manokwari Selatan",
        OPD: 1
      }
    ],
    info: [{ date: "23 Maret 2020", title: "LAPORAN REKAPITULASI OPD PAPUA BARAT" }]
  },
  mutations: {},
  actions: {},
  getters: {
    papua_barat: state => state.items,
    info: state => state.info
  }
};
