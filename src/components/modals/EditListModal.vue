<script setup lang="ts">
import EditIcon from "../../icons/EditIcon.vue";
import { Teleport, ref } from "vue";
import { useUpdateList } from "../../queries/listQueries/useUpdateList";
import { useRoute } from "vue-router";

const modalOpen = ref<boolean>(false);
const { updateListName, isUpdating } = useUpdateList();
const route = useRoute();
const id = route.params.listId;

defineProps(["listName"],);

function handleUpdate(event: any, field: any) {
    const { value } = event.target;
    //console.log(value);

    if (!value) return;
    updateListName({ [field]: value, id });
}

function handleRefresh() {
    window.location.reload();
};
//TODO add a watcher for the name edit
</script>

<template>
    <button @click="modalOpen = true"> 
        <EditIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 
        top-0 opacity-25">
        <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[30rem] 
            h-[11rem] left-[11%] md:left-[35%] top-[40%] md:top-[40%]">
            <div class="flex items-center">
                <p class="text-xl">Edit list name</p>
                <p class="text-xl text-green-400">.</p>
            </div>
            <form :disabled="isUpdating">
                <input type="text" @blur="(event) => handleUpdate(event, 'listName')" :value="listName" id="list_name"
                required maxlength="15" class="mb-3 w-[28rem] px-2 text-lg py-2 border border-black" />
                <div class="flex justify-center gap-3">
                    <button @click.prevent="modalOpen = false; handleRefresh();" class="w-full hover:bg-green-300 py-2 bg-green-400">
                        <p>Update.</p>
                    </button>
                </div>
            </form>
        </div>
        </Teleport>
    </div>
</template>
