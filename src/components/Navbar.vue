<script setup lang="ts">
import EditNameModal from "../components/modals/EditNameModal.vue";
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();
</script>

<template>
    <div class="md:flex md:gap-4 md:py-3 md:pl-6">
        <EditNameModal :boards="boards" />
        <div v-if="isLoading" class="md:pl-6 md:text-3xl">Loading...</div>
        <div v-else v-for="(board, index) in boards" :key="index">
            <div class="md:flex">
                <div class="md:pl-6 md:text-3xl">{{ board?.name }}</div>
            </div>
        </div>
    </div>
</template>
