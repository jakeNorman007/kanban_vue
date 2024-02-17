import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/boards/1/lists",
        children: [
            {
                path: "/boards/:id/lists",
                children: [
                    {
                        path: "/boards/:id/lists",
                        component: () => import("../views/Board.vue"),
                            children: [
                            {
                                path: ":listName",
                                component: () => import("../views/Card.vue"),
                            },
                        ],
                    },
                ],
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
