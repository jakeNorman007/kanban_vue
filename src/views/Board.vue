<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";
import { useCards } from "../queries/cardQueries/useGetCard";

const { isLoading, lists } = useLists();
const { cards } = useCards();
</script>

<template>
    <div v-if="isLoading">Loading lists...</div>
    <div v-else class="md:flex md:gap-6">
        <ul v-for="(list, index) in lists" :key="index">
            <li class="md:flex md:flex-col md:items-center md:border-2 md:border-black  md:p-4 md:h-[50rem] md:w-[25rem]">
                {{ list }}
                <ul v-for="(card, index) in cards" :key="index">
                    <li class="md:border-2 md:border-black">
                        {{ card }} {{ $route.params.id }}
                    </li>
                    <router-view />
                </ul>
            </li>
        </ul>
    </div>
</template>
