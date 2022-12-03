<template>
    <h3 id="ActionScope">
        <RouterLink to="#ActionScope" class="a-link">#</RouterLink>
        3、作用域
    </h3>
    <div>
        <h4 id="DataStorage">
            <RouterLink to="#DataStorage" class="a-link">#</RouterLink>1、数据存储
        </h4>
        <section>
            <div>
                <ul>
                    <li>
                        栈（FIFO先进先出）放置静态内存，编译期分配：全局变量
                    </li>
                    <li>
                        堆（FILO先进后出）放置动态内存，执行期分配：函数执行上下文
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <div>
        <h4 id="ExcuteContext">
            <RouterLink to="#ExcuteContext" class="a-link">#</RouterLink>2、执行上下文
        </h4>
        <section>
            <div>
                <ul class="c-h6">
                    <li>
                        <NavigationBlank v-model="SayContextLink">一文说透执行上下文</NavigationBlank>
                    </li>
                    <li>
                        <NavigationBlank v-model="ActionChainLink">js深入之作用链</NavigationBlank>
                    </li>
                </ul>
            </div>
            <p>
                当函数执行时，会创建一个执行上下文的环境，分为创建和执行两个阶段
            </p>
            <div>
                <p class="c-h6">1. 创建阶段</p>
                <p class="indent">函数被调用未执行任何代码时，创建一个拥有3个属性的对象</p>
                <WebPrismEditor v-model="CreateContext"></WebPrismEditor>
            </div>
            <div>
                <p class="c-h6">2. 执行阶段</p>
                <p class="indent">分配变量（提升）、函数的引用、赋值，执行代码</p>
                <WebPrismEditor v-model="ExecutionContext"></WebPrismEditor>
            </div>
        </section>
    </div>
    <div>
        <h4 id="ExcuteContextStack">
            <RouterLink to="#ExcuteContextStack" class="a-link">#</RouterLink>3、执行上下文栈
        </h4>
        <section>
            <div>
                <ul>
                    <li>
                        浏览器中的<code>js</code>解释器是单线程的，相对于浏览器中同一时间只能做一个事情
                    </li>
                    <li>
                        代码中只有一个全局执行上下文和无数个函数执行上下文，这些组成了执行上下文(Execution Stack)
                    </li>
                    <li>
                        一个函数的执行上下文，在函数执行完毕后，会被移出执行上下文栈
                    </li>
                </ul>
            </div>
            <WebPrismEditor v-model="ExecutionContextTwo"></WebPrismEditor>
        </section>
    </div>
    <div>
        <h4 id="ActionScopeChain">
            <RouterLink to="#ActionScopeChain" class="a-link">#</RouterLink>4、作用域与作用域链
        </h4>
        <section>
            <div>
                <ul>
                    <li>
                        <span class="red">作用域：</span>全局作用域、函数作用域、ES6块级作用域。作用域最大的用途就是隔离变量或函数，并控制
                        生命周期。作用域在函数执行上下文创建时定义好的，不是函数执行是定义。
                    </li>
                    <li>
                        <span class="red">作用域链：</span>当一个块或函数嵌套在另一个块或函数中时，发生了作用域嵌套。
                        在当前函数中如果无法找到某个变量，就会往上一级嵌套的作用域中去寻找，直到找到该变量或抵达全局
                        作用域，这样的链式关系称为 <span class="red">作用域链(Scope Chain)</span>
                        <div>
                            <ul type="cricle">
                                <li>
                                    代码执行流每进入一个新上下文（全局、函数、跨级作用域），就会创建一个作用域链，
                                    用于搜索变量和函数。
                                </li>
                                <li>
                                    函数或块的局部上下文可以访问自己作用域内的变量，也可以访问任何包含上下文及全局
                                    上下文中的变量。
                                </li>
                                <li>
                                    全局上下文只能访问全局作用域的变量和函数，无法访问局部上下文的任何数据。
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <WebPrismEditor v-model="ScopeAndScopeChain"></WebPrismEditor>
        </section>
    </div>
    <div>
        <h4 id="ActionScopeChainGrow">
            <RouterLink to="#ActionScopeChainGrow" class="a-link">#</RouterLink>5、作用域链增强
        </h4>
        <section>
            <p>某些语句会导致在作用域链前端临时添加一个上下文，这个上下文在代码执行后会被删除。</p>
            <div>
                <ul>
                    <li>
                        <span class="red">try/catch语句中的catch块：</span>
                        会创建一个新的变量对象，包含要抛出的错误对象的声明
                    </li>
                    <li>
                        <span class="red">with语句：</span>
                        向作用域链前端添加制定的对象
                    </li>
                </ul>
            </div>
            <WebPrismEditor v-model="ScopeChainEnhance"></WebPrismEditor>

        </section>
    </div>
