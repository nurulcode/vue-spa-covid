export default {
  namespaced: true,
  state: {
    items: [
      {
        color: "success",
        title: "[BERITA]",
        artist: "5 Cara Efektif Agar Tidak Tertular Virus Corona, https://www.alodokter.com/",
        data: []
      },
      {
        color: "error",
        title: "[HOAX]",
        artist: "Pasien Suspect Corona Kabur dari RSU Manokwari",
        data: []
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    info: state => state.items
  }
};
