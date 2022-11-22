<template>
    <div class="main">
        <h2>Promise规范和应用</h2>
        <!--promise reference information -->
        <PromiseReference></PromiseReference>

        <!-- Promise standard -->
        <PromiseStandard></PromiseStandard>
    </div>

</template>

<script lang='ts' setup>
import PromiseReference from "./tpl/promiseReference.vue"
import PromiseStandard from "./tpl/promiseStandard.vue"
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

</script>

<style lang='scss'>

</style>