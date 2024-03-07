<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import EditNameModal from "../components/modals/EditNameModal.vue";
import { useBoards } from "../queries/boardQueries/useBoards";

const { isLoading, boards } = useBoards();
</script>

<template>
    <div class="flex md:items-center py-3 pl-6 mt-6">
        <EditNameModal :boards="boards" />
        <div v-if="isLoading" class="pl-[4rem] text-3xl text-green-400"><Spinner /></div>
        <div v-else v-for="(board, index) in boards" :key="index">
            <div class="md:flex">
                <div class="text-3xl pl-6">{{ board?.boardName }}</div>
            </div>
        </div>
    </div>
</template>
