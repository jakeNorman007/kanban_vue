<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <div class="overflow-x-hidden">
        <div class="flex justify-center md:justify-start shadow md:shadow-none md:p-6 py-4">
            <div class="flex">
                <p class="text-5xl font-semibold">Deskbink</p>
                <p class="text-5xl text-green-500">.</p>
            </div>
        </div>
        <Navbar />
        <router-view />
    </div>
</template>
