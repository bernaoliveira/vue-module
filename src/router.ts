import { createRouter, createWebHistory } from "vue-router";

// Define modules here
import TodoModule from "@/modules/todo";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [TodoModule.routes]
});

export default router;
