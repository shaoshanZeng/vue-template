import Layout from "@/layout/index.vue";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "@/views/login")
    },
    {
        path: "/404",
        name: "404",
        component: () =>
            import(/* webpackChunkName: "404" */ "@/views/error/404")
    },
    {
        path: "/500",
        name: "500",
        component: () =>
            import(/* webpackChunkName: "404" */ "@/views/error/500")
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            }
        ]
    }
];

export default routes;