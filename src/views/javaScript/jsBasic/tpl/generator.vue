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
            </section>
        </div>


        <h4 id="SubGenerator">
            <RouterLink to="#SubGenerator" class="a-link">#</RouterLink>
            3、生成器Generator
        </h4>
        <h4 id="AutoGenerator">
            <RouterLink to="#AutoGenerator" class="a-link">#</RouterLink>
            4、Generator自动执行
        </h4>
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


</script>

<style lang='scss'>

</style>