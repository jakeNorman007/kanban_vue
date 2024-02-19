<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <div class="md:overflow-x-hidden">
        <Navbar />
        <router-view />
    </div>
</template>
