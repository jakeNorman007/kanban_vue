<script setup lang="ts">
import HamburgerIcon from '../../icons/HamburgerIcon.vue';
import { useUpdateCard } from '../../queries/cardQueries/useUpdateCard';
import { useRoute } from "vue-router";
import { ref } from 'vue';

const modalOpen = ref<boolean>(false);
const toggleEditCard = ref<boolean>(false);
const { updateCard, isUpdating } = useUpdateCard(); 
const route = useRoute();
const id = route.params.listId;

defineProps(["cardName", "cardDescription", "cardId"],)

function handleUpdate(event: any, field: any) {
    const { value } = event.target;
    //console.log(value);

    if (!value) return;
    updateCard({ [field]: value, id });
}

function handleRefresh() {
    window.location.reload();
};
</script>

<template>
    <button @click="toggleEditCard = true">
        <HamburgerIcon />
    </button>
    <div v-if="toggleEditCard" class="shadow bg-white border border-black flex flex-col absolute z-[997] 
        left-[79.5%] top-[4.5%]">
        <button @click="modalOpen = true, toggleEditCard = false" class="shadow-inner hover:bg-green-300 px-3 py-2">
            <p>Edit card</p>
        </button>
        <button @click="toggleEditCard = false" class="shadow-inner border-t border-black hover:bg-green-300 px-3 
            py-2">
            <p>Close</p>
        </button>
    </div>
        <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[35rem] 
            h-[37rem] left-[11%] md:left-[30%] top-[40%] md:top-[15%]">
            <div class="flex justify-between ">
                <p>Edit card.</p>
                <button @click="modalOpen = false" class="bg-green-400 px-2 py-1">Back</button>
            </div>
            <div class="flex flex-col">
                <p>Card ID: {{ cardId }}</p>
                <label>Card Name:</label>
                <input class="border border-black" type="text" @blur="(event) => handleUpdate(event, 'cardName')" :value="cardName" />
                <label>Description:</label>
                <textarea class="resize-none h-[10rem] border border-black" :value="cardDescription" />
            </div>
            <button @click.prevent="modalOpen = false; handleRefresh();" class="w-full hover:bg-green-300 py-2 bg-green-400">
                <p>Save changes</p>
            </button>
        </div>
        </Teleport>
</template>
