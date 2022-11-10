<template>
    <section class="navbar">
        <section class="navbar-avatar" @click="redirectIndex">
            <el-badge :value="11" :max="10">
                <el-avatar :size="44" shape="circle" :src="src" fit="cover"></el-avatar>
            </el-badge>
            <span class="header-title main-title hidden-xs-only">
                <span class="hidden-xs-only">Barry's</span>&nbsp;
                <span class="hidden-md-and-down">blog</span>
            </span>
        </section>
        <section class="navbar-search">
            <el-input v-model="keyword" size="large" placeholder="Please input Keywords">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
        </section>
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
    padding-bottom: 10px;
    border-bottom: 1px solid #eaecef;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    &-avatar {
        width: 20%;
        margin: 0 auto;

        .header-title {
            margin-left: 1.5rem;
        }
    }

    &-avatar:hover {
        cursor: pointer;
    }

    &-search {
        width: 16%;
        margin-left: 10%;
    }

    &-dropDown {
        width: 50%;
        overflow: hidden;
    }
}
</style>