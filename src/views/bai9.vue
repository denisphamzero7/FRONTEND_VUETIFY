<!-- eslint-disable no-unused-vars -->
<template>
    <nav>
  
      
      <v-app-bar app  class="grey lighten-4">
        <v-app-bar-nav-icon @click="dra=!dra" class="grey--text"></v-app-bar-nav-icon>
       

      </v-app-bar>
  
      <v-navigation-drawer 
        v-model="dra" 
        class="purple darken-2"
        app
        width="300"
      >
        
      
      </v-navigation-drawer>
    </nav>
  </template>
  
  <script>

  
  export default {
    data() {
    return {
      dra:false,}}
 

  };
  </script>
  
  <style scoped>
  .v-app-bar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  </style>
  