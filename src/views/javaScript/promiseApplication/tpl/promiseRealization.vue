<template>
    <h3 id="PromiseRealization">
        <RouterLink to="#PromiseRealization" class="a-link">#</RouterLink>1、PromiseA+ 实现
    </h3>
    <div>
        <h4 id="RealizationSteps">
            <RouterLink to="#RealizationSteps" class="a-link">#</RouterLink>1、实现步骤
        </h4>
    </div>
    <div>
        <h4 id="PromiseATest">
            <RouterLink to="#PromiseATest" class="a-link">#</RouterLink>3、测试
        </h4>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

</script>

<style lang='scss'>

</style>