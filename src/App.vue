<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import GithubIcon from "./icons/GithubIcon.vue";
</script>

<template>
    <div class="overflow-x-hidden h-screen">
        <div class="flex justify-between shadow md:p-6 p-4">
            <div class="flex">
                <p class="text-5xl font-semibold">Deskbink</p>
                <p class="text-5xl text-green-400">.</p>
            </div>
            <a href="https://github.com/jakeNorman007/kanban_vue">
                <GithubIcon class="bg-green-400 p-2 hover:bg-green-300"/>
            </a>
        </div>
        <Navbar />
        <router-view />
    </div>
</template>
