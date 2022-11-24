<template>
    <div>
        <h3 id="Generator">
            <RouterLink to="#Generator" class="a-link">#</RouterLink>
            3、Generator
        </h3>
        <div class="brief-introduction">
            <p>迭代器的英文<code>iteration</code>源自拉丁文<code>itero</code>，意思是“重复”或“再来”。在软件开发领域
                ，“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。<code>ECMAScript 6</code>
                规范新增了两个高级特性：迭代器和生成器。使用这两个特性，能够更清晰、高效、方便的实现迭代。
            </p>
            <p class="right">摘自《高级JavaScript程序设计 第四版》</p>
        </div>
        <div>
            <h4 id="Iterator">
                <RouterLink to="#Iterator" class="a-link">#</RouterLink>
                1、迭代器Iterator
            </h4>
            <section>
                <div>
                    <p>迭代器<code>Iterator</code>是ES6引入的一种新的遍历机制，一中接口，本质是一个指针对象，供
                        <code>for...of</code>消费。
                    </p>
                    <div>
                        <ul>
                            <li>迭代器也有<code>next()</code>方法，返回对象<code>{ value:"", done:false }</code>
                                ，第一次调用时返回第一个值
                            </li>
                            <li>
                                迭代器部署在<code>Symbol.iterator</code>属性上
                            </li>
                            <li>
                                <code>Array、Map、Set、String、Function的arguments</code>对象等具有原生
                                <code>Iterator</code>接口
                            </li>
                            <li><code>Number/Object</code>没有实现迭代工厂函数</li>
                        </ul>
                    </div>
                    <WebPrismEditor v-model="Iterator" />
                </div>
                <div>
                    <p>
                        每个迭代器都表示对可迭代对象的一次性有序遍历。不同迭代器的示例相互之间没有联系，只会独立地遍历
                        可迭代对象。请看看下述代码：
                    </p>
                    <WebPrismEditor v-model="IteratorTwo" />
                    <p>
                        迭代器并不与可迭代对象某个时刻的快照绑定，而仅仅而仅仅是使用【游标】来记录遍历可迭代对象的历程。
                        如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化。请看看下述代码：
                    </p>
                    <WebPrismEditor v-model="IteratorThree" />
                    <p><span class="red">【注意】</span> 迭代器维护着一个指向可迭代对象的引用，因此迭代器会阻止垃圾回收程序回收可迭代对象。</p>
                </div>

            </section>
        </div>
        <div>
            <h4 id="CustomIterator">
                <RouterLink to="#CustomIterator" class="a-link">#</RouterLink>
                2、自定义迭代器Iterator
            </h4>
            <section>
                <p>
                    与<code>Interable</code>接口类似，任何实现<code>Iterator</code>接口的对象都可以作为迭代器使用。
                    下面这个例子中<code>Counter</code>类只能被一定的次数。
                </p>
                <p>为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器。为此可以把计数器
                    放到闭包里，然后通过闭包返回迭代器。
                </p>
                <WebPrismEditor v-model="CustomIterator" />
                <p class="c-h5">如何提前终止迭代器</p>
                <p class="indent">可选的<code>return()</code>方法用于指定在迭代器提前关闭时执行的逻辑。执行迭代的结构在
                    想让迭代器知道他不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。可能情况包括：</p>
                <div>
                    <ul>
                        <li>
                            <code>for-of</code>循环通过<code>break、continue、return 或 throw</code>提前退出
                        </li>
                        <li>
                            解构操作并未消费所有值
                        </li>
                    </ul>
                </div>
                <p>需要注意的是：<code>return()</code>方法必须返回一个有效的<code>IteratorResult</code>对象。
                    简单情况下，可以返回<code>{ done:true }</code>。因为这个返回值只会用在生成器的上下文中。</p>
                <WebPrismEditor v-model="CustomReturnIterator" />
                <p>如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如：数组的迭代器就是不能关闭的：</p>
                <WebPrismEditor v-model="ArrayIterator" />
                <p>因为<code>return()</code>方法是可选，所以并非所有迭代器都是可以关闭的。要知道某个迭代器是否可关闭，
                    可以测试这个迭代器实例的<code>return</code>属性是不是函数对象。不过，仅仅给一个不可关闭的迭代器增加
                    这个方法<span class="red">并不能</span>让它可关闭的。这是因为调用<code>return()</code>不会强制
                    迭代器进入关闭状态。
                </p>
            </section>
        </div>

        <div>
            <h4 id="SubGenerator">
                <RouterLink to="#SubGenerator" class="a-link">#</RouterLink>
                3、生成器Generator
            </h4>
            <section>
                <p>生成遍历器对象的函数，使用<code>*</code>表示函数(星号可以紧挨着<code>function</code>关键字
                    也可以在中间添加一个空格)，内部使用<code>yield</code>定义内部状态。</p>
                <div>
                    <ul>
                        <li>每当执行完一条<code>yield</code>语句后，函数就会自动停止执行，直到再次调用<code>next()</code></li>
                        <li>
                            <code>yield</code>关键字，只可在生成器内部使用，在其他地方使用会导致程序抛出错误
                        </li>
                        <li>
                            可以通过函数表达式来创建生成器，但是不能使用箭头函数
                        </li>
                        <li>
                            可以在<code>generator</code>函数运行的不同阶段从外部内部注入不同的值，从而改变函数行为
                            <div>
                                <ul type="circle">
                                    <li><code>yield</code>语句无返回值，总是返回<code>undefined</code>。</li>
                                    <li><code>next</code>方法可以带一个参数，参数被当做上一条<code>yield</code>
                                        的返回值。</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <WebPrismEditor v-model="Generator" />
                <!-- throw方法 -->
                <div>
                    <p class="c-h5">1. throw方法</p>
                    <p><code>Generator</code>函数返回的遍历器对象都有一个<code>throw</code>方法，可以在函数体外
                        抛出错误，然后在<code>Generator</code>函数体内捕获。
                    </p>
                    <div>
                        <ul>
                            <li>若<code>Generator</code>函数体内部署了<code>try...catch</code>代码块，
                                那么遍历器的<code>throw</code>方法抛出的错误不会影响下一次遍历，反之如果
                                <code>Generator</code>函数体内没有部署<code>try...catch</code>
                                ，使用遍历器的<code>throw</code>方法抛出的错误，遍历则会终止。
                            </li>
                            <li>
                                一旦<code>Generator</code>执行过程中抛出错误，就不会再执行下去，如果后续调用
                                <code>next</code>方法，返回<code>{ value: undefined, done: true,}</code>对象
                            </li>
                        </ul>
                    </div>
                    <WebPrismEditor v-model="GeneratorThrow" />
                    <p>g.throw() 方法被【捕获】后会自动执行一次【next】方法，内部部署了【try...catch】
                        遍历器的【throw】方法抛出的异常不会影响下次遍历
                    </p>
                    <WebPrismEditor v-model="GeneratorThrowTwo" />
                </div>
                <!--  -->
                <div>
                    <p class="c-h5">2. return方法</p>
                    <p><code>Generator.prototype.return()</code>，返回给的值，并终结<code>Generator</code>
                        函数的遍历
                    </p>
                    <WebPrismEditor v-model="GeneratorReturn" />
                </div>
            </section>
        </div>

        <div>
            <h4 id="AutoGenerator">
                <RouterLink to="#AutoGenerator" class="a-link">#</RouterLink>
                4、Generator自动执行
            </h4>
            <section>
                <WebPrismEditor v-model="AutoRunGenerator" />
            </section>
        </div>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


