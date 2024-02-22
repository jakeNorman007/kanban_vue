<script setup lang="ts">
import EditIcon from "../../icons/EditIcon.vue";
import { ref } from "vue";

const modalOpen = ref<boolean>(false);

defineProps(["boards"],);
</script>

<template>
    <button @click="modalOpen = true" class="md:flex md:gap-2 md:bg-green-400 md:hover:bg-green-300 md:rounded md:px-3 md:py-2">
        <p>Edit board</p><EditIcon />
    </button>
    <div v-if="modalOpen" @click="modalOpen = false" class="md:h-screen md:fixed md:bg-black md:z-[998] md:w-full md:left-0 
        md:top-0 md:opacity-25">
    <Teleport to="body">
        <div v-if="modalOpen" class="md:gap-3 md:p-4 md:flex md:flex-col md:bg-white md:rounded md:fixed md:z-[999] md:w-[30rem] 
            md:h-[11rem] md:left-[35%] md:top-[40%]">
            <div class="md:flex md:items-center">
                <p class="md:text-xl">Change board name</p>
                <p class="md:text-xl md:text-green-400">.</p>
            </div>
            <div v-for="(board, index) in boards" :key="index">
                <input :value="board?.name" id="board_name" class="md:w-[28rem] md:px-2 md:text-lg md:py-2 md:rounded md:border 
                    md:border-black" />
            </div>
            <div class="md:flex md:justify-center md:gap-3">
                <button class="md:w-[15rem] md:hover:bg-green-300 md:py-2 md:rounded md:bg-green-400">
                    <p>Update</p>
                </button>
                <button @click="modalOpen = false" class="md:w-[15rem] md:hover:bg-green-300 md:py-2 md:rounded md:bg-green-400">
                    <p>Close</p>
                </button>
            </div>
        </div>
    </Teleport>
    </div>
</template>
