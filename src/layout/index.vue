<template>
    <div class="app-wrapper">
        <el-container>
            <el-header class="el-header" height="72px">
                <Navbar />
            </el-header>
            <el-container style="max-height: calc(100vh - 72px);">
                <el-aside class="el-aside" :width="sidebarWidth">
                    <sidebar />
                    <div class="mouse-move" ref="mouseMove"></div>
                </el-aside>
                <el-main class="el-main">
                    <app-main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="Layout">
import { onMounted, ref, nextTick } from "vue"
import 'element-plus/theme-chalk/display.css'
import Navbar from "./components/Navbar/index.vue";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";
const mouseMove = ref<HTMLElement>();
const minSidebarWidth = ref<string | number>(300);
let sidebarWidth = ref<string | number>(localStorage.getItem('sidebarWidth') ?? '18rem');

onMounted(() => {
    mouseMove.value!.onmousedown = (e) => {
        let initWidth = e.clientX + 5;
        document.onmousemove = (e2) => {
            // end - init表示鼠标移动的距离
            // end为鼠标移动的宽度,可用于设置最小宽度
            let endWidth = e2.clientX;
            if (endWidth > minSidebarWidth.value) {
                nextTick(() => {
                    sidebarWidth.value = (endWidth - initWidth + initWidth) + 'px';
                    localStorage.setItem('sidebarWidth', sidebarWidth.value)
                })
            } else {
                nextTick(() => {
                    endWidth = 300;
                    sidebarWidth.value = '300px';
                })
            }
        }
        document.onmouseup = () => (document.onmousemove = document.onmouseup = null)
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

    .el-aside {
        position: relative;
        overflow-y: auto;

        .mouse-move {
            height: 100%;
            width: 5px;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: transparent;
            opacity: 0;
            z-index: 10000;
            cursor: e-resize;
        }
    }

    .el-main {
        flex: 1 !important;
    }

}
</style>