const Iterator = $builtIn(`
let num = 1;
let obj = {};

console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined



let arr = ["own", "two", "three"];

let iter = arr[Symbol.iterator]();
console.log(iter.next()); // {value: 'own', done: false}
console.log(iter.next()); // {value: 'two', done: false}
console.log(iter.next()); // {value: 'three', done: false}
console.log(iter.next()); // {value: undefined, done: true}

for (let key in arr) {
  console.log(key); // 0,1,2 去键名
}
for (let value of arr) {
  console.log(value); // 取值
}
`)

const IteratorTwo = $builtIn(`
let arr = ["own", "two", "three"];

let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();

console.log(iter1.next()); //{value: 'own', done: false}
console.log(iter2.next()); //{value: 'own', done: false}
console.log(iter1.next()); //{value: 'two', done: false}
console.log(iter2.next()); //{value: 'two', done: false}
`)

const IteratorThree = $builtIn(`
let arr = ["own", "two", "three"];
let iter = arr[Symbol.iterator]();

console.log(iter.next()); //{value: 'own', done: false}

// 在 arr 中间插入值
arr.splice(1, 0, "four");
console.log(iter.next()); //{value: 'four', done: false}
console.log(iter.next()); //{value: 'two', done: false}
console.log(iter.next()); //{value: 'three', done: false}
console.log(iter.next()); //{value: undefined, done: true}
`)

