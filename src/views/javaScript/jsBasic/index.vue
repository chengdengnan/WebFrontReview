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
                    <WebPrismEditor v-model="GlobalFunction" />
                </section>
            </div>

            <div>
                <h4 id="ObjectMethod">
                    <RouterLink to="#ObjectMethod" class="a-link">#</RouterLink>2、对象方法
                </h4>
                <section>
                    <p>this指向调用该方法的对象</p>
                    <WebPrismEditor v-model="ObjectMethod" />
                </section>
            </div>

            <div>
                <h4 id="Constructor">
                    <RouterLink to="#Constructor" class="a-link">#</RouterLink>3、构造函数
                </h4>
                <section>
                    <p>this指向 <span class="red">new 关键字 </span>创建出的实例</p>
                    <WebPrismEditor v-model="Constructor" />
                </section>
            </div>

            <div>
                <h4 id="SetTimeout">
                    <RouterLink to="#SetTimeout" class="a-link">#</RouterLink>4、定时器、回调函数
                </h4>
                <section>
                    <p>定时器 setTimeout 或 setInterval，以及回调函数或匿名函数自调用，<span class="red">this指向全局对象window</span></p>
                    <WebPrismEditor v-model="SetTimeout" />
                </section>
            </div>

            <div>
                <h4 id="EventFunction">
                    <RouterLink to="#EventFunction" class="a-link">#</RouterLink>5、事件函数
                </h4>
                <section>
                    <p>元素绑定事件，事件触发后执行函数，this指向的是当前元素</p>
                    <WebPrismEditor v-model="EventFunction" />
                </section>
            </div>

            <div>
                <h4 id="ArrowFunction">
                    <RouterLink to="#ArrowFunction" class="a-link">#</RouterLink>6、箭头函数
                </h4>
                <section>
                    <p>this指向箭头函数定义时所处的对象</p>
                    <WebPrismEditor v-model="ArrowFunction" />
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
                    <WebPrismEditor v-model="CallApplyBind" />
                    <div>
                        <div class="c-h5">apply的使用方法(函数劫持、对象复制)</div>
                        <div class="indent">
                            <span>可以看到 Student 不具备任何方法，但是在 <span
                                    class="red">Person.apply(this,arguments)</span>之后，他就具备了Person类的方法及属性</span>
                        </div>
                        <div>由此得出结论：
                            Function.apply() 能“劫持”另外一个对象， 继承另外一个对象的属性</div>
                    </div>
                    <WebPrismEditor v-model="understandApply" />
                    <WebPrismEditor v-model="thisOffer" />
                </section>
            </div>
        </div>


        <!-- ------------- Promise --------------- -->
        <div>
            <h3 id="Promise">
                <RouterLink to="#Promise" class="a-link">#</RouterLink>2、Promise(异步编程)
            </h3>
            <div>
                <h4 id="Reference">
                    <RouterLink to="#Reference" class="a-link">#</RouterLink>1、参考资料
                </h4>
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

            <div>
                <h4 id="ConstructorStatus">
                    <RouterLink to="#ConstructorStatus" class="a-link">#</RouterLink>2、构造函数和状态
                </h4>
                <section>
                    <div class="c-h5">1. 构造函数</div>
                    <WebPrismEditor v-model="PromiseConstructor" />
                </section>
                <section>
                    <div class="c-h5">2. 状态</div>
                    <section>
                        <ul>
                            <li>初始状态 -> pending
                                <ul type="cricle" class="ml-15">
                                    <li>初始状态可以改变</li>
                                    <li>在resolve 或者 reject 调用之前都处于这个状态</li>
                                </ul>
                            </li>
                            <li>最终成功状态 -> fulfilled
                                <ul type="cricle" class="ml-15">
                                    <li>执行 resolve 函数，状态改变为 fulfilled</li>
                                    <li>执行 onFulfilled 函数</li>
                                </ul>
                            </li>
                            <li>最终失败状态 -> rejected
                                <ul type="cricle" class="ml-15">
                                    <li>执行 reject 函数，状态改变为 rejected</li>
                                    <li>执行 onRejected 函数</li>
                                </ul>
                            </li>
                            <li>then 方法
                                <ul type="cricle" class="ml-15">
                                    <li>then 方法为 Promise 对象注册了 onFulfilled 和 onRejected 函数</li>
                                </ul>
                            </li>
                            <li>catch 方法
                                <ul type="cricle" class="ml-15">
                                    <li>catch 方法为Promise 对象注册了 onRejected 函数</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>

            <div>
                <h4 id="EightMethods">
                    <RouterLink to="#EightMethods" class="a-link">#</RouterLink>3、八大方法
                </h4>
                <section>
                    <div class="c-h5">1. Promise.resolve</div>
                    <p class="indent">静态方法<code>Promise.resolve(value)</code>可以认为是<code>new
                            Promise</code>方法的语法糖,比如<code>Promise.resolve(42)</code>
                        可以认为是以下代码的语法糖
                    </p>
                    <WebPrismEditor v-model="PromiseResolve" />
                    <p class="indent">这个静态方法会让<code>Promise</code>对象立即进入确定(即resolved) 状态，并将42传递给后面 <cod>then</cod>
                        里所指定的 <code>onFulfilled</code>函数。作为 <code>new Promise</code>的快捷方式，在进行 <code>Promise</code>
                        对象的初始化或者编写测试代码的时候都非常方便。
                    </p>
                    <p class="indent">
                        简单总结一下 <code>Promise.resolve</code>方法的话，它的作用就是将传递给它的参数填充 <code>Fulfilled</code>
                        到 <code>Promise</code> 对象后并返回这个 <code>Promise</code> 对象。
                    </p>
                </section>
                <section>
                    <div class="c-h5">2. Promise.reject</div>
                    <p class="indent">
                        <code>Promise.reject(error)</code>是和<code>Promise.resolve(value)</code>类似的静态方法，是
                        <code>new Promise</code> 方法的快捷方式。比如
                        <code>Promise.reject(new Error("Promise reject error"))</code>
                        就是下面代码的语法糖形式
                    </p>
                    <WebPrismEditor v-model="PromiseReject" />
                    <p class="indent">
                        简单总结一下 <code>Promise.reject</code>方法的话：它的功能是调用该 <code>Promise</code>对象通过then指定的
                        <code>onRejected</code>函数，并讲错误（Error）对象传递给这个<code>onRejected</code>函数
                    </p>
                </section>
                <section>
                    <div class="c-h5">3. Promise.then</div>
                    <p><code>Promise.then(onFulfilled, onRejected)</code></p>
                    <div>
                        <div class="c-h6">① 函调函数异步执行</div>
                        <WebPrismEditor v-model="thenCallBack" />
                        <p>
                            <code>Promise/A+规范</code>统一规定：Promise 只能使用异步调用方式
                        </p>
                    </div>
                    <div>
                        <div class="c-h6">② 返回值</div>
                        <p class="indent">不管你在回调函数 <code>onFulfilled</code>中会返回一个什么样的值，或者不返回值，该值都会由
                            <code>Promis.resolve(return 的返回值)</code>
                            进行响应的包装处理。因此，最终 <code>then</code>的结果都是返回一个新创建的 <code>Promise</code>对象。
                        </p>
                        <p class="indent">
                            也就是说，<code>Promis.then</code>不仅仅是注册一个回调函数那么简单，它还会将回调函数的返回值进行变换，创建并返回一个<code>Promise</code>
                            对象。正是
                            <code>then</code>函数中有了这样返回值的机制，才能使得在整个<code>Promise</code>链式结构当中，每个<code>then</code>方法都能给
                            下一个<code>then</code>方法传递参数。现在我们知道怎么返回的<code>Promise</code>是之前的还是新的？另外该<code>Promise</code>的状态又是如何？
                        </p>
                        <WebPrismEditor v-model="PromiseReturnValue"></WebPrismEditor>
                        <p>从上面结果来看，实际上不管是调用 <code>then</code>还是<code>catch</code>方法，
                            都返回了一个新的<code>Promise</code>对象</p>
                    </div>
                    <div>
                        <div class="c-h6">③ promise穿透</div>
                        <p>我们先来举个例子：</p>
                        <WebPrismEditor v-model="PromisePierce"></WebPrismEditor>
                        <p>如果你认为输出的是【 Barry Promise 】，那么你就错了，实际上他输出的是 【 Barry 】</p>
                        <p>产生这么的输出是因为你给<code>then</code>方法传递了一个非函数(比如<code>promise</code>对象)的值，代码会这样理解
                            : <code>then(null)</code>,因此导致了前一个<code>promise</code>的结果产生了坠落的效果，也就是和下面代码是一样的，
                            代码直接穿透了<code>then(null)</code>进入了下一层链：
                        </p>
                        <WebPrismEditor v-model="PromisePierceTwo"></WebPrismEditor>
                        <p>随意添加多个<code>then(null)</code>结果都是一样的</p>
                        <WebPrismEditor v-model="PromisePierceThree"></WebPrismEditor>

                    </div>
                </section>
                <section>
                    <div class="c-h5">4. Promise.catch</div>
                </section>
                <section>
                    <div class="c-h5">5. Promise.finally</div>
                </section>
                <section>
                    <div class="c-h5">6. Promise.all</div>
                </section>
                <section>
                    <div class="c-h5">7. Promise.allSettled</div>
                </section>
                <section>
                    <div class="c-h5">8. Promise.race</div>
                </section>
            </div>
            <h4 id="ErrorCapture">
                <RouterLink to="#ErrorCapture" class="a-link">#</RouterLink>4、错误捕获
            </h4>
            <h4 id="ReturnValue">
                <RouterLink to="#ReturnValue" class="a-link">#</RouterLink>5、返回值
            </h4>
            <h4 id="WritePromise">
                <RouterLink to="#WritePromise" class="a-link">#</RouterLink>6、手写Promise
            </h4>
            <h4 id="AsyncAwait">
                <RouterLink to="#AsyncAwait" class="a-link">#</RouterLink>7、async和await
            </h4>
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

