<template>
    <div>
        <div>
            <h3 id="DeepClone">
                <RouterLink to="#DeepClone" class="a-link">#</RouterLink>
                4、深拷贝和浅拷贝
            </h3>
            <section>
                <p>浅拷贝只复制一层对象的属性，而深拷贝则递归复制了所有层级。</p>
                <div>
                    参考资料：
                    <div class="indent">
                        <NavigationBlank v-model="DeepCloneLink">1. JS
                            你最少用几行代码实现深拷贝？</NavigationBlank>
                    </div>
                    <div class="indent">
                        <NavigationBlank v-model="LodashLink">2. Lodash源码</NavigationBlank>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang='ts' setup >
import { ref } from "vue"

const DeepCloneLink = ref<string>('https://blog.csdn.net/weixin_56650035/article/details/123973205');
const LodashLink = ref<string>('https://github.com/lodash/lodash/blob/master/cloneDeep.js');

</script>

<style lang='scss'>

</style>