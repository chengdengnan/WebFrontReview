<template>
    <h3 id="ThisBind">
        <RouterLink to="#ThisBind" class="a-link">#</RouterLink>
        1、This绑定
    </h3>
    <div>
        <h4 id="DefaultBind">
            <RouterLink to="#DefaultBind" class="a-link">#</RouterLink>1、默认绑定(函数直接调用)
        </h4>
        <section>
            <p>非严格模式下，默认绑定指向全局( <code>node</code>中是 <code>global</code> )</p>
            <WebPrismEditor v-model="DefaultThisBind" />
        </section>
    </div>
    <div>
        <h4 id="ImplicitBind">
            <RouterLink to="#ImplicitBind" class="a-link">#</RouterLink>2、隐式绑定(属性访问调用，函数被别人调用)
        </h4>
        <section>
            <p>隐式绑定的<code>this</code>指的是调用堆栈的【上一级】(<code>.</code>前的哪一个)</p>
            <WebPrismEditor v-model="ImplicitThisBind" />
        </section>
    </div>
    <div>
        <h4 id="DisplayBind">
            <RouterLink to="#DisplayBind" class="a-link">#</RouterLink>3、显示绑定(call/apply/bind)
        </h4>
    </div>
    <div>
        <h4 id="NewObject">
            <RouterLink to="#NewObject" class="a-link">#</RouterLink>4、new创建对象
        </h4>
    </div>
    <div>
        <h4 id="ArrowFunction">
            <RouterLink to="#ArrowFunction" class="a-link">#</RouterLink>5、箭头函数
        </h4>
    </div>
    <div>
        <h4 id="ThisPriority">
            <RouterLink to="#ThisPriority" class="a-link">#</RouterLink>6、优先级
        </h4>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const DefaultThisBind = $builtIn(`
// 1. 非严格模式
function myFunc() {
  console.log(this);
}

myFunc(); // window

// 2. 严格模式
function myFunc2() {
  "use strict";
  console.log(this);
}
myFunc2(); // undefined

// 面试题1
var a = 1;
function fn() {
  var a = 2;
  console.log(this.a); // console what ?
}
fn(); // 1

// 面试题2
let a = 1; //let定义自己的作用域，不挂载至window
function fn2() {
  var a = 2;
  console.log(this.a);
}
fn2(); //SyntaxError: Identifier 'a' has already been declared

// 面试题3
var b = 1;
function fn3(){
  var b = 2;
  function fn4(){
    console.log(this.b);
  }
  fn4()
}
fn3(); // 1

// 面试题4
const obj = {
  a: 1,
  fn: function () {
    console.log(this.a);
  },
};

obj.fn(); // console what ? 1 obj.fn()this指向的是obj
const f = obj.fn; // 当赋值给时，this丢失
f(); // undefined
`)

const ImplicitThisBind = $builtIn(`
function fn() {
  console.log(this.a);
}
const obj = {
  a: 1,
};
obj.fn = fn;
obj.fn(); // 1

function fn2() {
  console.log(this.a);
}
const obj1 = {
  a: 1,
  fn2,
};
const obj2 = {
  a: 2,
  obj1,
};
obj2.obj1.fn2(); // 1

// 面试题：隐式绑定失败场景
// 1. 函数赋值
const obj1 = {
  a: 1,
  fn: function () {
    console.log(this.a);
  },
};
const fn1 = obj1.fn; //将引用给了 fn1，等同于 fn1 = function fn1() { console.log(this.a) }
fn1(); // undefined

// 2. setTimeout
setTimeout(obj1.fn, 1000); // undefined 这里执行的环境同样是全局

// 3. 将函数作为参数传递
function run(fn) {
  console.log(fn === obj1.fn);
  fn();
}
run(obj1.fn); //undefined，传进去的是一个引用

//4、一般匿名函数也是会指向全局的
var name = "The Window";
var obj = {
  name: "My obj",
  getName: function () {
    return function () {
      // 这是一个匿名函数
      console.log(this.name);
    };
  },
};
obj.getName()()(
  //5、IIFE
  function () {
    var a = 1;
    console.log(this.a);
  }
)(); //undefined
`)
</script>

<style lang='scss'>

</style>