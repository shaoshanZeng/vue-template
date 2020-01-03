import { constantRoutes } from '@/router'


export default {
    namespaced: true,
    state: {
        routes: constantRoutes,
        addRoutes: []
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
    }
}