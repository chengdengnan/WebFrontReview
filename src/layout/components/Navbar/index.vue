<template>
    <section class="navbar">
        <section class="navbar-avatar" @click="redirectIndex">
            <el-badge :value="11" :max="10">
                <el-avatar :size="44" shape="circle" :src="src" fit="cover"></el-avatar>
            </el-badge>
            <span class="header-title main-title hidden-xs-only">
                <span class="hidden-md-and-down">Barry's</span>&nbsp;
                <span class="hidden-md-and-down">blog</span>
            </span>
        </section>
        <section class="navbar-search">
            <el-input v-model="keyword" size="large" :clearable="true" placeholder="Please input Keywords"
                style="width: 65%;">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
        </section>
        <div style=""></div>
        <section class="navbar-dropDown">
            <DropDown></DropDown>
        </section>
    </section>
</template>

<script lang="ts" setup name="Navbar">
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import DropDown from "@/components/DropDown/index.vue";
const router = useRouter();
let keyword = ref<string>(""); // search

const src = require("/src/assets/avatar.jpg")
const redirectIndex = () => {
    router.replace({ name: 'Index' })
}
</script>

<style lang="scss">
.navbar {
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 2px;
    border-bottom: 1px solid #eaecef;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    &-avatar {
        flex-grow: 5;
        float: right;
        margin: 0 auto;
        padding-left: 1%;
        .header-title {
            margin-left: 1.5rem;
        }
    }

    &-avatar:hover {
        cursor: pointer;
    }

    &-search {
        display: flex;
        justify-content: flex-end;
        flex-grow: 5;
    }

    &-dropDown {
        flex-grow: 2;
        // width: 50%;
    }
}
</style>