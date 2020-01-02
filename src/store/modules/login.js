export default {
    namespaced: true,
    state: {
        loginFormDrawer: false,
        registerFormDrawer: false
    },
    mutations: {
        SET_LOGIN_DRAWER: (state) => {
            state.loginFormDrawer = !state.loginFormDrawer;
        },
        SET_REGISTER_DRAWER: (state) => {
            state.registerFormDrawer = !state.registerFormDrawer;
        },
    },
    actions: {
        loginDrawerToggle({ commit }) {
            commit('SET_LOGIN_DRAWER')
        },
        registerDrawerToggle({ commit }) {
            commit('SET_REGISTER_DRAWER')
        }
    }
}