import main from '@/pages/main.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { compile } from 'vue';

const routes = [
    {
        path: '/',
        component: main
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;