</template>

<script lang='ts' setup >
import { ref, getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const SayContextLink = ref<string>('https://juejin.cn/post/6890705692643196935');
const ActionChainLink = ref<string>('https://github.com/mqyqingfeng/Blog/issues/6');

const CreateContext = $builtIn(`
executionContext = {
  scopeChain: {}, // 创建作用域链（scope chain）
  variableObject: {}, // 初始化变量、函数、形参
  this: {}, // 指定this
}; // 初始化 VO -> 建立作用域链 -> 确定 This 上下文
`)

const ExecutionContext = $builtIn(`
function demo(num) {
  var name = "Barry";
  var getData = function () {};
  function c() {}
}
demo(100);

// 创建阶段大致是这样，在这个阶段就出现了【变量提升(hoisting)】
executionContext = {
  scopeChain: {...},
  variableObject: {
    arguments: {
      // 创建参数对象
      0: 100,
      length: 1,
    },
    num: 100, // 创建形参名称，赋值/或创建引用拷贝
    c: pointer to function c(), // 有内部函数生命的话，创建引用指向函数体
    name: undefined, // 有内部声明变量 a，初始化为 undefined
    getData: undefined, // 有内部声明变量 getData，初始化为 undefined
  },
  this: {...}
};

// 代码执行阶段，在这个阶段主要是赋值并执行代码
executionContext = {
  scopeChain: {...},
  variableObject: {
    arguments: {
      0: 100,
      length: 1,
    },
    num: 100,
    c: pointer to function c(),
    name: "barry", // 分配变量，赋值
    getDate: poiter to function getData() // 分配函数的引用，赋值
  },
  this: {...}
}
`)

const ExecutionContextTwo = $builtIn(`
function c() {
  console.log("Barry");
}

function a() {
  function b() {
    c();
  }
  b();
}
a();
`)

const ScopeAndScopeChain = $builtIn(`
function a() {
  return function b() {
    var name = "Barry";
    console.log(name); // Barry
  };
}

function c() {
  var name = "Fashion Barry";
  b(); // 访问全局作用域找到 b()
}

var b = a(); // 全局作用域
c();

// 去掉函数b中的 name 声明后
function a2() {
  return function b2() {
    // var name = "Barry";
    console.log(name); // name is not defined
  };
}

function c2() {
  var name = "Fashion Barry";
  b2(); // 访问全局作用域找到 b()
}

var b2 = a2(); // 全局作用域
c2();
`)

const ScopeChainEnhance = $builtIn(`
// 示例 1
var a = 10,
  b = 10;
with ({ a: 10 }) {
  var a = 20,
    b = 20;
  console.log(a); // 20
  console.log(b); // 20
}
console.log(a); // 10 原值
console.log(b); // 20 b被更改

// 示例2
var a = 15,
  b = 15;
with ({ a: 10 }) {
  b = 30;
  console.log(a); // 10，指定对象a的值
  console.log(b); // 30
}
console.log(a); // 15
console.log(b); // 30
`)
</script>

<style lang='scss'>

</style>