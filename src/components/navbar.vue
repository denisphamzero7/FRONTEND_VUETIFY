<!-- eslint-disable no-unused-vars -->
<template>
  <nav>

    <v-snackbar v-model="snackbar" top color="success">
      <span>tuyệt vời đã thêm project thành công</span>
      <v-btn text class="white--text"  @click="snackbar=false"> Close</v-btn>
    </v-snackbar>
    <v-app-bar app  class="grey lighten-4">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-bold">TODO</span><span class="font-weight-light">NINJA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            text 
            class="grey--text text-none font-weight-medium mr-2" 
            v-bind="attrs" 
            v-on="on"
          >
            <v-icon left class="mr-1">mdi-menu-down</v-icon>
            MENU
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item
            v-for="item in menuItems"
            :key="item.text"
            :to="item.path"
            @click="closeMenu"
            class="py-2"
          >
            <v-list-item-icon class="mr-2">
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-body-2">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      
      <v-btn text color="grey" @click="signOut">
        <span>SIGN OUT</span>
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer" 
      class="purple darken-2"
      app
      permanent
      width="280"
    >
      <v-layout column align-center class="pt-4">
        <v-avatar size="80" class="mb-3">
          <img src="/sc.png" alt="Avatar">
        </v-avatar>
        <h3 class="white--text mb-4">TODONINJA</h3>
      </v-layout>
      
      <v-divider class="mx-3 mb-4"></v-divider>
      
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :to="link.path"
            class="mb-2"
            active-class="purple lighten-1"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
      <v-spacer></v-spacer>
      
      <div class="pa-3">
        <Popup @addProject="snackbar=true"/>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";

export default {
  name: "Navbar",
  components: { Popup },
  data() {
    return {
      snackbar:false,
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", path: "/" },
        { icon: "mdi-folder", text: "Projects", path: "/projects" },
        { icon: "mdi-account-group", text: "Team", path: "/team" },
        { icon: "mdi-person", text: "bai4", path: "/bai4" },
        { icon: "mdi-person", text: "bai5", path: "/bai5" },
        { icon: "mdi-person", text: "bai6", path: "/bai6" },
        { icon: "mdi-person", text: "bai7", path: "/bai7" },
        { icon: "mdi-person", text: "bai13", path: "/grid1" },
      ],
      menuItems: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', path: '/' },
        { icon: 'mdi-folder', text: 'Projects', path: '/projects' },
        { icon: 'mdi-account-group', text: 'Team', path: '/team' },
        { icon: 'mdi-cog', text: 'Settings', path: '/settings' },
        { icon: 'mdi-help-circle', text: 'Help', path: '/help' }
      ]
    };
  },
  methods: {
    signOut() {
      // Add sign out logic here
      console.log("Signing out...");
    },
    
    closeMenu() {
      // Menu will close automatically when item is clicked
    }
  },
};
</script>

<style scoped>
.v-app-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-app-bar-nav-icon {
  color: #666 !important;
}

.v-navigation-drawer {
  .v-list-item {
    margin: 8px 16px;
    border-radius: 8px;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .v-list-item-icon {
    color: white;
  }

  .v-list-item-title {
    color: white;
  }
}

.v-menu .v-list {
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 200px;
}

.v-menu .v-list-item {
  border-radius: 4px;
  margin: 2px 8px;
  
  &:hover {
    background-color: #f5f5f5;
  }
}

/* Make menu button more visible */
.v-btn.text-none {
  text-transform: none !important;
  letter-spacing: normal !important;
}
</style>
