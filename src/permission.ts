import router from "./router/index";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false }) // NProgress Configuration


router.beforeEach((to, form, next) => {
    NProgress.start();
    if (to.meta.title) {
        document.title = to.meta.title as string;
        next()
    } else {
        next()
    }
    NProgress.done()
})

router.afterEach(() => {
    NProgress.done()
})