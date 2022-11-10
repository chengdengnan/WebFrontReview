<template>
    <div class="main">
        <h2 id="javascript">javascript基础问题梳理</h2>
        <!-- ------------- This --------------- -->
        <div>
            <h3 id="This">
                <RouterLink to="#This" class="a-link">#</RouterLink>
                1、This指向
            </h3>

            <div>
                <h4 id="GlobalFunction">
                    <RouterLink to="#GlobalFunction" class="a-link">#</RouterLink>1、全局函数
                </h4>
                <section>
                    <p>this指向全局对象window，<span class="red">注意严格模式下</span>，this为undefined</p>
                    <PrismEditor v-model="GlobalFunction" />
                </section>
            </div>

            <div>
                <h4 id="ObjectMethod">
                    <RouterLink to="#ObjectMethod" class="a-link">#</RouterLink>2、对象方法
                </h4>
                <section>
                    <p>this指向调用该方法的对象</p>
                    <PrismEditor v-model="ObjectMethod" />
                </section>
            </div>

            <div>
                <h4 id="Constructor">
                    <RouterLink to="#Constructor" class="a-link">#</RouterLink>3、构造函数
                </h4>
                <section>
                    <p>this指向 <span class="red">new 关键字 </span>创建出的实例</p>
                    <PrismEditor v-model="Constructor" />
                </section>
            </div>

            <div>
                <h4 id="SetTimeout">
                    <RouterLink to="#SetTimeout" class="a-link">#</RouterLink>4、定时器、回调函数
                </h4>
                <section>
                    <p>定时器 setTimeout 或 setInterval，以及回调函数或匿名函数自调用，<span class="red">this指向全局对象window</span></p>
                    <PrismEditor v-model="SetTimeout" />
                </section>
            </div>

            <div>
                <h4 id="EventFunction">
                    <RouterLink to="#EventFunction" class="a-link">#</RouterLink>5、事件函数
                </h4>
                <section>
                    <p>元素绑定事件，事件触发后执行函数，this指向的是当前元素</p>
                    <PrismEditor v-model="EventFunction" />
                </section>
            </div>

            <div>
                <h4 id="ArrowFunction">
                    <RouterLink to="#ArrowFunction" class="a-link">#</RouterLink>6、箭头函数
                </h4>
                <section>
                    <p>this指向箭头函数定义时所处的对象</p>
                    <PrismEditor v-model="ArrowFunction" />
                </section>
            </div>

            <div>
                <h4 id="CallApplyBind">
                    <RouterLink to="#CallApplyBind" class="a-link">#</RouterLink>7、call、apply、bind
                </h4>
                <section>
                    <section>
                        <ul type="square">
                            <li>
                                call和apply：<span class="red">改变 this 指向后</span>执行函数。
                                <ul style="margin-left: 1rem;" type="circle">
                                    <li>call(thisScope,arg1,arg2,arg...);<span class="red"> 多个参数</span></li>
                                    <li>apply(thisScope,[arg1,arg2,arg...]);<span class="red"> 两个参数</span></li>
                                </ul>
                            </li>
                        </ul>
                        <ul type="square">
                            <li>bind: 改变 this 指向后，返回函数，不执行。</li>
                            <p>bind(thisScopr,arg1,arg2,arg...) 多个参数</p>
                        </ul>
                    </section>
                    <PrismEditor v-model="CallApplyBind" />
                </section>
            </div>
        </div>


        <!-- ------------- Promise --------------- -->
        <h3 id="Promise">2、this绑定</h3>
        <h4 id="Reference">1、Reference</h4>
        <h4 id="ConstructorStatus">2、ConstructorStatus</h4>
        <h4 id="SixMethods">3、SixMethods</h4>
        <h4 id="ErrorCapture">4、ErrorCapture</h4>
        <h4 id="ReturnValue">5、ReturnValue</h4>
        <h4 id="WritePromise">6、WritePromise</h4>
        <h4 id="AsyncAwait">7、AsyncAwait</h4>

        <!-- ------------- Promise --------------- -->
        <h3 id="Generator">3、Generator</h3>
        <h4 id="Iterator">1、Iterator</h4>
        <h4 id="SubGenerator">2、SubGenerator</h4>
        <h4 id="AutoGenerator">3、AutoGenerator</h4>

        <!-- ------------- DeepClone --------------- -->

        <h3 id="DeepClone">4、DeepClone</h3>

    </div>
</template>
<script lang="ts" setup name="JsBasic">
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const GlobalFunction = $builtIn(
    `
// 'not strict' 【window】
console.log(this);
function funs(){
    console.log(this); 
};
funs();

// 'use stract' 【undefined】
function stractDemo(){
    'use strict'
    console.log(this);
};
stractDemo();
`
);

const ObjectMethod = $builtIn(`
let name = 'Global Barry';
let obj = {
    name: 'Obj Barry',
    getName: function(){
        console.log(this.name)
    },
};
obj.getName(); // 'Obj Barry'

let funs = obj.getName;
funs(); // 'Global Barry'
`
);

const Constructor = $builtIn(`
function Barry(){
    this.name = "Fashion pro Barry";
    console.log(this);
}

let n = new Barry();
console.log(n)
`);


const SetTimeout = $builtIn(`
// setTimeout
setTimeout(function () {
    console.log(this)
}, 0)

var name = "my name is window"; // 注意var 和 const 输出是不一样的
var obj = {
    name: "my name is obj",
    funs: function () {
        let timer = null;
        clearInterval(timer);
        timer = setInterval(function () {
            console.log(this.name); // "my name is window"
        }, 100);
    },
};
obj.funs();


// 回调函数
var o = {
    age: 18,
    say: function () {
        function callback() {
            return this.age;
        }
        func(callback);
    },
};
function func(callback) {
    var name = "Fashion Barry";
    console.log(name, " is", callback() + " years"); 
}
o.say(); // Fashion Barry  is undefined years
/**
 * 【解析】：
 * 函数内部的【this】指向于此函数的调用者（拥有者）
 * 但在上面这个例子中，为什么会输出unidentified
 * 虽然【callback】定义在对象【o】的【say】方法中，但实际上由于【callback】是在【func】函数中被普通调用的
 * 那么【func】中的【callback】的调用对象我们可以理解为【window】对象
 * 当使用一个对象未定义的属性时不会报错，会返回undefined，而直接使用一个未定义的变量便会报错
*/

`)

const EventFunction = $builtIn(`
<button id="btn">click me</button>

window.onload = function () {
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        console.log(this);
    };
};
`)

const ArrowFunction = $builtIn(`
var name = "my name is window";
var obj = {
    name: "my name is obj",
    func: function () {
        return (() => {
            console.log(this.name); // my name is obj
        })();
    },
};
obj.func()
`)

const CallApplyBind = $builtIn(`

`)
</script>

<style lang="scss">

</style>