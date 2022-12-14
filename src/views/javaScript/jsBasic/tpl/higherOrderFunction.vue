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
            <p>关于函数的柯里化最初可以理解为：闭包 + 递归</p>
            <p>以下的这个写法会增加一个 外部变量，不符合纯函数特性，而且还会导致 每次要以 () 括号结尾调用</p>
            <WebPrismEditor v-model="InitialCurrying"></WebPrismEditor>
            <blockquote class="be-careful">
                <p class="title">知识点:</p>
                <div class="indent">
                    对象（包括数组，对象，函数等）参与原始运算如算术或逻辑运算时，会无参调用其 toString 或者 valueOf
                    方法得到一个原始值，然后用这个原始值参与运算，这点上应该是借鉴自 Java，但规则好像比 Java 要复杂，
                    具体的我也没有太深究过，毕竟 JavaScript 里面我们很少利用这个特性（所以很多人其实不知道）。
                    能够持续调用，必然返回函数，能够当成数值，那只能是因为它实现了 toString 或者 valueOf 方法。
                </div>
            </blockquote>
            <WebPrismEditor v-model="CurrentCurrying"></WebPrismEditor>

        </section>
    </div>
</template>

<script lang='ts' setup >
import { ref, getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


const InitialCurrying = $builtIn(`
let arr = []
function initial_currying () {
  let arg = Array.from(arguments);
  arr = arr.concat(arg);
  // 如果参数为空，则判断递归结束
  if (arg.length === 0) return arr.reduce((pre, next) => pre + next)
  return initial_currying

}
console.log('initial_currying', initial_currying(1)(2)(3)());`)

const CurrentCurrying = $builtIn(`
function currying() {
  /**
   * 1. 将 【arguments】类数组 转化为数组
   *   ES5 的写法
   *      let arg = Array.prototype.slice.call(arguments)
   *   ES6 的写法 或者 [...arguments]
   */
  let arg = Array.from(arguments);
  // 利用闭包的特性收集参数
  // 闭包勿用箭头函数
  var fn = function () {
    arg.push(...arguments);
    return fn;
  };
  fn.toString = () => arg.reduce((pre, next) => pre + next);
  return fn;
}

console.log(+currying(1)(2)(3)); // 6
console.log(+currying(1, 2)(3, 4)(5, 6)); // 21
console.log(+currying(1, 2, 3, 4, 5, 6)); // 21`)


</script>

<style lang='scss'>

</style>