const PromiseConstructor = $builtIn(`
var promise = new Promise(function (resolve, reject) {
  // 异步处理
  // 处理结果成功调用 resolve
  // 失败调用 reject
});
`)

const PromiseResolve = $builtIn(`
new Promise(function (resolve) {
    resolve(42)
})
`)

const PromiseReject = $builtIn(`
new Promise(function (reject) {
    reject(new Error("Promise reject error"))
})
`)

const thenCallBack = $builtIn(`
var promise = new Promise((resolve, reject) => {
  console.log("inner Promise"); // 1
  setTimeout(() => {
    resolve("Fashion Barry"); // 3
  }, 1000);
});

promise.then((res) => {
  console.log("res", res);
});
console.log("outer promise"); // 2
// Promise 实际是一个同步函数，then 方法才是异步
// 所以输出顺序如上
`)

const PromiseReturnValue = $builtIn(`
var aPromise = new Promise((resolve, reject) => {
  resolve("aPromise");
});
var thenPromise = aPromise.then((res) => {
  console.log("thenPromise: ", res);
});
var catchPromise = aPromise.catch((err) => {
  console.error("catchPromise: ", err);
});

console.log(aPromise !== thenPromise); // true
console.log(thenPromise !== catchPromise); // true
console.log(aPromise, thenPromise, catchPromise); // Promise { "aPromise" }, Promise { <pending> }, Promise { <pending> }
`)

const PromisePierce = $builtIn(`
Promise.resolve("Barry")
.then(Promise.resolve("Barry Promise"))
.then((result) => {
  console.log("result", result); // "Barry"
});
`)

const PromisePierceTwo = $builtIn(`
Promise.resolve("Barry")
.then(null)
.then((result) => {
  console.log("result", result); // "Barry"
});
`)

const PromisePierceThree = $builtIn(`
Promise.resolve("Barry")
.then(null)
.then({ name: "My name is Barry" })
.then(null)
.then((result) => {
  console.log("result", result); // "Barry"
});
`)
</script>

<style lang="scss">

</style>