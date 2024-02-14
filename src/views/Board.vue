<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

</script>

<template>
    <div v-if="isLoading">Loading lists...</div>
    <div v-else class="md:flex md:gap-6">
        <ul v-for="(list, index) in lists" :key="index">
            <li class="md:flex md:flex-col md:items-center bg-zinc-200 md:p-4 md:h-[50rem] md:w-[20rem]">
                {{ list.name }}
            </li>
        </ul>
    </div>
</template>
