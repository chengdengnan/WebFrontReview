import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import "@/styles/index.scss" // global css
import "./permission"; // permission control
import PrismEditor from "@/components/PrismEditor/index.vue";
import auth from "@/utils/auth"

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'production') {
    require('./mockjs/index')
}


const app = createApp(App);

// 全局方法
app.config.globalProperties.$builtIn = auth.builtIn;



app.use(store);
app.use(router);
app.use(ElementPlus);
app.component("WebPrismEditor", PrismEditor)
app.mount('#app');



