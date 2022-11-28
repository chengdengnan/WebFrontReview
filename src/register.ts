import PrismEditor from "@/components/PrismEditor/index.vue";
import NavigationBlank from "@/components/NavigationBlank/index.vue";

export default class Register {
    private Vue: any = "";
    constructor(Vue: any) {
        this.Vue = Vue;
        Vue.component("WebPrismEditor", PrismEditor);
        Vue.component("NavigationBlank", NavigationBlank);
    }
    static init() {}
}
