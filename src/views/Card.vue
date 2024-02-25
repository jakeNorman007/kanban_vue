<script setup lang="ts">
import { getCards } from "../queries/cardQueries/useGetCard";

const { isLoading, cards } = getCards();
</script>

<template>
    <div v-if="isLoading">Loading cards...</div>
    <div v-else class="md:p-6">
        <div v-for="(card, index) in cards" :key="index">
            <div>
                <p class="md:h-[15rem] md:w-[25rem] md:border md:border-black md:rounded">
                {{ card?.name }}{{ card?.description }}
                </p>
            </div>
        </div>
    </div>
</template>
