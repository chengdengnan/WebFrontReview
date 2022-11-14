<template>
    <div class="main">
        <h2 id="javascript">javascript基础问题梳理</h2>

        <!-- ------------- This --------------- -->
        <CustomThis></CustomThis>

        <!-- ------------- Promise --------------- -->
        <CustomPromise></CustomPromise>


        <!-- ------------- 3、Generator --------------- -->
        <div>
            <h3 id="Generator">3、Generator</h3>
            <h4 id="Iterator">1、迭代器Iterator</h4>
            <h4 id="SubGenerator">2、生成器Generator</h4>
            <h4 id="AutoGenerator">3、Generator自动执行</h4>
        </div>

        <!-- ------------- DeepClone --------------- -->

        <h3 id="DeepClone">4、深拷贝和浅拷贝</h3>

    </div>
</template>
<script lang="ts" setup name="JsBasic">
import { getCurrentInstance } from "vue"
import CustomThis from "./tpl/this.vue"
import CustomPromise from "./tpl/promise.vue"

const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


</script>

<style lang="scss">

</style>