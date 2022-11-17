<template>
    <div class="main">
        <h2 id="javascript">javascript基础问题梳理</h2>

        <!-- ------------- This --------------- -->
        <CustomThis></CustomThis>

        <!-- ------------- Promise --------------- -->
        <CustomPromise></CustomPromise>


        <!-- ------------- 3、Generator --------------- -->
        <CustomGenerator></CustomGenerator>

        <!-- ------------- DeepClone --------------- -->

        <h3 id="DeepClone">4、深拷贝和浅拷贝</h3>

    </div>
</template>
<script lang="ts" setup name="JsBasic">
import { getCurrentInstance } from "vue"
import CustomThis from "./tpl/this.vue"
import CustomPromise from "./tpl/promise.vue"
import CustomGenerator from "./tpl/generator.vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


</script>

<style lang="scss">

</style>