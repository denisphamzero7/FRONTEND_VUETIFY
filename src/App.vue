<template>
  <v-app>
     <v-app-bar app>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
    </v-app-bar>

    <v-main>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
    //
  }),
};
</script>
