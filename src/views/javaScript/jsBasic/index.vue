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
                                    <li>call(thisScope,arg1,arg2,arg...);<span class="red">
                                            多个参数，第一个参数为null、undefined时，默认指向Window</span></li>
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
                    <div>
                        <div class="h4">apply的使用方法(函数劫持、对象复制)</div>
                        <span>可以看到 Student 不具备任何方法，但是在 <span
                                class="red">Person.apply(this,arguments)</span>之后，他就具备了Person类的方法及属性</span>
                        <div>由此得出结论：
                            Function.apply() 能“劫持”另外一个对象， 继承另外一个对象的属性</div>
                    </div>
                    <PrismEditor v-model="understandApply" />
                    <PrismEditor v-model="thisOffer" />
                </section>
            </div>
        </div>


        <!-- ------------- Promise --------------- -->
        <div>
            <h3 id="Promise">2、Promise(异步编程)</h3>
            <div>
                <h4 id="Reference">1、参考资料</h4>
                <section>
                    <div>
                        <span>1.</span>
                        <a target="_blank" rel="help" href="http://liubin.org/promises-book/"
                            class="a-navigation">JavaScript
                            Promise迷你书(中文版)</a>
                    </div>
                    <div>
                        <span>2.</span>
                        <a target="_blank" href="https://juejin.cn/post/6844903455962693640"
                            class="a-navigation">深入理解Promise(上)</a>
                    </div>
                    <div>
                        <span>3.</span>
                        <a target="_blank" class="a-navigation"
                            href="https://juejin.cn/post/6844903667494027278">从手写一个符合Promise/A+规范Promise来深入学习Promise</a>
                    </div>
                    <div>
                        <span>4.</span>
                        <a target="_blank" class="a-navigation"
                            href="https://juejin.cn/post/6844903550288412679">Promise深度学习---我のPromise/A+实现
                        </a>
                    </div>
                    <div>
                        <span>5.</span>
                        <a target="_blank" class="a-navigation"
                            href="https://mp.weixin.qq.com/s/Yrwe2x6HukfqJZM6HkmRcw">【第1738期】100 行代码实现 Promises/A+
                            规范</a>
                    </div>
                    <div>
                        <span>6.</span>
                        <a target="_blank" class="a-navigation"
                            href="https://zhuanlan.zhihu.com/p/144058361">从零开始手写Promise
                        </a>
                    </div>
                    <div>
                        <span>7.</span>
                        <a target="_blank" class="a-navigation"
                            href="https://blog.csdn.net/weixin_56650035/article/details/121070438?spm=1001.2014.3001.5502">PromiseA+规范之手写Promise
                        </a>
                    </div>
                </section>
            </div>

            <h4 id="ConstructorStatus">2、构造函数和状态</h4>
            <h4 id="SixMethods">3、六大方法</h4>
            <h4 id="ErrorCapture">4、错误捕获</h4>
            <h4 id="ReturnValue">5、返回值</h4>
            <h4 id="WritePromise">6、手写Promise</h4>
            <h4 id="AsyncAwait">7、async和await</h4>
        </div>


        <!-- ------------- 3、Generator --------------- -->
        <div>
            <h3 id="Generator">3、Generator</h3>
            <h4 id="Iterator">1、迭代器Iterator</h4>
            <h4 id="SubGenerator">2、生成器Generator</h4>
            <h4 id="AutoGenerator">3、Generator自动执行</h4>
        </div>

        <!-- ------------- DeepClone --------------- -->

        <h3 id="DeepClone">4、深拷贝和浅拷贝</h3>

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
// 对象方法:this指向方法前的对象
var person = {
  name: "dog",
  say: function (language) {
    console.log(this.name + " say " + language);
  },
};
person.say("Hello world!");

//call  改变this指向，传入多个参数
var name = "duck";
person.say.call(window, "Helo Window!");

//apply 改变this指向，两个参数
// person.say.apply(this, "Hello Apply!"); // 会报错TypeError: CreateListFromArrayLike called on non-object

person.say.apply(window, { name: "Hello Apply!" }); // nduck say undefined
// apply 的第二个参数必须为数组
person.say.apply(this, ["Hello Apply!"]); // duck say Hello Apply

var arr = [1, 2, 3, 4];
Math.max.apply(null, arr); //4, null表示不改变this指向

// bind:改变this指向，不立即调用，而是返回该函数
function multiply(x, y, z) {
  return x * y * z;
}

var double = multiply.bind(null, 2);
console.log(double(3, 4)); // 24

var person1 = {
  name: "dog",
  sayHello: function () {
    setTimeout(
      function () {
        console.log(this.name + " Say Hello!");
      }.bind(this),
      1000
    );
  },
};

person1.sayHello(); //dog Say Hello!

`)

const understandApply = $builtIn(`
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(this.name + " Say hello!");
  };
}

function Student(name, age, grade) {
  Person.apply(this, arguments);
  this.grade = grade;
}

var s = new Student("Barry", 18, "middle school");
console.log(s.name); // Barry
console.log(s.age); // 18
console.log(s.grade); //middle school
s.sayHello(); // Barry Say hello!
`)

const thisOffer = $builtIn(`
// 面试题解析
var x = 20;
var a = {
  x: 15,
  fn: function () {
    var x = 30;
    return function () {
      return this.x;
    };
  },
};

console.log(a.fn()); // Function ƒ(){return this.x}
console.log((a.fn())()); // 20 a.fn()返回的是一个函数，()()这是自执行表达式。this -> window
console.log(a.fn()()); // 20 a.fn()相当于在全局定义了一个函数，然后再自己调用执行。this -> window
console.log(a.fn()() == (a.fn())()); //true
console.log(a.fn().call(this)); // 20 这段代码在全局环境中执行，this -> window
console.log(a.fn().call(a)); // 15, 更改this指向为 a，a的x为15

`)
</script>

<style lang="scss">

</style>