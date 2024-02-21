<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
        <div v-if="isLoading" class="md:flex md:w-screen md:border-b-2 md:border-black">
            <p>Loading lists...</p>
        </div>
        <div v-else class="md:w-screen">
            <div @click="clickHandle" class="md:flex md:gap-5 md:px-5 md:pb-6">
                <router-link v-for="(list, index) in lists" :key="index" :to="{ path: `${list.id}`}">
                    <p>{{list?.name}}</p>
                </router-link>
            </div>
        </div>
        <router-view />
</template>
