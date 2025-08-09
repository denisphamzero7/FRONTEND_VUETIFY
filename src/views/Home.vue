<script setup lang="ts"></script>

<template>
  <div class="text-center pa-5">
    <h1>Trang Home</h1>

    <v-btn class="pink white--text"> click me </v-btn>
    <v-btn depressed color="pink"> click me</v-btn>
    <v-btn text color="pink">click me</v-btn>
    
    <!-- Test different icon names -->
    <v-btn><v-icon left>mdi-email</v-icon><span>click here send to email</span></v-btn>
    <v-btn><v-icon left>mdi-email-outline</v-icon><span>email outline</span></v-btn>
    <v-btn><v-icon left>mdi-account</v-icon><span>account icon</span></v-btn>
    <v-btn><v-icon left>mdi-heart</v-icon><span>heart icon</span></v-btn>
    
    <!-- Test without left prop -->
    <v-btn><v-icon>mdi-star</v-icon><span>star icon</span></v-btn>
  </div>
</template>

<style lang="scss" scoped></style>
