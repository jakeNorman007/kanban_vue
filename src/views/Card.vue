<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import EditIcon from "../icons/EditIcon.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import { getCards } from "../queries/cardQueries/useGetCard";

const { isLoading, cards } = getCards();
</script>

<template>
    <div>
        <div v-if="isLoading"><Spinner /></div>
        <div v-else class="md:p-6">
            <div v-for="(card, index) in cards" :key="index">
                <div class="md:flex md:items-center md:justify-between md:p-3 md:h-[5rem] md:w-[23rem] md:shadow md:border-t-2
                    md:border-green-400  md:rounded">
                    <p class="md:text-xl">{{ card?.name }}</p>
                    <div class="md:flex">
                        <!-- placeholder icons till I am ready to make the modals-->
                        <EditIcon /><DeleteIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
