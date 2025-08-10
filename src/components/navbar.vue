<!-- eslint-disable no-unused-vars -->
<template>
  <nav>
    <v-toolbar flat app class="white">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">DANATECT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey" @click="signOut">
        <span>SIGN OUT</span>
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-avatar>
          <img src="/sc.png"/>
        </v-avatar>
      </v-layout>
      <v-list>
        <v-list-item-group>
          <v-list-item 
            v-for="link in links" 
            :key="link.text"
            :to="link.path"
            @click="closeDrawer"
            class="mb-2"
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
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', path: '/' },
        { icon: 'mdi-folder', text: 'Projects', path: '/projects' },
        { icon: 'mdi-account-group', text: 'Team', path: '/team' },
        {icon:'mdi-person',text:'bai4',path:'/bai4'},
        {icon:'mdi-person',text:'bai5',path:'/bai5'},
        {icon:'mdi-person',text:'bai6',path:'/bai6'},
        {icon:'mdi-person',text:'bai7',path:'/bai7'}
      ]
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
</style>