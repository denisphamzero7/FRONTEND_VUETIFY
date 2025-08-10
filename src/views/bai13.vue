<script setup lang="ts">

</script>

<template>
    <div>
        <h1>grid</h1>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-btn ouline block class="primary">1</v-btn>

                </v-flex>
                <v-flex xs12 md2>
                    <v-btn ouline block class="primary">2</v-btn>

                </v-flex>
                <v-flex xs12 md2>
                    <v-btn ouline block class="primary">3</v-btn>

                </v-flex>
                <v-flex xs12 md2>
                    <v-btn ouline block class="primary">4</v-btn>

                </v-flex>

            </v-layout>


            <v-layout row wrap class="justify-end">
                <v-flex xs4 md3>
                    <v-btn outline block class="info">1</v-btn>
                </v-flex>
                <v-flex xs4 md3>
                    <v-btn outline block class="info">2</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<style lang="scss" scoped></style>