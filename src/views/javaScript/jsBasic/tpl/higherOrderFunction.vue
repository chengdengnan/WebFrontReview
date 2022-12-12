<template>
    <h3 id="HigherOrderFunction">
        <RouterLink to="#HigherOrderFunction" class="a-link">#</RouterLink>
        6、高阶函数
    </h3>
    <section>
        <blockquote class="be-careful">
            <p class="title">什么是高阶函数？</p>
            <div>
                <ul class="list-style-none">
                    <li>
                        如果一个函数符合下面 2 个规范中的任意一个，那该函数就是高阶函数
                        <div>
                            <ul>
                                <li>若 A 函数，接受的参数是一个函数，那么 A 就可以称之为高阶函数</li>
                                <li>若 A 函数，返回值依然是一个函数，那么 A 就可以称之为高阶函数</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        常见的高阶函数：
                        <div>
                            <ul>
                                <li>Promise、setTimeout、Array.map......等等</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </blockquote>
    </section>
    <div>
        <h4 id="FunctionCurrying">
            <RouterLink to="#FunctionCurrying" class="a-link">#</RouterLink>2、函数柯里化
        </h4>
        <section>
            <p>
                <span class="c-h7">函数的柯里化：</span>
                通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式。
            </p>
        </section>
    </div>
</template>

<script lang='ts' setup >
import { ref, getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


</script>

<style lang='scss'>

</style>