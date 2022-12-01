<template>
    <section class="drop-down" v-loading="loading">
        <!-- <el-dropdown v-for="item in navbar" :key="item.id" @command="handleCommand($event,)" class="font">
            <span class="sub-title">
                {{ item.title }}
                <el-icon :size="12" class="el-icon--right">
                    <Pointer />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="subItem in item.children" :key="subItem.id" :disabled="subItem.disabled"
                        :command="subItem.routeName" @click.stop="handleClick(subItem)">
                        {{ subItem.title }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown> -->

        <el-menu :default-active="defaultActive" mode="horizontal" @select="handleSelect" :ellipsis="true"
            background-color="#FFFFFF" text-color="#303133" :active-text-color="activeTextColor" :unique-opened="true"
            :router="false">
            <template v-for="item in navbar" :key="item.id">
                <el-sub-menu :index="item.hashId">
                    <template #title>{{ item.title }}</template>
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.routeName"
                        :disabled="subItem.disabled" @click="handleClick(subItem)">
                        {{ subItem.title }}
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </el-menu>
    </section>
</template>
<script lang="ts" setup>
import { info } from '@/api/navbar';
import { Pointer } from '@element-plus/icons-vue'
import { useRouter, useRoute } from "vue-router";
import { onBeforeMount, ref, toRaw, nextTick, getCurrentInstance } from "vue";
import { ElMessage } from 'element-plus'
const currentInstance = getCurrentInstance();
const { $getRootColor } = currentInstance?.appContext.config.globalProperties as any
const router = useRouter();
const route = useRoute();
let loading = ref<boolean>(false);
let navbar = ref<any>([]);
let defaultActive = ref<string>(route.name as string);
let activeTextColor = ref<string>($getRootColor())
const handleSelect = (index: string, indexPath: string, item: any): void => {
    nextTick(() => {
        defaultActive.value = index
    })
}

const handleClick = (subItem: any): void => {
    const item = toRaw(subItem);
    if (item.disabled) ElMessage.warning("功能尚未开放,敬请期待！")
    router.push({ name: item.routeName })

}

// const handleCommand = (command: string) => {
//     router.push({ name: command })
// }

const _fetch = async (): Promise<void> => {
    if (!sessionStorage.getItem('Navbar')) {
        try {
            loading.value = true;
            const res = await info();
            navbar.value = res.data;
            sessionStorage.setItem('Navbar', JSON.stringify(res.data));
        } finally {
            loading.value = false;
        }
    } else {
        navbar.value = JSON.parse(sessionStorage.getItem('Navbar') as string);
    }

}

onBeforeMount(() => {
    _fetch()

})
</script>

<style lang="scss">
.drop-down {
    width: 100%;
    position: relative;

    .el-menu--horizontal {
        border-bottom: none;
    }
}
</style>