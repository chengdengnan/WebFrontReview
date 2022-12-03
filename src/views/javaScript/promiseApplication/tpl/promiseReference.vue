<template>
    <!--promise reference information -->
    <h3 id="ReferenceInformation">
        <RouterLink to="#ReferenceInformation" class="a-link">#</RouterLink>1、参考资料
    </h3>
    <div class="overview">
        <div>
            <span>1.</span>
            <NavigationBlank v-model="PromiseMiniReaderLink">
                JavaScript Promise迷你书(中文版)
            </NavigationBlank>
        </div>
        <div>
            <span>2.</span>
            <NavigationBlank v-model="PromiseLoopReadingLink">
                深入理解Promise(上)
            </NavigationBlank>
        </div>
        <div>
            <span>3.</span>
            <NavigationBlank v-model="PromiseWriteLink">
                从手写一个符合Promise/A+规范Promise来深入学习Promise
            </NavigationBlank>
        </div>
        <div>
            <span>4.</span>
            <NavigationBlank v-model="PromiseLoopLearnLink">
                Promise深度学习---我のPromise/A+实现
            </NavigationBlank>
        </div>
        <div>
            <span>5.</span>
            <NavigationBlank v-model="PromiseRealizationLink">
                【第1738期】100行代码实现 Promises/A+ 规范
            </NavigationBlank>
        </div>
        <div>
            <span>6.</span>
            <NavigationBlank v-model="PromiseZeroWriteLink">
                从零开始手写Promise
            </NavigationBlank>
        </div>
        <div>
            <span>7.</span>
            <NavigationBlank v-model="PromiseStandardWriteLink">
                PromiseA+规范之手写Promise
            </NavigationBlank>
        </div>
        <div>
            <span>8.</span>
            <NavigationBlank v-model="PromisePlusStandardWriteLink">
                promise A plus规范
            </NavigationBlank>
        </div>
        <div>
            <span>9.</span>
            <NavigationBlank v-model="PromiseStandardHundredLink">
                【第1738期】100 行代码实现 Promises/A+ 规范
            </NavigationBlank>
        </div>
        <div>
            <span>10.</span>
            <NavigationBlank v-model="PromiseStandardDetailLink">
                史上最最最详细的手写Promise教程
            </NavigationBlank>
        </div>
    </div>
</template>

<script lang='ts' setup >
import { ref } from "vue"
const PromiseMiniReaderLink = ref<string>('http://liubin.org/promises-book/');
const PromiseLoopReadingLink = ref<string>('https://juejin.cn/post/6844903455962693640');
const PromiseWriteLink = ref<string>('https://juejin.cn/post/6844903667494027278');
const PromiseLoopLearnLink = ref<string>('https://juejin.cn/post/6844903550288412679');
const PromiseRealizationLink = ref<string>('https://mp.weixin.qq.com/s/Yrwe2x6HukfqJZM6HkmRcw');
const PromiseZeroWriteLink = ref<string>('https://zhuanlan.zhihu.com/p/144058361');
const PromiseStandardWriteLink =
    ref<string>('https://blog.csdn.net/weixin_56650035/article/details/121070438?spm=1001.2014.3001.5502');
const PromisePlusStandardWriteLink = ref<string>('https://promisesaplus.com/');
const PromiseStandardHundredLink = ref<string>('https://mp.weixin.qq.com/s/Yrwe2x6HukfqJZM6HkmRcw');
const PromiseStandardDetailLink = ref<string>('https://www.cnblogs.com/sugar-tomato/p/11353546.html');

</script>

<style lang='scss'>

</style>