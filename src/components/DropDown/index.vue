<template>
    <section class="drop-down" v-loading="loading">
        <el-dropdown v-for="item in navbar" :key="item.id" @command="handleCommand($event,)" class="font">
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
        </el-dropdown>
    </section>
</template>
<script lang="ts" setup>
import { info } from '@/api/navbar';
import { Pointer } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { ElMessage } from 'element-plus'
const router = useRouter();
let loading = ref<boolean>(false);
let navbar = ref<any>([]);

const handleClick = (subItem: any): void => {
    if (subItem.disabled) ElMessage.warning("功能尚未开放,敬请期待！")
}

const handleCommand = (command: string) => {
    router.push({ name: command })
}

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
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
}
</style>