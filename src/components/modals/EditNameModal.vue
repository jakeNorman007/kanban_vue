<script setup lang="ts">
import EditIcon from "../../icons/EditIcon.vue";
import { useUpdateBoard } from "../../queries/boardQueries/useUpdateBoard";
import { Teleport, ref } from "vue";

const { updateBoardName, isUpdating } = useUpdateBoard();

const modalOpen = ref<boolean>(false);

defineProps(["boards"],);

function handleUpdate(event: any, field: number) {
    const { value } = event.target;

    if (!value) return;
    updateBoardName({ [field]: value });
}

function handleRefresh() {
    window.location.reload();
};
//TODO add a watcher for the name edit
</script>

<template>
    <button @click="modalOpen = true" class="flex gap-2 bg-green-400 hover:bg-green-300 px-3 py-2">
        <EditIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 top-0 opacity-25">
    <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[30rem] 
            h-[11rem] left-[11%] md:left-[35%] top-[40%] md:top-[40%]">
            <div class="flex items-center">
                <p class="text-xl">Edit board name</p>
                <p class="text-xl text-green-400">.</p>
            </div>
            <form v-if="isUpdating = true" v-for="(board, index) in boards" :key="index">
                <input @blur="(event) => handleUpdate(event, 'boardName')" :value="board?.boardName" id="board_name" 
                    maxlength="15" class="mb-3 w-[28rem] px-2 text-lg py-2 border border-black" />
                <div class="flex justify-center gap-3">
                    <button @click.prevent="modalOpen = false; handleRefresh();" 
                        class="w-full hover:bg-green-300 py-2 bg-green-400">
                        <p>update.</p>
                    </button>
                </div>
            </form>
        </div>
    </Teleport>
    </div>
</template>