const CustomIterator = $builtIn(`
class Counter {
  // counter 的实例应该被迭代 limit 次
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1;
    let limit = this.limit;

    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  }
}

let counter = new Counter(3);

for (let v of counter) {
  console.log(v);
}

for (let v of counter) {
  console.log(v);
}
`)

const CustomReturnIterator = $builtIn(`
class Counter {
  // counter 的实例应该被迭代 limit 次
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1;
    let limit = this.limit;

    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        console.error("Exiting early");
        return { done: true };
      },
    };
  }
}

let counter = new Counter(3);

for (let v of counter) {
  if (v > 2) {
    break;
  }
  console.log(v);
}
`)

const ArrayIterator = $builtIn(`
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break;
  }
}
// 1
// 2
// 3
for (let i of iter) {
  console.log(i);
}
// 4
// 5
`)

const Generator = $builtIn(`
function* generator() {
  const list = [1, 2, 3];
  for (let i of list) {
    yield i;
  }
}

let g = generator();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }

function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var a = foo(5);
console.log(a.next()); // { value: 6, done: false }
console.log(a.next()); // { value: NaN, done: false }
console.log(a.next()); // { value: NaN, done: true }

var b = foo(5);
console.log(b.next()); // { value: 6, done: false }
console.log(b.next()); // { value: NaN, done: false }
console.log(b.next()); // { value: NaN, done: true }
`)


const GeneratorThrow = $builtIn(`
var gen = function* gen() {
  try {
    yield console.log("a");
  } catch (e) {
    console.log(e);
  }
  yield console.log("b");
  yield console.log("c");
};

var g = gen();
console.log(g.next()); //a { value: undefined, done: false }
console.log(g.throw()); //undefined b { value: undefined, done: false }
// g.throw() 方法被【捕获】后会自动执行一次【next】方法，内部部署了【try...catch】，
// 遍历器的【throw】方法抛出的异常不会影响下次遍历
console.log(g.next()); //b { value: undefined, done: false }
console.log(g.next()); // { value: undefined, done: true }
`)

const GeneratorThrowTwo = $builtIn(`
var gen = function* gen() {
  yield console.log("a");
  yield console.log("b");
  throw new Error("Generator Error");
  yield console.log("c");
};

var g = gen();
console.log(g.next()); //a { value: undefined, done: false }
console.log(g.next()); //b { value: undefined, done: false }
console.log(g.next()); // Generator Error 后续不会再执行
`)

const GeneratorReturn = $builtIn(`
var gen = function* gen() {
  yield 1;
  yield 2;
  throw new Error("Generator Error");
  yield 3;
};

var g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.return("return")); // { value: 'return', done: true }
console.log(g.next()); // { value: undefined, done: true }
`)

const AutoRunGenerator = $builtIn(`
function longTimeFn(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

// 自动执行封装，递归回调
function asyncFun(generator) {
  const iterator = generator(); // 接下里要执行next
  // data 为第一次执行之后的返回结果，用于传给第二次执行
  const next = (data) => {
    // 第一次执行next时，yield 返回的 promise 实例赋值给了value
    const { value, done } = iterator.next(data);
    if (done) return;
    value.then((data) => next(data));
  };
  next();
}

// 生成器函数内自动执行，无需显示next()

asyncFun(function* () {
  let data = yield longTimeFn(1000);
  console.log(data);
  data = yield longTimeFn(1500);
  console.log(data);
  return data;
});
`)


</script>

<style lang='scss'>

</style>