<script setup lang="ts">
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

const clickHandle = () => {
    window.location.reload();
};

</script>

<template>
    <div class="md:flex md:gap-6 md:border-b-2 md:border-black md:p-4" v-if="isLoading">Loading boards...</div>
    <div v-else class="md:flex md:gap-6 md:border-b-2 md:border-black md:p-4">
        <div @click="clickHandle" v-for="(board, index) in boards" :key="index">
            <button @click="$router.push(`/boards/${board?.id}/lists`)">{{ board?.name }}</button>
        </div>
    </div>
</template>
