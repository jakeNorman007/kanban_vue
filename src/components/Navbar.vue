<script setup lang="ts">
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

const clickHandle = () => {
    window.location.reload();
};

</script>

<template>
    <div class="md:h-screen md:flex md:flex-col md:border-r-2 md:border-black">
    <h1>Deskbink.</h1>
    <div class="md:w-[14rem] md:h-screen " v-if="isLoading">Loading boards...</div>
    <div v-else class="md:w-[14rem] md:h-screen md:gap-6">
        <div @click="clickHandle" v-for="(board, index) in boards" :key="index">
            <button @click="$router.push(`/boards/${board?.id}/lists`)">{{ board?.name }}</button>
        </div>
    </div>
    </div>
</template>
