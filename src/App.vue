<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <div class="md:flex">
        <Navbar />
        <div class="m-14">
            <router-view />
        </div>
    </div>
</template>
