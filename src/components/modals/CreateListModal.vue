<script setup lang="ts">
import CreateIcon from "../../icons/CreateIcon.vue";
import { useCreateList } from "../../queries/listQueries/useCreateList";
import { useRoute } from "vue-router";
import { Teleport, ref } from "vue";

const { isCreating, createList } = useCreateList();

const route = useRoute();
const board_id = route.params.id;

const modalOpen = ref(false);
const listName = ref("");
</script>

<template>
    <button @click="modalOpen = true" class="flex mt-6 items-center justify-center gap-2 bg-green-400 hover:bg-green-300 
        md:w-[9rem]">
        <p>Add list</p><CreateIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 
        top-0 opacity-25">
        <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[30rem] 
            h-[11rem] left-[11%] md:left-[35%] top-[40%] md:top-[40%]">
            <div class="flex items-center">
                <p class="text-xl">Create new list</p>
                <p class="text-xl text-green-400">.</p>
            </div>
            <form @submit="createList({listName, board_id: board_id})">
                <input type="text"  v-model="listName" id="create_list_form" required maxlength="15"
                    class="mb-3 w-[28rem] px-2 text-lg py-2 border border-black" />
                <div class="flex justify-center gap-3">
                    <button type="submit" :disbaled="isCreating" class="w-[15rem] hover:bg-green-300 py-2 bg-green-400">
                        <p>Create</p>
                    </button>
                    <button @click.prevent="modalOpen = false" class="w-[15rem] hover:bg-green-300 py-2 bg-green-400">
                        <p>Close</p>
                    </button>
                </div>
            </form>
        </div>
        </Teleport>
    </div>
</template>
