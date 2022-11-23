<template>
    <div class="main">
        <h3 id="Promise">
            <RouterLink to="#Promise" class="a-link">#</RouterLink>2、Promise(异步编程)
        </h3>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

</script>

<style lang='scss'>

</style>