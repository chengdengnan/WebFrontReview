<template>
    <!-- /**
超小屏：< 768px  -> xs
小屏：>= 768px <= 992px -> sm
中屏：>= 992px <= 1200px -> md
大屏：>= 1200px -> lg
超大屏：>= 1920px  -> xl
*/ -->
    <el-container class="app-container">
        <el-header class="el-header" height="72px">
            <Navbar></Navbar>
        </el-header>
        <el-main class="app-main">
            <div class="main-container disabled-copy">
                <div class="main-container-name">
                    <span class="hidden-sm-and-down">
                        CHENG DENG NAN
                    </span>
                    <span class="hidden-sm-and-up">BARRY</span>
                </div>
                <div class="main-container-detail">
                    {{ templateWords }}
                    <span class="blink-cursor">|</span>
                </div>
            </div>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive, onMounted } from 'vue';
import 'element-plus/theme-chalk/display.css'
import Navbar from "@/layout/components/Navbar/index.vue";
// "他日若遂凌云志，敢笑黄巢不丈夫！"
const autoTextList = reactive<string[]>(["书山有路勤为径，学海无涯苦作舟！",
    "路遥遥其修选兮，吾将上下而求索！",
    "鲜衣怒马少年时，不负韶华行且知！",
    "少年自负凌云笔。而到今、春华落尽，满怀萧瑟！",
    "每天进步一点点，一点点，再来一点点！",
])
let templateWords = ref<string>("");


const _initAutoType = () => {
    let stopAutoType = ref<boolean>(false); // stop auto type text
    let isNext = ref<boolean>(false)
    let index = ref<number>(0)
    let timer = ref<number>(200)

    let startAutoType = setInterval(() => {
        if (stopAutoType.value) {
            clearInterval(startAutoType)
        } else {
            if (templateWords.value.length == 0) {
                // 开始打字
                if (isNext.value) {
                    index.value++
                    index.value = index.value % 3;
                    isNext.value = false;
                }
                if (autoTextList[index.value]) {
                    templateWords.value =
                        autoTextList[index.value].substring(0, templateWords.value.length + 1)
                } else {
                    index.value = 0;
                    templateWords.value =
                        autoTextList[index.value].substring(0, templateWords.value.length + 1)
                }

            } else if (templateWords.value.length == autoTextList[index.value].length && !isNext.value) {
                // 打完这句话则开始删除
                isNext.value = true;
                timer.value = 5000;
            } else {
                // 没删除完也没显示完
                if (isNext.value) {
                    // 如果是在减少
                    templateWords.value = templateWords.value.substring(0, templateWords.value.length - 1);
                    timer.value = 150;
                } else {
                    // 如果是在增多
                    timer.value = 200;
                    templateWords.value = autoTextList[index.value].substring(0, templateWords.value.length + 1)
                }
            }
        }
    }, timer.value)

}
onMounted(() => {
    _initAutoType();
})


</script>

<style lang="scss">
.app-container {
    width: 100%;

    .el-header {
        padding: 0px;
    }

    .app-main {
        width: 100%;
        height: calc(100% - 72px);
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 !important;

        .main-container {
            position: absolute;
            top: 20%;
            left: 49%;
            transform: translate(-49%, -20%);
            text-align: center;
            padding: 7px 10px;
            box-shadow: 0 0 10px 6px rgba(0, 0, 0, .5);

            &-name {
                color: #fff;
                font-weight: 700;
                font-size: 1.5rem;
            }

            &-detail {
                color: #fff;
                font-weight: 500;
                font-size: 1.2rem;
                margin-top: 10%;
            }

            .blink-cursor {
                animation: Blink 1s ease-in 0s infinite;
            }

            @keyframes Blink {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }
        }

        .main-container:hover {
            cursor: not-allowed !important;
        }
    }

    .app-main::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent url("../../assets/index_background_image.jpg") no-repeat;
        background-size: cover;
        filter: blur(1px);
        z-index: -1;
    }
}
</style>