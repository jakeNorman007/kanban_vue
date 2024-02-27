<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import CreateListModal from "../components/modals/CreateListModal.vue";
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

const clickHandle = () => {
    window.location.reload();
};
</script>

<template>
    <div class="md:flex md:gap-6 md:ml-6">
        <div class="md:mb-3 md:mt-6">
            <CreateListModal />
        </div>
        <div v-if="isLoading"><Spinner class="text-green-400" /></div>
        <div v-else class="md:flex md:gap-6">
            <div v-for="(list, index) in lists" :key="index">
                <div class="md:flex md:justify-end md:bg-gray-200 md:ml-[11rem] md:pr-2 md:rounded-t md:pt-1">
                    <EditIcon /><DeleteIcon />
                </div>
                <div @click="clickHandle">
                    <router-link :to="{ path: `${list.id}`}">
                        <button class="md:bg-green-400 md:w-[15rem] md:py-1 md:rounded-l md:rounded-br">
                            {{list?.listName}}
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>
