<template>
  <h3 id="ThisBind">
    <RouterLink to="#ThisBind" class="a-link">#</RouterLink>
    2、This绑定
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
      <RouterLink to="#DisplayBind" class="a-link">#</RouterLink>3、显式绑定(call/apply/bind)
    </h4>
    <section>
      <p>
        显式绑定主要指<code>call\apply\bind</code>
      </p>
      <div>
        <ul>
          <li>
            apply
            <div>
              <ul type="cricle">
                <li>
                  <code>func.apply(thisArg,[argsArray])</code>,<code>thisArg</code>为<code>undefined | null</code>
                  时指向全局;
                </li>
                <li>
                  返回调用指定<code>this</code>值和参数函数的结果;
                </li>
              </ul>
            </div>
          </li>
          <li>
            call
            <div>
              <ul type="cricle">
                <li>
                  <code>func.call(thisArg,arg1,arg2,....)</code>;
                </li>
                <li>
                  返回调用者提供的<code>this</code>值和参数调用该函数的返回值，若该方法没有返回值，则返回
                  <code>undefined</code>;
                </li>
              </ul>
            </div>
          </li>
          <li>
            bind
            <div>
              <ul type="cricle">
                <li>
                  <code>func.bind(thisArg,arg1,arg2,....)</code>;
                </li>
                <li>
                  <code>thisArg</code>: 调用绑定函数时作为<code>this</code>参数传递给目标函数的值。如果使用
                  <code>new</code>运算符构造绑定函数，则忽略该值。当使用<code>bind</code>在<code>setTimeout</code>
                  中创建一个函数(作为回调提供)时，作为<code>thisArg</code>传递的任何值都将转换为<code>object</code>
                  。如果<code>bind</code>函数的参数列表为空，或者<code>thisArg</code>是<code>null | undefined</code>
                  ，执行作用域的<code>this</code>将被视为新函数的<code>thisArg</code>;
                </li>
                <li>
                  返回一个原函数的拷贝，并拥有指定<code>this</code>值和初始参数
                </li>
                <li>
                  MDN的<code>this</code>实现
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <WebPrismEditor v-model="DisplayThisBind" />
      <p>
        <span>
          面试题资料：
          <RouterLink to="#CustomCall" class="a-navigation">手写 call\apply\bind</RouterLink>
        </span>
      </p>
    </section>
  </div>
  <div>
    <h4 id="NewObject">
      <RouterLink to="#NewObject" class="a-link">#</RouterLink>4、new创建对象
    </h4>
    <section>
      <p>如果函数<code>constructor</code>里没有返回对象的话，<code>this</code>指向的是
        <code>new</code>之后得到的实例
      </p>
      <WebPrismEditor v-model="NewThisBind" />
      <p class="c-h6">如何确保你的构造函数只能被new调用，而不能被普通调用？</p>
      <div>
        <ul>
          <li>ES6之前使用：<code>instanceof</code></li>
          <li>ES6之后
            <div>
              <ul type="cricle">
                <li>
                  1. new.target 实现：《ECMAScript 6 入门》中讲到:
                  ES6 为 new 命令引入了一个 <code>new.target</code> 属性，
                  该属性一般用在构造函数之中，返回 <code>new</code> 命令作用于的那个构造函数。
                  如果构造函数不是通过 <code>new</code> 命令或 <code>Reflect.construct()</code>
                  调用的，<code>new.target</code> 会返回 <code>undefined</code> ，因此这个属性可以用来确定构造函数是怎么调用的。
                </li>
                <li>
                  2. 使用 Class：<code>ES6</code> 提供 <code>Class</code> 作为构造函数的语法糖，
                  来实现语义化更好的面向对象编程，
                  并且对 <code>Class</code> 进行了规定：类的构造器必须使用 <code>new</code> 来调用。
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <p>请看下面三种实现示例：</p>
      <WebPrismEditor v-model="ConstructorCallNew" />
    </section>
  </div>
  <div>
    <h4 id="ThisBindArrowFunction">
      <RouterLink to="#ThisBindArrowFunction" class="a-link">#</RouterLink>5、箭头函数
    </h4>
    <section>
      <p>
        编译期间确定的上下文，不会被改变，哪怕你<code>new</code>，指向的就是<span class="red">上一层</span>
        的上下文，箭头函数没有自己的<code>this</code>，需要看其外层是否有函数，如果有，外层函数的
        <code>this</code>就是内部箭头函数的<code>this</code>，如果没有，则<code>this</code>是<code>window</code>
      </p>
      <WebPrismEditor v-model="ThisBindArrowFunction" />
    </section>
  </div>
  <div>
    <h4 id="ThisPriority">
      <RouterLink to="#ThisPriority" class="a-link">#</RouterLink>6、优先级
    </h4>
    <section>
      <p>
        【new 绑定】> 【显式绑定】> 【隐式绑定】> 【默认绑定】
      </p>
      <WebPrismEditor v-model="ThisPriority" />

    </section>
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

