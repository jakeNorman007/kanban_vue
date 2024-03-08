<script setup lang="ts">
import HamburgerIcon from '../../icons/HamburgerIcon.vue';
import { ref } from 'vue';

const modalOpen = ref<boolean>(false);
</script>

<template>
    <button @click="modalOpen = true"> 
        <HamburgerIcon />
    </button>
    <div v-if="modalOpen" class="h-screen fixed bg-black z-[998] w-full left-0 top-0 opacity-25">
    <Teleport to="body">
        <div v-if="modalOpen" class="gap-3 p-4 flex flex-col bg-white fixed z-[999] w-[30rem] 
            h-[11rem] left-[11%] md:left-[35%] top-[40%] md:top-[40%]">
            <p>F U</p>
        </div>
    </Teleport>
    </div>
</template>
