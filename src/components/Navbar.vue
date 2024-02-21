<script setup lang="ts">
import EditNameModal from "../components/modals/EditNameModal.vue";
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
        <div v-if="isLoading" class="md:py-6 md:pl-6">Loading boards...</div>
        <div v-else class="md:flex md:gap-5 md:items-center md:py-6">
            <div @click="clickHandle">
                <router-link v-for="(board, index) in boards" :key="index" :to="{ path: `/boards/${board.id}`}">
                    <p class="md:pl-6 md:text-3xl">{{ board?.name }}</p>
                </router-link>
            </div>
            <EditNameModal />
        </div>
</template>
