<template>
    <div class="app-wrapper">
        <el-container>
            <el-header class="el-header" height="72px">
                <Navbar />
            </el-header>
            <el-container class="el-container">
                <Transition name="fade-transform" mode="out-in">
                    <el-aside v-show="showSideber" class="el-aside" :width="sidebarWidth">
                        <sidebar />
                    </el-aside>
                </Transition>
                <div class="sidebar-collapse" :style="{ left: showSideber ? sidebarWidth : '0px' }">
                    <el-icon class="sidebar-collapse-icon" @click="handleCollapse" size="18px"
                        color="rgba(0, 0, 0, 0.3)">
                        <DArrowLeft v-show="showSideber" />
                        <DArrowRight v-show="!showSideber" />
                    </el-icon>
                </div>
                <div class="mouse-move" ref="mouseMove"></div>
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
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
const mouseMove = ref<HTMLElement>();
const minSidebarWidth = ref<string | number>(200);
let sidebarWidth = ref<string | number>(localStorage.getItem('sidebarWidth') ?? '18rem');
let showSideber = ref<boolean>(true)

const handleCollapse = () => (showSideber.value = !showSideber.value)

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
                    endWidth = 200;
                    sidebarWidth.value = '200px';
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
        padding: 0px !important;
    }

    .el-container {
        height: calc(100vh - 72px);
        position: relative;

        .el-aside {
            position: relative;
            overflow-y: auto;
        }

        .sidebar-collapse {
            position: fixed;
            top: 50%;
            z-index: 100;
            color: #FFF;
            text-align: center;

            .sidebar-collapse-icon:hover {
                transform: scale(1.2);
            }

            &:hover {
                cursor: pointer;
            }
        }


        .mouse-move {
            height: calc(100vh - 72px);
            width: 5px;
            background-color: transparent;
            opacity: 0;
            z-index: 99;
            cursor: e-resize;
        }

    }



    .el-main {
        flex: 1 !important;
    }

}
</style>