import { createRouter, createWebHistory } from 'vue-router'

import Customers from '../views/Customers.vue'
const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Admin.vue')
    },
    {
        path: '/customer',
        name: 'customer',
        component: () =>
            import ('../views/Customers.vue')
    },
    {
        path: '/customer/0',
        name: 'customer-details',
        component: () =>
            import ('../views/Customers.vue')
    },
    {
        path: '/customer/:id',
        name: 'customer-details',
        component: () =>
            import ('../views/CustomerDetails.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () =>
            import ('../views/Blogs.vue')
    },
    {
        path: '/blog/:id',
        name: 'blog-details',
        component: () =>
            import ('../views/BlogsDetails.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () =>
            import ('../views/Notfound.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router