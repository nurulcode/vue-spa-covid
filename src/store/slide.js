export default {
  namespaced: true,
  state: {
    slides: [
      {
        src: "https://1.bp.blogspot.com/-SOJZIv91fMo/Xnmnlquy78I/AAAAAAAAEwc/dJmLL-ew7DgaUYeK4ng7_3FJdvBizFVSgCLcBGAsYHQ/s1600/2.png"
      },
      {
        src: "https://1.bp.blogspot.com/-Csu7J9izKH4/Xns699OTQHI/AAAAAAAAEw4/qA06D-gcQOIYblP-0oVDWMFbnBFGGc8ywCLcBGAsYHQ/s1600/12.png"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    slide: state => state.slides
  }
};
