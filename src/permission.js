import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
    NProgress.done();
});

router.afterEach(() => {
    NProgress.done();
})