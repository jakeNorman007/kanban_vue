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
    <div class="md:flex md:gap-6 md:ml-6 md:mt-6 md:items-center">
        <div>
            <CreateListModal />
        </div>
        <div v-if="isLoading"><Spinner class="text-green-400" /></div>
        <div v-else>
            <div @click="clickHandle" class="md:flex md:gap-6">
                <router-link v-for="(list, index) in lists" :key="index" :to="{ path: `${list.id}`}" class="flex gap-3">
                    <button class="md:bg-green-400">{{list?.listName}}</button><EditIcon /><DeleteIcon />
                </router-link>
                <div>

                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>
