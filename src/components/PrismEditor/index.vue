<template>
    <div class="prism-editor">
        <PrismEditor class="my-editor disabled-copy" v-model="CurrentValue" :highlight="highlighter"
            :line-numbers="props.lineNumbers" :readonly="currentReadonly"
            :autoStyleLineNumbers="props.autoStyleLineNumbers" :tabSize="props.tabSize"
            :insertSpaces="props.insertSpaces" :ignoreTabKey="props.ignoreTabKey">
        </PrismEditor>
        <el-row v-if="showToolbar && CurrentValue">
            <div class="bottom-toolbar">
                <el-tooltip trigger="hover" effect="dark" placement="top" content="Do you confirm run the above code?">
                    <el-button @click="handleRun" type="info" :icon="Finished" circle />
                </el-tooltip>
                <el-tooltip trigger="hover" effect="dark" placement="top" content="Are you confirm copy this code?">
                    <el-button @click="handleCopy" type="info" :icon="CopyDocument" circle />
                </el-tooltip>
            </div>
        </el-row>
        <runDialog v-if="handleDrawer" :code="CurrentValue" v-model="handleDrawer"></runDialog>
    </div>
</template>

<script lang='ts' setup name="PrismEditor">
import { Edit, Check, CopyDocument, Finished } from '@element-plus/icons-vue'
import { ref, reactive, onMounted, useSlots, computed, nextTick } from "vue";
import { ElNotification } from 'element-plus'

import runDialog from "./components/runDialog.vue";
import useClipboard from "vue-clipboard3";
import { PrismEditor } from "vue-prism-editor";
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    lineNumbers: {
        type: Boolean,
        default: true
    },
    readonly: {
        type: Boolean,
        default: true,
    },
    autoStyleLineNumbers: {
        type: Boolean,
        default: true
    },
    tabSize: {
        type: Number,
        default: 2
    },
    /**
     * Whether to use spaces for indentation. 
     * Default: true. If you set it to false, you might also want to set tabSize to 1
     */
    insertSpaces: {
        type: Boolean,
        default: true
    },
    ignoreTabKey: {
        type: Boolean,
        default: false
    },
    showToolbar: {
        type: Boolean,
        default: true
    }
})
const { toClipboard } = useClipboard();
let currentReadonly = ref<boolean>(props.readonly)
// PrismEditor
let CurrentValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
// runDialog
let handleDrawer = ref<boolean>(false)

const highlighter = (code: string): void => {
    return highlight(code, languages.js); // languages.<insert language> to return html with markup
}

const handleCopy = () => {
    toClipboard(`${CurrentValue.value}`).then(() => {
        ElNotification.success({
            title: "Copy Successfully!",
        })
    }).catch((err) => {
        ElNotification.error({
            title: "Copy Error!",
            message: err.message,
        })
    })
}

const handleRun = () => {
    ElNotification.info({
        title: 'Please open the console to check!'
    })
    console.log(CurrentValue.value);
    eval(CurrentValue.value)
    // handleDrawer.value = true;
}


</script>

<style lang='scss'>
.prism-editor {
    width: 100%;
    margin-top: 10px;
    .bottom-toolbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-top: 0.3rem;
    }
}


/* required class */
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}
</style>