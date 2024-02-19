import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/boards/1/",
    },
    {
        path: "/boards/:id",
        component: () => import("../views/Board.vue"),
        children: [
            {
                path: "list/:listId",
                component: () => import("../views/Card.vue"),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("../components/NotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
