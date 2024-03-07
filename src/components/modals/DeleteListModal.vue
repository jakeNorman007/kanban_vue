<script setup lang="ts">
import DeleteIcon from "../../icons/DeleteIcon.vue";
import { Teleport, ref } from "vue";
import { useDeleteList } from "../../queries/listQueries/useDeleteList";

const { isDeleting, deleteList } = useDeleteList();

const modalOpen = ref<boolean>(false);

defineProps(["list"],);
</script>

<template>
    <button @click="modalOpen = true"> 
        <DeleteIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 
        top-0 opacity-25">
        <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[30rem] 
            h-[12rem] left-[11%] md:left-[35%] top-[40%] md:top-[40%]">
            <div class="flex items-center">
                <p class="text-xl">Delete list</p>
                <p class="text-xl text-green-400">.</p>
            </div>
            <div class="flex flex-col gap-3">
                <p>Are you sure you want to delete this list?</p>
                <p>This action cannot be undone!</p>
                <div class="flex gap-3">
                    <button @click="deleteList(list)" :disabled="isDeleting" 
                        class="w-[15rem] hover:bg-green-300 py-2 bg-green-400">
                        <p>Delete</p>
                    </button>
                    <button @click="modalOpen = false" class="w-[15rem] hover:bg-green-300 py-2 bg-green-400">
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
        </Teleport>
    </div>
</template>
