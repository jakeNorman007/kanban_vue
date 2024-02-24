<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import CreateIcon from "../icons/CreateIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="md:flex md:gap-6 md:ml-6 md:mt-6 md:items-center">
        <div>
            <button class="flex justify-center items-center gap-3 bg-green-400 hover:bg-green-300 md:py-2 md:rounded 
                md:w-[15rem]">
                <p>Create list</p><CreateIcon />
            </button>
        </div>
        <div v-if="isLoading"><Spinner class="text-green-400" /></div>
        <div v-else>
            <div @click="clickHandle" class="md:flex md:gap-6">
                <router-link v-for="(list, index) in lists" :key="index" :to="{ path: `${list.id}`}" class="flex gap-3">
                    <button class="md:bg-green-400">{{list?.name}}</button><EditIcon /><DeleteIcon />
                </router-link>
                <div>

                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>
