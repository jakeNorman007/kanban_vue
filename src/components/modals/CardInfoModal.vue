<script setup lang="ts">
import HamburgerIcon from '../../icons/HamburgerIcon.vue';
import { ref } from 'vue';

const modalOpen = ref<boolean>(false);
const toggleEditCard = ref<boolean>(false);

defineProps(["cardName", "cardDescription", "cardId"],)
</script>

<template>
    <button @click="modalOpen = true"> 
        <HamburgerIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 top-0 opacity-25">
    <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[35rem] 
            h-[37rem] left-[11%] md:left-[30%] top-[40%] md:top-[15%]">
            <div class="flex justify-between">
                <p>Your card.</p>
                <button @click="toggleEditCard = true">
                    <HamburgerIcon />
                </button>
                <div v-if="toggleEditCard" class="bg-gray-200 flex flex-col fixed z-[997] left-[59.3%] 
                    top-[11.5rem]">
                    <button class="hover:bg-green-300 px-3 py-2">Edit card</button>
                    <button @click="toggleEditCard = false" class="hover:bg-green-300 px-3 py-2">Close</button>
                </div>
            </div>
            <p>Card ID: {{ cardId }}</p>
            <p>Card name: {{ cardName }}</p>
            <p>Task description: {{ cardDescription }}</p>
            <div class="h-[20rem] border border-black">Subtask list goes here.</div>
            <button @click="modalOpen = false" class="w-full hover:bg-green-300 py-2 bg-green-400">
                <p>Close</p>
            </button>
        </div>
    </Teleport>
    </div>
</template>
