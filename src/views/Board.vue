<script setup lang="ts">
import Spinner from "../icons/Spinner.vue";
import CreateListModal from "../components/modals/CreateListModal.vue";
import EditListModal from "../components/modals/EditListModal.vue";
import DeleteListModal from "../components/modals/DeleteListModal.vue";
import { useRoute } from "vue-router";
import { useLists } from "../queries/listQueries/useGetList";
import { ref } from "vue";

const route = useRoute();
const currentId = route.params.listId;

const { isLoading, lists } = useLists();

const editShowing = ref(true);

function handleRefresh() {
    window.location.reload();
};
</script>

<template>
    <div class="md:flex md:gap-6 md:ml-6">
        <CreateListModal />
        <div v-if="isLoading"><Spinner class="text-green-400" /></div>
        <div v-else class="md:flex md:gap-5 md:items-end">
            <div v-for="(list, index) in lists" :key="index" class="md:flex md:flex-col-reverse">
                <div @click="handleRefresh()" class="md:bg-green-400 md:w-[12rem] md:py-1 md:px-3">
                    <router-link :to="{ path: `${list.id}`}">
                        <p>{{list?.listName}}</p>
                    </router-link>
                </div>
                <div v-show="editShowing == true ? list?.id == currentId : false" class="md:flex md:justify-end md:ml-[9rem]">
                    <EditListModal :listName="list?.listName" />
                    <DeleteListModal :list="list?.id"/>
                </div>
            </div>
        </div>
    </div>
    <router-view :key='$route.fullPath'/>
</template>
