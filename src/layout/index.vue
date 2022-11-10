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
                <el-main>
                    <app-main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="Layout">
import 'element-plus/theme-chalk/display.css'
import Navbar from "./components/Navbar/index.vue";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";


</script>
<style lang="scss">
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    .el-header {
        padding: 0px;
    }
}
</style>