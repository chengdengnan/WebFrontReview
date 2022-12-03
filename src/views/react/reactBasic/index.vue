<template>
    <div class="main">
        <h2>react 基础</h2>
        <div class="overview">
            <div>
                <span class="serial-no">1.</span>
                <navigationBlank v-model="OfficialWebsiteLink">
                    react官网资料
                </navigationBlank>
            </div>
            <div>
                <span class="serial-no">2.</span>
                <navigationBlank v-model="ReactFiberLink">
                    由浅入深快速掌握React Fiber
                </navigationBlank>
            </div>
            <div>
                <span class="serial-no">3.</span>
                <navigationBlank v-model="ControlComponentLink">
                    受控组件和非受控组件
                </navigationBlank>
            </div>
            <div>
                <span class="serial-no">4.</span>
                <navigationBlank v-model="LifeCycleLink">
                    React 生命周期&执行顺序
                </navigationBlank>
            </div>
        </div>
        <!-- react overview -->
        <Overview></Overview>
        <!-- react virtual DOM -->
        <VirutalDOM></VirutalDOM>
        <!-- react basic grammar -->
        <Grammar></Grammar>
        <!-- react component life cycle -->
        <ComponentLifeCycle></ComponentLifeCycle>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance, ref } from "vue"
import Overview from "./tpl/overview.vue";
import VirutalDOM from "./tpl/virtualDOM.vue"
import Grammar from "./tpl/grammar.vue"
import ComponentLifeCycle from "./tpl/componentLifeCycle.vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const OfficialWebsiteLink = ref<string>('https://react.docschina.org/docs/hello-world.html')
const ReactFiberLink = ref<string>('https://www.jianshu.com/p/37d7de212df1')
const ControlComponentLink = ref<string>('https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/')
const LifeCycleLink = ref<string>('https://www.jianshu.com/p/021736302706')

</script>

<style lang='scss'>

</style>