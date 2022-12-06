<template>
    <section class="sidebar" v-loading="loading">
        <ul class="sidebar-link">
            <li>
                <section class="sidebar-group">
                    <p class="sidebar-heading">
                        <span>{{ sidebar.mainTitle }}</span>
                    </p>
                    <ul v-for="(item, index) in sidebar.mainSidebar" :key="item.id"
                        class="sidebar-links sidebar-group-items">
                        <li>
                            <RouterLink :class="{ active: parentHashId == item.hashId }" class="sidebar-link"
                                :to="'#' + item.hashId">
                                {{ index + 1 + '、' + item.title }}
                            </RouterLink>
                            <ul v-for="(subItem, subIndex) in item.children" :key="subItem.id"
                                class="sidebar-sub-headers">
                                <li class="sidebar-sub-header">
                                    <RouterLink :class="{ active: subHashId == subItem.hashId }" class="sidebar-link"
                                        :to="'#' + subItem.hashId">
                                        {{ subIndex + 1 + '、' + subItem.title }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </li>
        </ul>
    </section>
</template>
<script lang="ts" setup name="Sidebar">
import { ref, reactive, watch, onBeforeMount, nextTick } from "vue"
import { info, infoTreeNode } from "@/api"
import { useRoute } from "vue-router"
const route = useRoute();
const routeName = route.name as string;
const curentPath = ref<string>('/' + routeName.replace(routeName[0], routeName[0].toLocaleLowerCase()) + 'Info');


let loading = ref<boolean>(false);
let sidebar = ref<any>({});
let parentHashId = ref<string>("");
let subHashId = ref<string>("");


const treeNode = async (): Promise<void> => {
    const res = await infoTreeNode({ path: curentPath.value, routeName: route.hash.replace("#", "") });
    if (res.data) {
        parentHashId.value = res.data.parentHashId;
        subHashId.value = res.data.hashId;
    }
}

const _fetch = async (path: string): Promise<void> => {
    try {
        loading.value = true;
        const res = await info({ path: path, routeName });
        if (res && res.data) {
            sidebar.value = res.data;
        } else {
            sidebar.value = [];
        }
    } finally {
        loading.value = false
    }
}


watch(() => route.hash, async (newVal, oldVal) => {
    if (newVal && newVal !== oldVal) {
        await treeNode()
        nextTick(() => {
            const Elment = document.querySelector(newVal) as HTMLElement;
            if (!Elment) return
            Elment.scrollIntoView({ behavior: "auto", block: "start", inline: "center" })
        })
    }
}, { immediate: true })

watch(() => route.name, (newVal, oldVal) => {
    if (newVal && newVal !== oldVal) {
        let n = newVal as string;
        curentPath.value = '/' + n.replace(n[0], n[0].toLocaleLowerCase()) + 'Info'
        _fetch(curentPath.value)
    }
})

onBeforeMount(() => {
    _fetch(curentPath.value);
})

</script>
<style lang="scss">
.sidebar {
    box-sizing: border-box;
    width: 100%;
    min-height: calc(100vh - 72px);
    height: 100%;
    font-size: 16px;
    z-index: 10;
    margin: 0;
    border-right: 1px solid #eaecef;

    &-link {
        // padding: 1.5rem 0;
        padding: 1rem 0 1.5rem 0;

        .sidebar-group {
            display: block;

            .sidebar-group-items {
                font-size: .95rem;
                overflow: hidden;
            }

            .sidebar-links {
                .sidebar-sub-headers {
                    padding-left: 1rem;
                    font-size: .95rem;

                    .sidebar-sub-header {
                        font-size: .95rem;

                        .sidebar-link {
                            padding-top: 0.25rem;
                            padding-bottom: 0.25rem;
                            border-left: none;
                        }
                    }


                }

                .sidebar-link {
                    font-size: .8rem;
                    font-weight: 400;
                    display: inline-block;
                    color: #2c3e50;
                    border-left: 0.25rem solid transparent;
                    padding: 0.35rem 1rem 0.35rem 1.25rem;
                    line-height: 1.4;
                    width: 100%;
                    box-sizing: border-box;
                }

                a.sidebar-link.active {
                    font-weight: 600;
                    color: var(--color-default);
                    border-left-color: var(--color-default);
                }

                a.sidebar-link {
                    padding-left: 2rem;
                }
            }

            .sidebar-heading {
                color: var(--sidebar-head-default);
                font-size: 1.1rem;
                font-weight: 700;
                padding: 0.35rem 1.5rem 0.35rem 1.25rem;
                margin: 0;
                border-left: 0.25rem solid transparent;
            }

            .sidebar-group:not(.collapsable) .sidebar-heading:not(.clickable) {
                cursor: auto;
                color: inherit;
            }
        }
    }


    ul {
        margin: 0;
        list-style: none;
        list-style-type: none;

        li {
            display: list-item;
            text-align: -webkit-match-parent;
        }
    }
}
</style>