<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <div class="md:flex md:overflow-x-hidden">
        <Navbar />
        <div>
            <router-view />
        </div>
    </div>
</template>
