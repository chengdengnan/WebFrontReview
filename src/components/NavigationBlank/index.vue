<template>
    <div class="navigation-blank">
        <a :href="currentValue" :rel="props.rel" :target="props.target">
            <slot></slot>
        </a>
    </div>
</template>

<script lang='ts' setup >
import { ref, watch, onMounted } from "vue"
let currentValue = ref<string>("")
const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    rel: {
        type: String,
        default: "help"
    },
    /**
     * _blank	在新窗口中打开被链接文档。
    _self	默认。在相同的框架中打开被链接文档。
    _parent	在父框架集中打开被链接文档。
    _top	在整个窗口中打开被链接文档。
    framename	在指定的框架中打开被链接文档。
     */
    target: {
        type: String,
        default: "_blank"
    }
})

watch(() => props.modelValue, (newVal, oldVal) => {
    currentValue.value = newVal
}, { immediate: true })
</script>

<style lang='scss'>
$color: var(--color-success);

.navigation-blank {
    font-size: 0.9em;
    color: $color;
    margin-left: 6px;
    padding-bottom: 8px;
    display: inline-block;
    a {
        color: $color;

        &:hover {
            cursor: pointer;
        }
    }

}
</style>