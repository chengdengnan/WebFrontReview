import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import "@/styles/index.scss" // global css
import "./permission"; // permission control
import auth from "@/utils/auth"
import Register from './register';
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'production') {
    require('./mockjs/index')
}


const app = createApp(App);
// 全局组件注册
new Register(app)
// 全局方法
app.config.globalProperties.$builtIn = auth.builtIn;



app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');



