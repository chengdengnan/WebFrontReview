<template>
    <section>
        <!-- Vue3 -->
        <RouterView :key="key" v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <KeepAlive>
                    <component :is="Component"> </component>
                </KeepAlive>
            </transition>
        </RouterView>
        <!-- Vue2 -->
        <!-- <transition>
            <KeepAlive>
                <router-view :key="key" />
            </KeepAlive> 
        </transition>-->
    </section>
</template>
<script lang="ts" setup name="AppMain">
// appMain
import { computed } from "vue"
// 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。
import { useRoute } from "vue-router"

const key = computed(() => useRoute().path)
</script>
<style lang="scss">

</style>
