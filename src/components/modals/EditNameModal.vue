<script setup lang="ts">
import EditIcon from "../../icons/EditIcon.vue";
import { useUpdateBoard } from "../../queries/boardQueries/useUpdateBoard";
import { ref } from "vue";

const modalOpen = ref<boolean>(false);
const { updateBoardName, isUpdating } = useUpdateBoard();

defineProps(["boards"],);

function handleUpdate(event: any, field: any) {
    const { value } = event.target;
   //console.log(value);

    if (!value) return;
    updateBoardName({ [field]: value });
}

//TODO add a watcher for the name edit
</script>

<template>
    <button @click="modalOpen = true" class="flex gap-2 bg-green-400 hover:bg-green-300 rounded px-3 py-2">
        <p>Edit board</p><EditIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 
        top-0 opacity-25">
    <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white rounded fixed z-[999] w-[30rem] 
            h-[11rem] left-[11%] md:left-[35%] top-[40%] md:top-[40%]">
            <div class="flex items-center">
                <p class="text-xl">Edit board name</p>
                <p class="text-xl text-green-400">.</p>
            </div>
            <form v-if="isUpdating = true" v-for="(board, index) in boards" :key="index">
                <input @blur="(event) => handleUpdate(event, 'name')" :value="board?.name" id="board_name" 
                    class="mb-3 w-[28rem] px-2 text-lg py-2 rounded border border-black" />
                <div class="flex justify-center gap-3">
                    <button class="w-[15rem] hover:bg-green-300 py-2 rounded bg-green-400">
                        <p>Update</p>
                    </button>
                    <button @click="modalOpen = false" class="w-[15rem] hover:bg-green-300 py-2 rounded bg-green-400">
                        <p>Close</p>
                    </button>
                </div>
            </form>
        </div>
    </Teleport>
    </div>
</template>
