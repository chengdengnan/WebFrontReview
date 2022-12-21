<template>
    <div class="web-image" :style="{ width: props.width, height: props.height }">
        <el-image :src="props.modelValue" :zoom-rate="props.zoomRate" :preview-src-list="props.previewSrcList"
            :initial-index="props.initialIndex" :fit="props.fit" :lazy="false" :infinite="props.infinite"></el-image>
    </div>
</template>

<script lang='ts' setup >
import { ref, onMounted, computed, nextTick } from "vue";


const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '600px'
    },
    height: {
        type: String,
        default: '380px'
    },
    zoomRate: {
        type: Number,
        default: 1.2
    },
    previewSrcList: {
        type: Array,
        default: () => []
    },
    initialIndex: {
        type: Number,
        default: 0
    },
    fit: {
        type: String,
        default: 'cover'
    },
    infinite: {
        type: Boolean,
        default: true
    }
})

</script>

<style lang='scss'>
.web-image {}
</style>