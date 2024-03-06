<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import HamburgerIcon from "../icons/HamburgerIcon.vue";
import CreateListModal from "../components/modals/CreateListModal.vue";
import EditListModal from "../components/modals/EditListModal.vue";
import DeleteListModal from "../components/modals/DeleteListModal.vue";
import { useLists } from "../queries/listQueries/useGetList";

const { isLoading, lists } = useLists();

function handleRefresh() {
    window.location.reload();
};
</script>

<template>
    <div class="md:flex md:items-center md:gap-6 md:ml-6">
        <div>
            <CreateListModal />
        </div>
        <div v-if="isLoading"><Spinner class="text-green-400" /></div>
        <div v-else class="md:flex md:gap-5 md:items-center">
            <div v-for="(list, index) in lists" :key="index" class="md:flex md:items-center">
                <div @click="handleRefresh" class="md:bg-green-400 md:w-[12rem] md:py-1 md:px-3 md:rounded-l">
                    <router-link :to="{ path: `${list.id}`}" >
                        {{list?.listName}}
                    </router-link>
                </div>
                <div class="md:bg-green-400 md:py-1 md:pr-1 md:rounded-r">
                    <HamburgerIcon />
                </div>
                <div class="md:flex">
                    <EditListModal :listName="list?.listName"/>
                    <DeleteListModal :list="list?.id"/>
                </div>
            </div>
        </div>
    </div>
    <router-view :key='$route.fullPath'/>
</template>
