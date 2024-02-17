<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();
</script>

<template>
    <div v-if="isLoading">Loading lists...</div>
    <div class="md:w-screen md:flex md:gap-6 md:border-b-2 md:border-black">
        <nav v-for="(list, index) in lists" :key="index">
            <button @click="$router.push(`lists/${list.name}`)">{{list?.name}}</button>
        </nav>
    </div>
    <div>
        <!-- in this router view needs to be the cards -->
        <router-view />
    </div>
</template>
