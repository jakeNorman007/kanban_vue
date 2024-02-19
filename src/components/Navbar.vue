<script setup lang="ts">
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="">
        <div v-if="isLoading">Loading boards...</div>
        <div v-else>
            <div @click="clickHandle">
                <router-link v-for="(board, index) in boards" :key="index" :to="{ path: `/boards/${board.id}`}">
                    <p class="md:pl-6 md:text-2xl">{{ board?.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
