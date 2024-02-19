<script setup lang="ts">
import { getCards } from "../queries/cardQueries/useGetCard";

const { isLoading, cards } = getCards();
</script>

<template>
    <div v-if="isLoading">Loading cards...</div>
    <div v-else>
        <div v-for="(card, index) in cards" :key="index">
            <p>{{ card?.name }}</p>
        </div>
    </div>
</template>
