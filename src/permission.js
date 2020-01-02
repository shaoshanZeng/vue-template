import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/home'];

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (whiteList.indexOf(to.path) !== -1) {
        next()
    } else {
        next('/login')
        NProgress.done()
    }
});

router.afterEach(() => {
    NProgress.done();
})