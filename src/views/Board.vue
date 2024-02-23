<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="flex flex-col px-6 mt-6">
        <button class="bg-green-400 hover:bg-green-300 py-2 rounded md:w-[15rem]">Create list</button>
        <div v-if="isLoading" class="md:px-5 md:pb-6">Loading lists...</div>
        <div v-else class="md:w-screen mt-3">
            <div @click="clickHandle" class="flex gap-3 pb-6">
                <router-link v-for="(list, index) in lists" :key="index" :to="{ path: `${list.id}`}">
                    <p>{{list?.name}}</p>
                </router-link>
            </div>
        </div>
        <router-view />
    </div>
</template>
