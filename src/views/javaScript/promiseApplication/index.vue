<template>
    <div class="main">
        <h2>Promise规范和应用</h2>
        <!--promise reference information -->
        <PromiseReference></PromiseReference>

        <!-- Promise standard -->
        <PromiseStandard></PromiseStandard>

        <!-- promise application -->
        <PromiseApplication></PromiseApplication>

        <!-- custom promise -->
        <PromiseRealization></PromiseRealization>

        <!-- ------------- 3、Generator --------------- -->
        <CustomGenerator></CustomGenerator>
    </div>

</template>

<script lang='ts' setup>
import PromiseReference from "./tpl/promiseReference.vue"
import PromiseStandard from "./tpl/promiseStandard.vue"
import PromiseApplication from "./tpl/promise.vue"
import PromiseRealization from "./tpl/promiseRealization.vue"
import CustomGenerator from "./tpl/generator.vue"

import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

</script>

<style lang='scss'>

</style>