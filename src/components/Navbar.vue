<script setup lang="ts">
import EditNameModal from "../components/modals/EditNameModal.vue";
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="md:flex md:gap-4 md:py-3 md:pl-6">
        <EditNameModal />
        <div v-if="isLoading" class="md:pl-6 md:text-3xl">Loading...</div>
            <div v-else class="md:flex md:gap-4 md:items-center">
                <div @click="clickHandle">
                    <router-link v-for="(board, index) in boards" :key="index" :to="{ path: `/boards/${board.id}`}">
                        <p class="md:pl-6 md:text-3xl">{{ board?.name }}</p>
                    </router-link>
                </div>
            </div>
    </div>
</template>
