<script setup lang="ts">
import { useBoards } from "./queries/useBoards";

const { boards } = useBoards();
</script>

<template>
    <div v-for="(board, index) in boards" :key="index">
        <div>{{ board.name }}</div>
    </div>
</template>