const DisplayThisBind = $builtIn(`
// Yes, it does work with ' new (funcA.bind(thisArg, args)) '
if (!Function.prototype.bind)
  (function () {
    var ArrayPrototypeSlice = Array.prototype.slice; // 为了 this
    Function.prototype.bind = function (otherThis) {
      // 调用者必须是函数，这里的 this 指向调用者：fn.bind(ctx, ...args) / fn
      if (typeof this !== "function") {
        throw new Error(
          "Function.prototype.bind-what is trying to be bound is not a callable"
        );
      }
      var baseArgs = ArrayPrototypeSlice.call(arguments, 1), // 取余下参数
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP = function () {}, //寄生组合集成需要一个中间函数，避免两次构造
        fBound = function () {
          // const newFn = fn.bind(ctx, 1); newFn(2) -> arguments: [1, 2]
          baseArgs.length = baseArgsLength; // reset to default base arguments
          baseArgs.push.aplly(
            // apply 显示绑定 this
            // 判断是不是 new 调用的情况，这里也说明了后边要讲的优先级问题
            fNOP.prototype.isPrototypeOf(this) ? this : otherThis,
            baseArgs
          );
        };
      // 下边是为了实现原型继承
      if (this.prototype) {
        // 函数的原型指向其构造函数，构造函数的原型指向函数
        // Function.prototype doesn't have a prototype property
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP(); // 继承中间函数，其实这里也继承了调用者了
      return fBound; // new fn()
    };
  })();

function fn() {
  console.log(this.a);
}

const obj = {
  a: 100,
};

fn.call(obj);

function fn() {
  console.log(this);
}
// 为啥可以绑定基本类型 ?
// boxing(装箱) -> (1 ----> Number(1))
// bind 只看第一个 bind（堆栈的上下文，上一个，写的顺序来看就是第一个）
fn.bind(1).bind(2)(); //1
`)

const NewThisBind = $builtIn(`
function Foo(n) {
  this.n = n;
}

const f = new Foo("Barry");
console.log(f.n); //"Barry"

function Bar(a) {
  this.a = a;
  return {
    a: 100,
    b: 10,
  };
}
const b = new Bar(3);
console.log(b); //100
`)

const ConstructorCallNew = $builtIn(`
// 第一种 使用 instanceof 实现
function Barry(surname, firstname) {
  if (!(this instanceof Barry))
    throw new Error('Function constructor A cannot be invoked without "new"');
  this.surname = surname;
  this.firstname = firstname;
}
const b = Barry("CH", "Barry"); // error
const b2 = new Barry("CH", "Barry"); // Barry { surname: 'CH', firstname: 'Barry' }

// 第二种 使用 new.target 实现
function Barry2(surname, firstname) {
  if (!new.target)
    throw new Error('Function constructor A cannot be invoked without "new"');
  this.surname = surname;
  this.firstname = firstname;
}
const b3 = Barry2("CH", "Barry2"); // error
const b4 = new Barry2("CH", "Barry2"); // Barry2 { surname: 'CH', firstname: 'Barry2' }

// 第三种 使用 Class
// Class 修复了很多 ES5 面向对象编程的缺陷，例如类中的所有方法都是不可枚举的；
// 类的所有方法都无法被当作构造函数使用等。

class Barry3 {
  constructor(surname, firstname) {
    this.surname = surname;
    this.firstname = firstname;
  }
}

// const b5 = Barry3("CH", "Barry3"); // error
const b5 = new Barry3("CH", "Barry3"); // Barry3 { surname: 'CH', firstname: 'Barry3' }
`)

const ThisBindArrowFunction = $builtIn(`
var a = {
  myFunc: function () {
    setTimeout(function () {
      console.log(this); // window
    }, 0);
  },
};

a.myFunc();

var a2 = {
  myFunc: function () {
    var _this = this;
    setTimeout(function () {
      console.log(_this); // a
    }, 0);
  },
};
a2.myFunc();

// 箭头函数
var a3 = {
  myFunc: function () {
    setTimeout(() => {
      console.log(this); // a
    }, 0);
  },
};
a3.myFunc();

function fn() {
  return {
    b: () => {
      console.log(this);
    },
  };
}
fn().b(); // window
fn().b.bind(1)(); // window
fn.bind(2)().b.bind(3)(); // [Number: 2]
`)

const ThisPriority = $builtIn(`
// 隐式 vs 默认 -> 结论：隐式 > 默认
function fn() {
  console.log(this);
}
const obj = {
  fn,
};
obj.fn(); // obj { fn: [Function: fn] }

// 显式 vs 隐式 -> 结论：显式 > 隐式
obj.fn.call(); // window

// new vs 显式 -> 结论：new > 显式
function foo(a) {
  this.a = a;
}
const obj1 = {};
var bar = foo.bind(obj1);
bar(10);
console.log(obj1.a); // 10

// new
var bzz = new foo(3)
console.log(obj1.a); // 10
console.log(bzz.a); // 3
// 箭头函数没有 this，比较没有意义
`)
</script>

<style lang='scss'>

</style>