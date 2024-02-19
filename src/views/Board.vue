<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div>
        <div v-if="isLoading" class="md:h-[4rem] md:w-screen md:border-b-2 md:border-black">
            <p>Loading lists...</p>
        </div>
        <div v-else class="md:w-screen md:flex md:gap-6 md:border-b-2 md:border-black">
            <div @click="clickHandle">
                <router-link v-for="(list, index) in lists" :key="index" :to="{ path: `${list.id}`}">
                    <p>{{list?.name}}</p>
                </router-link>
            </div>
        </div>
        <router-view />
    </div>
</template>
