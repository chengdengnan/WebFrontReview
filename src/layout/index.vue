<template>
    <div class="app-wrapper">
        <el-container>
            <el-header class="el-header" height="72px">
                <Navbar />
            </el-header>
            <el-container style="max-height: calc(100vh - 72px);">
                <el-aside width="18rem">
                    <sidebar />
                </el-aside>
                <div class="mouse-move" ref="mouseMove"></div>
                <el-main>
                    <app-main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="Layout">
import { onMounted, ref } from "vue"
import 'element-plus/theme-chalk/display.css'
import Navbar from "./components/Navbar/index.vue";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";
const mouseMove = ref<HTMLElement>();

onMounted(() => {
    console.log('mouseMove', mouseMove.value);

    mouseMove.value!.onmousedown = (event) => { 

    }
})

</script>
<style lang="scss">
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    .el-header {
        padding: 0px;
    }

    .mouse-move {
        height: calc(100vh - 72px);
        width: 3px;
        background-color: aquamarine;
        z-index: 10000;
        cursor: e-resize;
    }
}
</style>