<script setup lang="ts">
import EditIcon from "../../icons/EditIcon.vue";
import { ref } from "vue";

const open = ref<boolean>(false);
</script>

<template>
    <button @click="open = true" class="md:flex md:gap-2 md:bg-green-400 md:hover:bg-green-300 md:rounded md:px-3 md:py-2">
        <p>Edit board</p><EditIcon />
    </button>
    <div v-if="open" @click="open = false" class="md:h-screen md:fixed md:bg-black md:z-[998] md:w-full md:left-0 
        md:top-0 md:opacity-25">
    <Teleport to="body">
        <div v-if="open" class="md:flex md:flex-col md:bg-white md:rounded md:fixed md:z-[999] md:w-[30rem] md:h-[4rem] 
            md:left-[35%] md:top-[40%]">
            <p>Hello? I modal.</p>
            <button @click="open = false">Close modal</button>
        </div>
    </Teleport>
    </div>
</template>
