<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container fluid class="pa-4">
        <router-view></router-view>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

<style>
.v-application {
  background-color: #f5f5f5 !important;
}
</style>