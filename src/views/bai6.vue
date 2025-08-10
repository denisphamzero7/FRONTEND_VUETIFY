<script setup lang="ts">

</script>

<template>
    <div>
    <h1>Breakpoints và visibitity</h1>

    <h2>Breakpoints</h2>
    <p > xs: khung hình nhỏ hơn 600px</p>
    <p> sm: khung hình nhỏ hơn hoặc bằng tablet 600px ><960px</p>
    <p class="hidden-md-and-up"> md: khung hình lớn hơn hoặc bằng laptop 960px up: xuất hiện khi khu hình nhỏ hơn laptop>< 1264px</p>
    <p class="hidden-md-and-down"> md: khung hình lớn hơn hoặc bằng laptop 960px down :hiện lên khu hình laptop nhưng ẩn đi khi khung hình nhỏ hơn  laptop >< 1264px</p>
    <p> lg: khung hình bằng bằng Desktop 1264px > < 1904px</p>
    <p> xl: khung hình siêu lớn 4k hoặc ngoại cỡ>> 1904px</p>
    </div>
</template>

<style lang="scss" scoped>

</style>