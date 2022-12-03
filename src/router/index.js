import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../App.vue'),
        meta: {
            title: 'Welcome to Spy\'s Website!',
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(async (to) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});

export default router
