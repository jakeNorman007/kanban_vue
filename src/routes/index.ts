import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    { 
        path: "/",
        name: "home",
        redirect: "/boards/1/lists/1",
    },
    {
        path: "/boards/:id/lists",
        name: "boards", 
        component: () => import("../views/Board.vue"),
        props: route => ({ ...route.params, id: route.params.id }),
        children: [
            { 
                path: ":listId",
                name: "list_cards",
                component: () => import("../views/Card.vue"),
                props: route => ({ ...route.params, id: route.params.id }),
            },
        ],
    },
    { path: '/:pathMatch(.*)*', component: () => import("../components/NotFound.vue")}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
