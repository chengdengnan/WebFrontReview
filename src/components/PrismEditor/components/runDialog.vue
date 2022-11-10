<template>
    <div class="drawer"></div>
    <el-drawer v-model="value" direction="rtl" :append-to-body="false" :show-close="true" :lock-scroll="true"
        :close-on-click-modal="true">
        <template #header>
            <div>
                <h3 class="default-textc" style="margin-left: 0;">Run Result：</h3>
            </div>
        </template>
        <template #default>
            <div>
                <el-alert title="unclosable alert" type="success" :closable="false">
                    <template #title>
                        {{ item.successResult }}
                    </template>
                </el-alert>

            </div>
            <div>
                <el-alert title="unclosable alert" type="error" :closable="false">
                    <template #title>
                        {{ item.errResult }}
                    </template>
                </el-alert>
            </div>
        </template>
    </el-drawer>
</template>

<script lang='ts' setup>
import { ref, reactive, computed, watch, onMounted } from "vue"
const item = reactive({
    successResult: "Success",
    errResult: "Err"
})
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    code: {
        type: String,
        default: ""
    }
})

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})


const handleRunCode = (): any => {
    console.log(props.code);
    eval(props.code)

}
onMounted(() => {
    handleRunCode()
})
</script>

<style lang='scss'>
.drawer {
    width: 100%;
}
</style>