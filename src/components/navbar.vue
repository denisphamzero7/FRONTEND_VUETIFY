<!-- eslint-disable no-unused-vars -->
<template>
  <nav>
    <v-app-bar flat class="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">DANATECT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey" @click="signOut">
        <span>SIGN OUT</span>
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer app v-model="drawer" class="error" temporary >
      <v-list>
        <v-list-item-group>
          <v-list-item to="/" @click="closeDrawer">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item to="/projects" >
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item to="/team">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Team</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
    signOut() {
      // Add sign out logic here
      console.log('Signing out...');
    }
  }
}
</script>

<style scoped>
.v-app-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>