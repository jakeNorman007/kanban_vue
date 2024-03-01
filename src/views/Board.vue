<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import CreateListModal from "../components/modals/CreateListModal.vue";
import EditListModal from "../components/modals/EditListModal.vue";
import DeleteListModal from "../components/modals/DeleteListModal.vue";
import { useLists } from "../queries/listQueries/useGetList";
//import { useGetOneList } from "../queries/listQueries/useGetOneList";

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
        <div v-else class="md:flex md:gap-5 md:items-center">
            <div v-for="(list, index) in lists" :key="index">
                <div @click="clickHandle">
                    <router-link :to="{ path: `${list.id}`}">
                        <button class="md:bg-green-400 md:w-[15rem] md:py-1 md:rounded">
                            {{list?.listName}}
                        </button>
                    </router-link>
                </div>
                <div class="md:flex">
                    <EditListModal :id="list?.id" :listName="list?.listName"/>
                    <DeleteListModal :list="list?.id"/>
                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>
