<script setup lang="ts">

</script>

<template>
    <div>
        <v-btn class="pink white--text">click-me</v-btn>
        <v-btn depressed color="pink">click me</v-btn>
        <v-btn text> sử dụng text để tắt shadow (sử flat không được)</v-btn> 
        <v-btn depressed class="pink white--text">

            <v-icon right>mdi-email</v-icon>
            <span>có icon</span>
        </v-btn>
        <v-btn depressed smail class="pink white--text">

<v-icon left small>mdi-email</v-icon>
<span>có icon</span>
</v-btn>
<v-btn depressed large class="pink white--text">

<v-icon left large>mdi-email</v-icon>
<span>có icon</span>
</v-btn>
<v-btn depressed small dark color="purple">

<v-icon left>mdi-heart-outline </v-icon>
<span>có icon</span>
</v-btn>
    </div>
</template>

<style lang="scss" scoped>

</style>