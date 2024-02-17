<script setup lang="ts">
import { useLists } from "../queries/listQueries/useGetList";

const { lists } = useLists();
</script>

<template>
    <div class="md:w-screen md:flex md:border-b-2 md:border-black">
        <ul v-for="(list, index) in lists" :key="index">
            <li>{{list}}</li>
        </ul>
    </div>
    <div>
        <!-- in this router view needs to be the cards -->
        <router-view />
    </div>
</template>
