import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: { path: "/boards/1/lists" },
        children: [
            {
                path: "boards/:id/lists",
                component: () => import("../views/Board.vue"),
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
