<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import { getCards } from "../queries/cardQueries/useGetCard";
import CardInfoModal from "../components/modals/CardInfoModal.vue";

const { isLoading, cards } = getCards();
</script>

<template>
    <div>
        <div v-if="isLoading"><Spinner /></div>
        <div v-else class="md:p-6">
            <div v-for="(card, index) in cards" :key="index" class="md:flex md:gap-7 md:flex-wrap md:mx-[4rem] md:px-[2rem]
                md:overflow-y-scroll md:h-[45rem] md:scrollbar-hide md:py-[1rem]">
                <div class="md:flex md:items-center md:justify-between md:p-3 md:h-[5rem] md:w-[23rem] md:shadow md:border-t-2
                    md:border-green-400">
                    <p class="md:text-xl">{{ card?.name }}</p>
                    <button><CardInfoModal /></button>
                </div>
            </div>
        </div>
    </div>
</template>
