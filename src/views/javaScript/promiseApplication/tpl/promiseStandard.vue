<template>
    <div>
        <h3 id="PromiseStandard">
            <RouterLink to="#PromiseStandard" class="a-link">#</RouterLink>2、PromiseA+ 规范
        </h3>
        <div>
            <h4 id="PromiseTerm">
                <RouterLink to="#PromiseTerm" class="a-link">#</RouterLink>1、Promise术语
            </h4>
            <section>
                <div>
                    <ul>
                        <li>
                            <code>Promise</code>是一个具有<code>then</code>方法的对象或者函数，行为遵守本规范
                        </li>
                        <li>
                            <code>thenable</code>是一个具有<code>then</code>方法的对象或者是函数
                        </li>
                        <li>
                            <code>value</code>是<code>promise</code>状态成功时的值，也就是<code>resolve</code>的参数，
                            指各种<code>js</code>值，包括：<code>undefined、thenable、promise</code>
                        </li>
                        <li>
                            <code>reason</code>是<code>promise</code>状态失败时的值，也就是<code>reject</code>
                            的参数，表示拒绝的原因
                        </li>
                        <li>
                            <code>exception</code>是一个使用<code>throw</code>抛出的异常值
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <div>
            <h4 id="PromiseStates">
                <RouterLink to="#PromiseStates" class="a-link">#</RouterLink>2、Promise状态
            </h4>
            <section>
                <p>
                    <code>promise</code>有三种状态，注意它们之间的流转关系
                </p>
                <div>
                    <p class="c-h6">1. pending</p>
                    <div>
                        <ul>
                            <li>初始状态，可以改变</li>
                            <li>
                                一个<code>promise</code>在<code>resolve</code>或者<code>reject</code>之前都处于这个状态
                            </li>
                            <li>
                                可通过<code>resolve</code>转变为<code>fulfilled</code>状态
                            </li>
                            <li>可通过<code>reject</code>转变为<code>rejected</code></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p class="c-h6">2. fulfilled</p>
                    <div>
                        <ul>
                            <li>
                                最终态，不可变
                            </li>
                            <li>
                                一个<code>promise</code>被<code>resolve</code>后会变为这个状态
                            </li>
                            <li>
                                必须拥有一个<code>value</code>值
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p class="c-h6">3. rejected</p>
                    <div>
                        <ul>
                            <li>
                                最终态，不可变
                            </li>
                            <li>
                                一个<code>promise</code>被<code>reject</code>后会变为这个状态
                            </li>
                            <li>
                                必须拥有一个<code>reason</code>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="c-h6">状态流转如下：</p>
                <div class="indent">
                    <p><code>pending</code> -> <code>resolve(value)</code> -> <code>fulfilled</code></p>
                    <p><code>pending</code> -> <code>reject(reason)</code> -> <code>rejected</code></p>
                </div>
            </section>
        </div>
        <div>
            <h4 id="PromiseThen">
                <RouterLink to="#PromiseThen" class="a-link">#</RouterLink>3、Promise then 方法
            </h4>
            <section>
                <p>
                    <code>promise</code>应该有个<code>then</code>方法，用来访问最终的结果，无论是
                    <code>value</code>还是<code>reason</code>
                </p>
                <WebPrismEditor v-model="PromiseThen" />
                <div>
                    <p class="c-h6">1. 参数要求</p>
                    <section>
                        <ul>
                            <li>
                                <code>onFulfilled</code>必须是函数类型，可选，如果不是函数，应该被忽略
                            </li>
                            <li>
                                <code>onRejected</code>必须是函数类型，可选，如果不是函数，应该被忽略
                            </li>
                        </ul>
                        <p><span class="red">注意：</span>这里的忽略是指给一个默认值,并不是真正意义上的忽略</p>
                    </section>
                </div>
                <div>
                    <p class="c-h6">2. onFulfilled特性</p>
                    <section>
                        <ul>
                            <li>
                                在<code>promise</code>变为<code>fulfilled</code>时，应该调用<code>onFulfilled</code>
                                ，参数是<code>value</code>
                            </li>
                            <li>
                                在<code>promise</code>变成<code>fulfilled</code>之前，不应该被调用
                            </li>
                            <li>
                                只能被调用一次(实现时需使用变量来限制执行次数)，
                                可以注册若干个回调函数(<code>promise.then().then().then()....</code> )
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <p class="c-h6">3. onRejected特性</p>
                    <section>
                        <ul>
                            <li>
                                在<code>promise</code>变成<code>rejected</code>时，应该调用<code>onRejected</code>
                                ，参数是<code>reason</code>
                            </li>
                            <li>
                                在<code>promise</code>变成<code>rejected</code>之前，不应该被调用
                            </li>
                            <li>
                                只能被调用一次
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <p class="c-h6">4. onFulfilled和onRejected应该是微任务</p>
                    <div>
                        <p class="indent">
                            在执行上下文堆栈仅包含平台代码之前，不得调用<code>onFulfilled</code>或
                            <code>onRejected</code>函数，<code>onFulfilled</code>和<code>onRejected</code>
                            必须被作为普通函数调用(即非实例化调用，这样函数内部 <code>this</code>非严格模式下
                            指向<code>window</code> )，使用<code>queueMicrotask</code>或者
                            <code>setTimeout</code>来实现微任务的调用。
                        </p>
                    </div>
                </div>
                <div>
                    <p class="c-h6">5. then方法可以被调用多次</p>
                    <section>
                        <ul>
                            <li>
                                <code>promise</code>状态变成<code>fulfilled</code>状态后，所有的<code>onFulfilled</code>
                                回调都需要按照<code>then</code>的顺序执行，也就是按照注册顺序执行(实现时用数组存储多个
                                <code>onFulfilled</code>的回调 )
                            </li>
                            <li>
                                <code>promise</code>状态变成<code>rejected</code>后，所有的<code>onRejected</code>
                                回调都需要按照<code>then</code>的顺序执行，也就是按照注册顺序执行(实现时用数组存储多个
                                <code>onRejected</code>的回调 )
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <p class="c-h6">6. then必须返回一个promise</p>
                    <div>
                        <p class="indent"><code>then</code>必须返回一个<code>promise</code></p>
                        <WebPrismEditor v-model="ThenReturnPromise" />
                        <div>
                            <ul>
                                <li>
                                    <code>onFulfilled</code>或者<code>onRejected</code>执行的结果是 X，
                                    调用<code>resolvePromise</code>
                                </li>
                                <li>
                                    如果<code>onFulfilled</code>或者<code>onRejected</code>执行时抛出异常e，
                                    <code>promise2</code>需要被<code>reject</code>，其<code>reason</code>为e
                                </li>
                                <li>
                                    如果<code>onFulfilled</code>不是一个函数且<code>promise1</code>已经
                                    <code>fulfilled</code>，<code>promise2</code>以<code>promise1</code>
                                    的<code>value</code>触发<code>onFulfilled</code>
                                </li>
                                <li>
                                    如果<code>onRejected</code>不是一个函数且<code>promise1</code>已经
                                    <code>rejected</code>，<code>promise2</code>以<code>promise1</code>
                                    的<code>reason</code>触发<code>onRejected</code>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="c-h6">7. Promise 的解决过程 resolvePromise</p>
                    <div>
                        <WebPrismEditor v-model="ResolvePromise" />
                        <ul>
                            <li>
                                如果<code>x</code>是当前<code>promise</code>本身(<code>promise2</code>和
                                <code>x</code>相等 )，那么<code>reject TypeError</code>
                            </li>
                            <li>
                                如果<code>x</code>是另一个<code>promise</code>(即<code>x</code>是一个<code>promise
                                </code> )，那么沿用它的<code>state</code>和<code>result</code>状态。
                                <div>
                                    <ul type="cricle">
                                        <li>如果<code>x</code>是<code>pending</code>状态，那么
                                            <code>promise</code>必须要在<code>pending</code>，知道<code>x</code>变成
                                            <code>fulfilled</code>或者<code>rejected</code>
                                        </li>
                                        <li>
                                            如果<code>x</code>是<code>fulfilled</code>状态，用相同的<code>value</code>
                                            执行<code>promise</code>
                                        </li>
                                        <li>
                                            如果<code>x</code>是<code>rejected</code>状态，用相同的<code>reason</code>
                                            拒绝<code>promise</code>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                如果<code>x</code>是一个<code>object</code>或者是一个<code>function</code>(不常见)
                                <div>
                                    <ul type="cricle">
                                        <li>
                                            首先取<code>x.then</code>的值，<code>let then = x.then</code>
                                        </li>
                                        <li>
                                            如果取<code>x.then</code>这步出错抛出<code>e</code>，那么以<code>e</code>为
                                            <code>reason</code>拒绝<code>promise</code>
                                        </li>
                                        <li>
                                            如果<code>then</code>是一个函数，将<code>x</code>作为函数的作用域<code>this</code>
                                            调用，即<code>then.call(x, resolvePromise, rejectPromise)</code>,第一个参数
                                            叫<code>resolvePromise</code>，第二个参数叫<code>rejectPromise</code>
                                            <div>
                                                <ul type="square">
                                                    <li>
                                                        如果<code>resolvePromise</code>以<code>y</code>为参数被调用，则执行
                                                        <code>resolvePromise(promise2, y, resolve, reject)</code>
                                                    </li>
                                                    <li>
                                                        如果<code>rejectPromise</code>以<code>r</code>为参数被调用，则以<code>r</code>
                                                        为<code>reason</code>拒绝<code>promise</code>
                                                    </li>
                                                    <li>
                                                        如果<code>resolvePromise</code>
                                                        和<code>rejectPromise</code>都调用了，那么第一个调用
                                                        优先，后面的调用忽略
                                                    </li>
                                                    <li>
                                                        如果调用<code>then</code>抛出异常<code>e</code>：若<code>resolvePromise</code>
                                                        或<code>rejectPromise</code>已经被调用，那么忽略，否则以<code>e</code>为
                                                        <code>reason</code>拒绝<code>promise</code>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            如果<code>then</code>不是一个<code>function</code>，以<code>x</code>为<code>value</code>
                                            执行<code>promise</code>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                如果<code>x</code>不是<code>object</code>或者<code>function</code>，以<code>x</code>
                                为<code>value</code>执行<code>promise</code>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

const PromiseThen = $builtIn(`
promise.then(onFulfilled, onRejected);
`)

const ThenReturnPromise = $builtIn(`
promise2 = promise1.then(onFulfilled, onRejected)
`)

const ResolvePromise = $builtIn(`
resolvePromise(promise2, x, resolve, reject)
`)


</script>

<style lang='scss'>

</style>