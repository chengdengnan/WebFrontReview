<template>
    <div class="main">
        <h2 id="javascript">javascript基础问题梳理</h2>

        <!-- ------------- This --------------- -->
        <CustomThis></CustomThis>

        <!-- ------------- This Bind --------------- -->
        <ThisBind></ThisBind>

        <!-- ------------- Action Scope --------------- -->
        <ActionScope></ActionScope>

        <!-- ------------- DeepClone --------------- -->
        <DeepClone></DeepClone>

        <!-- Close Package -->
        <ClosePackage></ClosePackage>

        <!-- This Interview -->
        <ThisInterview></ThisInterview>
    </div>
</template>
<script lang="ts" setup name="JsBasic">
import { getCurrentInstance } from "vue"
import CustomThis from "./tpl/this.vue"
import ThisBind from "./tpl/thisBind.vue";
import ActionScope from "./tpl/actionScope.vue"
import DeepClone from "./tpl/deepClone.vue"
import ClosePackage from "./tpl/closePackage.vue"
import ThisInterview from "./tpl/thisInterview.vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


</script>

<style lang="scss">

</style>