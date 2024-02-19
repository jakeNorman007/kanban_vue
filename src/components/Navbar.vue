<script setup lang="ts">
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="md:flex md:border-b-2 border-black">
        <p>Deskbink.</p>
        <div v-if="isLoading">Loading boards...</div>
        <div v-else>
            <div @click="clickHandle">
                <router-link v-for="(board, index) in boards" :key="index" :to="{ path: `/boards/${board.id}`}">
                    <p>{{ board?.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
