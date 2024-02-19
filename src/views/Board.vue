<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();
</script>

<template>
    <div v-if="isLoading" class="md:h-[4rem] md:w-screen md:border-b-2 md:border-black">
        Loading lists...
    </div>
    <div v-else class="md:h-[4rem] md:w-screen md:flex md:gap-6 md:border-b-2 md:border-black">
        <nav v-for="(list, index) in lists" :key="index">
            <button @click="$router.push(`list/${list?.id}`)">
                {{list?.name}}
            </button>
        </nav>
    </div>
    <router-view />
</template>
