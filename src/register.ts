import PrismEditor from "@/components/PrismEditor/index.vue";
import NavigationBlank from "@/components/NavigationBlank/index.vue";
import WebImage from "@/components/WebImage/index.vue"
export default class Register {
    private Vue: any = "";
    constructor(Vue: any) {
        this.Vue = Vue;
        Vue.component("WebPrismEditor", PrismEditor);
        Vue.component("NavigationBlank", NavigationBlank);
        Vue.component("WebImage", WebImage);
    }
    static init() {}
}
