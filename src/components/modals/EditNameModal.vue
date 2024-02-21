<script setup lang="ts">
import EditIcon from "../../icons/EditIcon.vue";
import { ref } from "vue";

const open = ref<boolean>(false);
</script>

<template>
    <button @click="open = true" class="md:flex md:gap-2 md:bg-green-400 md:hover:bg-green-300 md:rounded md:px-3 md:py-2">
        <p>Edit board</p><EditIcon />
    </button>
    <div v-if="open" @click="open = false" class="h-screen fixed bg-black z-[998] w-full left-0 top-0 opacity-25">
    <Teleport to="body">
        <div v-if="open" class="flex flex-col bg-white rounded fixed z-[999] w-[30rem] h-[4rem] left-[35%] top-[40%]">
            <p>Hello? I modal.</p>
            <button @click="open = false">Close modal</button>
        </div>
    </Teleport>
    </div>
</template>
