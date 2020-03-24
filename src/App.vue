<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-expand-transition>
          <router-view></router-view>
        </v-expand-transition>
      </v-container>
    </v-content>

    <v-footer app>
      <v-row justify="space-around">
        <v-bottom-navigation justify="space-around" grow color="success">
          <v-btn v-for="(item, index) in menus" :key="index" :to="item.route">
            <span>{{ item.title }}</span>
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    // drawer: false,
    menus: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Info", icon: "mdi-information", route: "/info" },
      { title: "About", icon: "mdi-account", route: "/about" },

      { title: "More", icon: "mdi-arrow-right-bold-box", route: "/more" }
    ]
  })
};
</script>

<!-- <v-app-bar drak v-if="appBar"> -->
<!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
<!-- <v-toolbar-title>
        RSUD
      </v-toolbar-title> -->
<!-- 
      <v-spacer></v-spacer>
      <v-toolbar-title>
        SATGAS COVID19 - PAPUA BARAT
      </v-toolbar-title>
      <v-spacer></v-spacer> -->

<!-- <v-btn icon>
        <v-badge color="orange" overlap>
          <span slot="badge">1</span>
          <v-icon icon> mdi-email </v-icon>
        </v-badge>
      </v-btn> -->
<!-- </v-app-bar> -->
<!-- <v-card>
      <v-navigation-drawer app v-model="drawer">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                Nurul Hidayat
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-group dense="false" color="success">
            <v-list-item v-for="(item, index) in menus" :key="'menu-' + index" :to="item.route">
              <v-list-item-icon color="success">
                <v-icon medium left>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card> -->
