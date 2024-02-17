<script setup lang="ts">
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

//TODO: set up a watch to react to the params cahnge so page will refresh?
//for now this just refreshes the page.
const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="md:h-screen md:flex md:flex-col md:border-r-2 md:border-black">
        <h1>Deskbink.</h1>
        <div v-if="isLoading" class="md:w-[14rem] md:h-screen">Loading boards...</div>
        <div v-else class="md:w-[14rem] md:h-screen md:gap-6">
            <nav v-for="(board, index) in boards" :key="index">
                <div @click="clickHandle">
                    <button @click="$router.push(`/boards/${board.id}/lists`)">
                        {{ board?.name }}
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>
