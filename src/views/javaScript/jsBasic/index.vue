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
                <h4 id="NineMethods">
                    <RouterLink to="#NineMethods" class="a-link">#</RouterLink>3、九大方法
                </h4>
                <section>
                    <div class="c-h5">
                        1. Promise.resolve</div>
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
                    <div>
                        <div class="c-h6">① 语法糖的本质</div>
                        <p class="indent">
                            这里我们再说一遍，实际上<code>Promise.catch</code>只是<code>promise.then(undefined, onRejected)</code>
                            方法的一个别名而已。也就是说，这个方法用来注册当<code>Promise</code>对象状态变为 <code>Rejected</code>时
                            的回调函数。可以看下面代码，两者写法是等价的，但是很明显
                            <code>Promise.catch</code>会让人第一眼看上去不会眼花缭乱:
                        </p>
                        <WebPrismEditor v-model="PromiseCatch"></WebPrismEditor>
                        <p>那么我们现在来说说为什么推荐使用第二种方法，而不是第一种:</p>
                        <div>
                            <ul>
                                <li>使用<code>promise.then(onFulfilled, onRejected)</code>
                                    的话，在<code>onFulfilled</code>中发生异常的话，<code>onRejected</code>
                                    中是捕获不到这个异常的。而且如果链式很长，每一条链上都要这么写。
                                </li>
                                <li>
                                    在<code>promise.then(onFulfilled).catch(onRejected)</code>
                                    的情况下<code>.then</code>中产生异常能在<code>.catch</code>
                                    中捕获。<code>.then</code>和<code>.catch</code>本质上是没有区别的，
                                    需要分场合使用
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="c-h6">② 只有一个主人</div>
                        <p class="indent">我们上面已经说过了，在书写很长的<code>Promise</code>链式，从代码清晰度和简易程度来讲，在最后添加
                            <code>catch</code>是远远在每一层链上写<code>onRejected</code>回调函数是要好的，因为<code>catch</code>可以捕获
                            <code>Promise</code>链中每一层节点的错误，这句话本身没有错，但从这句话延伸出一种错误的理解：<code>catch</code>
                            同时监控着所有节点。实际上<code>catch</code>函数在同一个时间点只属于某一个<code>Promise</code>，因为它的主人是随着程序
                            的执行而不断变化的，我们来举个例子：
                        </p>
                        <WebPrismEditor v-model="PromiseCatchTwo"></WebPrismEditor>
                        <p>在上述例子中，如果整个程序每一步都正确执行，那么会顺序产生三个<code>Promise</code>对象，分别是
                            <code>Promise(1)</code>,<code>Promise(2)</code>,<code>Promise(3)</code>:
                        </p>
                        <ul>
                            <li>可是如果在第一层具体执行逻辑出错了后，那实际上后面的两个<code>then</code>
                                中的回调函数压根不会被异步执行，所以会直接异步触发<code>catch</code>中的回调函数执行，
                                所以这种情况下<code>catch</code>是<code>Promise(1)</code>对象的<code>catch</code>。
                            </li>
                            <li>
                                如果第一层具体执行逻辑正确执行，就会异步触发第二个<code>then</code>中的回调函数执行，那么同理
                                ，在第二次具体执行逻辑抛出错误，会导致<code>Promise(2)</code>的状态变化，所以这种情况下<code>catch</code>
                                是<code>Promise(2)</code>对象的<code>catch</code>。
                            </li>
                            <li>同理<code>Promise(3)</code>也是如此</li>
                        </ul>
                        <p>总结下来就是：整个<code>Promise</code>链中，<code>catch</code>只属于异步触发它当中回调函数
                            执行的那个<code>Promise</code>，并不属于所有 <code>Promise</code></p>
                    </div>
                </section>
                <section>
                    <div class="c-h5">5. Promise.finally</div>
                    <p class="indent"><code>promise.finally</code>方法的回调函数不接受任何参数，这意味着<code>finally</code>没有办法
                        知道，前面的<code>Promise</code>状态到底是<code>fulfilled</code>还是<code>rejected</code>
                        。这表明，<code>finally</code>方法里面的操作，应该是与<code>Promise</code>状态无关的，不依赖于
                        <code>Promise</code>的执行结果。我们来看下面代码：
                    </p>
                    <WebPrismEditor v-model="PromiseFinally"></WebPrismEditor>
                    <p><code>finally</code>本质上是<code>then</code>方法的特例。我们来看下面伪代码：</p>
                    <WebPrismEditor v-model="PromiseFinallyTwo"></WebPrismEditor>
                    <p>上面代码中，如果不使用<code>finally</code>方法，同样的语句需要为成功和失败的状态各写一次。
                        有了<code>finally</code>方法，则只需要写一次。那么它是如何实现的呢？
                    </p>
                    <WebPrismEditor v-model="PromiseFinallyThree"></WebPrismEditor>
                    <p>上述代码中，不管前面的<code>Promise</code>是<code>fulfilled</code>还是<code>rejected</code>
                        ，都会执行回调函数<code>callback</code></p>
                </section>
                <section>
                    <div class="c-h5">6. Promise.all</div>
                    <p class="indent">
                        <code>Promise.all</code>接受一个<code>promise</code>对象的数组作为参数，当这个数组里的所有 <code>Promise</code> 对象
                        全部变为<code>resolve</code>或者<code>reject</code>状态的时候，它才会去调用<code>.then</code>方法。
                    </p>
                    <p class="indent">
                        传递给<code>Promise.all</code>的 <code>promise</code>并不是一个个的顺序执行的，而是同时开始、并行执行的，我们可以看下面例子
                    </p>
                    <WebPrismEditor v-model="PromiseAll"></WebPrismEditor>
                    <p>为什么这个例子可以看出来<code>Promise.all()</code>是并行的呢？因为所有<code>Promise</code>执行完只用了5秒，如果3个
                        <code>Promise</code>是按照顺序执行的，那么应该是9秒或者，在5-9之间，因为4个<code>Promise</code>并不是同时执行的，同时执行的
                        话总时间就是那个花费时间最长的<code>Promise</code>
                    </p>
                    <p><code>Promise.all()</code>重要细节点 <span class="red">（面试常考）</span>：</p>
                    <div>
                        <ul>
                            <li>
                                如果所有的<code>Promise</code>中只有一个执行错误，那么整个<code>Promise.all</code>不会走<code>Promise.all().then()</code>
                                而是走<code>Promise.all().catch()</code>这个流程了。但是要注意的是虽然走到了<code>Promise.all().catch()</code>这个流程
                                ，<span class="red">但是其他<code>Promise</code>还是会正常执行，但不会返回结果</span>
                            </li>
                            <li>
                                要注意<code>Promise.all()</code>的返回值顺序，<code>Promise.all().then()</code>的返回值顺序和传入的顺序是一致的，笔试时
                                遇到手写<code>Promise.all()</code>时要注意
                            </li>

                        </ul>
                    </div>
                </section>
                <section>
                    <div class="c-h5">7. Promise.allSettled</div>
                    <p>
                        <code>Promise.allSettled()</code>的入参和<code>Promise.all、Promise.race</code>一样，接受一个<code>promise</code>
                        对象的数组作为参数,也是同时开始、并行执行的。但是<code>Promise.allSettled</code>的返回值需要注意以下几点：
                    </p>
                    <p>
                        <code>Promise.allSettled</code>不会走进catch，当所有输入<code>Promise</code>都被履行或者拒绝时，<code>
                            statusesPromise
                        </code>会解析一个具有具体完成状态的数组
                    </p>
                    <div>
                        <ul>
                            <li><code>{ status: 'fulfilled', value:value } </code>：如果相应的<code>promise</code>被履行</li>
                            <li><code>{ status: 'rejected', reason: reason }</code>：如果相应的<code>promise</code>被拒绝</li>
                        </ul>
                    </div>
                    <p>我们看下面示例:</p>
                    <WebPrismEditor v-model="PromiseAllSettled"></WebPrismEditor>
                    <p>总结一下：<code>Promise.allSettled()</code>在你需要执行平行和独立的异步操作并收集所有结果时非常有效，
                        即使某些异步操作可能失败。</p>
                </section>
                <section>
                    <div class="c-h5">8. Promise.race</div>
                    <p class="indent">
                        <code>Promise.rece()</code>的使用方法和 <code>Promise.all</code>一样，接收一个<code>promise</code>
                        对象的数组为参数，<code>Promise.race</code>是要有一个promise对象进入<code>Fulfilled</code>或者
                        <code>Rejected</code>状态的话，就会继续进行后面的处理。这里依旧有两个点要注意：
                    </p>
                    <div>
                        <ul>
                            <li>和<code>Promise.all</code>一样是所有数组当中的<code>Promise</code>同时并行的</li>
                            <li><code>Promise.race</code> 在第一个<code>Promise</code>对象变为<code>Fulfilled</code>之后，并不会
                                取消其他<code>promise</code>对象的执行。</li>
                            <li><code>Promise.race</code>接受的是一个<code>Promise</code>对象数组，但是返回的确实最先完成<code>Fulfilled</code>
                                或者最先被<code>Rejected</code>的一个Promise的结果
                            </li>
                        </ul>
                    </div>
                    <p>下面我们来举个例子：</p>
                    <WebPrismEditor v-model="PromiseRace"></WebPrismEditor>
                    <p>这里我们再复习一下<code>Node</code>当中事件循环的知识：</p>
                    <div>
                        <ul>
                            <li>第一层循环：i为0时，异步触发了<code>Promise.race().catch()</code>，这里面的回调代码被放在了微任务队列中，
                                后面的3个<code>setTimeout</code>宏任务的回调函数代码被放进了<code>timer</code>阶段中的队列当中(其实并不是这样，因为
                                三个定时器都有延迟，都是在后面的事件循环中添加进来的)
                            </li>
                            <li>第二层循环：清空微任务对列，所以控制台打印出了错误，然后清空宏任务，分别打印出<code>3000/5000/7000</code></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div class="c-h5">9. Promise.any</div>
                    <p>
                        <code>Promise.any</code>的入参和<code>Promise.all、Promise.race、Promise.allSettled</code>一样，
                        接收一个<code>promise</code>对象的数组作为参数。
                    </p>
                    <div>
                        <ul>
                            <li>只要其中有一个<code>Promise</code>成功执行，就会返回已经成功执行的<code>Promise</code>的结果</li>
                            <li>如果这个<code>promise</code>对象的数组中没有一个<code>promise</code>
                                可以成功执行（即所有的 <code>promise</code>都失败 ），就返回一个失败的<code>promise</code>
                                和<code>AggregateError</code>类型的实例，它是<code>Error</code>的一个子类，用于把单一的错误集合
                                在一起
                            </li>
                        </ul>
                    </div>
                    <WebPrismEditor v-model="PromiseAny"></WebPrismEditor>
                    <p>
                        总计一下<code>Promisea.any</code>的应用场景：如果我们现在有多台服务器，则尽量使用响应速度最快的服务器，在这种情况下，
                        可以使用<code>Promise.any()</code>方法从最快的服务器接收响应。
                    </p>
                </section>
            </div>
            <div>
                <h4 id="ErrorCapture">
                    <RouterLink to="#ErrorCapture" class="a-link">#</RouterLink>4、错误捕获
                </h4>
                <section>
                    <div class="c-h5">1. 使用reject而不是throw</div>
                    <p class="indent">
                        在最开始我们先来一句比较重要的话：<code>Promise</code>的构造函数，以及被<code>then</code>调用执行的函数基本上都可以认为是
                        在<code>try...catch</code>代码块中执行的，所以在这些代码中即使使用<code>throw</code>，程序本身也不会异常而终止。
                    </p>
                    <p class="indent">
                        所以其实如果在<code>Promise</code>中使用<code>throw</code>语句的话，会被<code>try...catch</code>住，最终<code>Promise</code>
                        对象也会变为<code>Rejected</code>状态。但是我们为什么还是推荐使用<code>Promise.reject</code>呢？有下面两个原因：
                    </p>
                    <div>
                        <ul>
                            <li>我们很难区分<code>throw</code>是我们主动抛出来的，还是因为真正的其他异常导致的，无法主动决定，属于被动。</li>
                            <li><code>Promise</code>构造函数当中通过<code>throw</code>抛出来的错误未必会被<code>Promise.catch</code>
                                捕获到
                            </li>
                        </ul>
                    </div>
                    <p>下面我们就说说什么时候通过<code>throw</code>抛出的错误未必会被<code>Promise.catch</code>捕获到：</p>
                    <WebPrismEditor v-model="PromiseErrorCatch" />
                    <p>这个例子非常典型，想知道为什么错误没有被<code>catch</code>住，我们要到推出原因：</p>
                    <div>
                        <ul>
                            <li>首先我们要明确的是，不论是<code>then</code>还是<code>catch</code>中注册的回调函数，都是由<code>Promise</code>
                                状态的变化触发的，现在也就说<code>Promise</code>状态始终在<code>pending</code>状态。
                            </li>
                            <li>
                                其次，前面不是说<code>reject</code>和<code>throw</code>都能最终让<code>Promise</code>进入<code>onReject</code>
                                状态，这里的<code>throw</code>为什么没有改变<code>Promise</code>的状态。
                            </li>
                            <li>
                                原因还是要从事件循环来说，我们好好想想，这段代码在第一轮的事件循环当中<code>setTimeout</code>的回调函数被放在了
                                <code>timer</code>阶段的队列当中，但是它没有执行啊，所以第一轮的<code>Promise</code>状态一直处于<code>pending</code>
                                ，所以<code>then</code>和<code>catch</code>部分的代码全部没有触发，也就在第一轮事件循环当中跳过了。然后在第二轮
                                循环当中才执行了<code>throw</code>语句，把错误直接抛到了全局，就直接报错。所以上面的代码和下面效果一样，catch怎么可能
                                捕获到在它后面执行的代码呢？
                            </li>
                        </ul>
                    </div>
                    <WebPrismEditor v-model="PromiseErrorCatchTwo" />
                </section>
                <section>
                    <div class="c-h5">2. 在then中进行reject</div>
                    <p class="indent">如果我们想在<code>then</code>当中使用<code>reject</code>，首先我们要懂两个知识点：</p>
                    <div>
                        <ul>
                            <li>
                                <code>then</code>中的回调函数中，<code>return</code>的返回值类型不光是简单的字面值，还可以是复杂的对象类型，
                                比如<code>Promise</code>对象等。
                            </li>
                            <li>
                                只要修改这个返回的<code>Promise</code>的状态，在下一个<code>then</code>中注册的回调函数中的<code>onFulfilled</code>
                                和<code>onRejected</code>的哪一个会被调用也是能确定的
                            </li>
                        </ul>
                    </div>
                    <p>所以我们可以这样写代码就能在<code>then</code>当中使用<code>reject</code>:</p>

                </section>

            </div>
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

const PromiseCatch = $builtIn(`
// 第一种写法
Promise.resolve()
  .then((data) => console.log(data))
  .then(undefined, (err) => console.log(err));

// 第二种写法
Promise.resolve()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
`)

const PromiseCatchTwo = $builtIn(`
let p1 = new Promise((resolve, reject) => {
  // 第一层执行逻辑
  resolve("first promise"); // Promise(1)
})
  .then((res) => {
    // 第二层执行逻辑
    return "second promise"; // Promise(2)
  })
  .then((res) => {
    // 第三层执行逻辑
    return "third promise"; // Promise(3)
  })
  .catch((err) => {
    console.log("err", err);
  });
`)

const PromiseFinally = $builtIn(`
var p1 = new Promise((resolve, rejevt) => {
  setTimeout(() => {
    resolve;
  }, 1000);
});

p1.then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally"));
`)

const PromiseFinallyTwo = $builtIn(`
promise.finally(() => {
  // 执行逻辑
});
// 上面代码等同于下面
promise.then(
  (onFulilled) => {
    // 语句
    return onFulilled;
  },
  (onRejected) => {
    // 语句
    throw onRejected;
  }
);
`)

const PromiseFinallyThree = $builtIn(`
Promise.prototype.finally = function (callback) {
  let p = this.constructor;
  return this.then(
    (value) => p.resolve(callback()).then(() => value),
    (reason) =>
      p.reject(callback()).then(() => {
        throw reason;
      })
  );
};

var p = new Promise((resoleve, reject) => {
  setTimeout(() => {
    reject("Promise err");
  }, 1000);
});
p.catch((err) => console.log("err", err)).finally(() => {
  console.log("finally");
});`)

const PromiseAll = $builtIn(`
var promise1 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    resoleve("promise1--3000");
  }, 3000);
});
var promise2 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    resoleve("promise2--1000");
  }, 1000);
});
var promise3 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    resoleve("promise3--5000");
  }, 5000);
});

var promiseArr = [promise1, promise2, promise3];
console.time("promiseArr");
Promise.all(promiseArr)
  .then((res) => {
    console.log("res", res); // ['promise1--3000', 'promise1--1000', 'promise1--5000']
    console.timeEnd("promiseArr"); // 5523.29296875 ms
  })
  .catch((err) => console.log(err));
`)

const PromiseRace = $builtIn(`
let arr = [1000, 3000, 5000, 7000];
let promiseArr = [];

for (let i = 0; i < arr.length; i++) {
  let newPromise = new Promise((resolve, reject) => {
    if (i === 0) {
      reject(new Error("第二个错误"));
    } else {
      setTimeout(() => {
        console.log(arr[i]);
        resolve(arr[i]);
      }, arr[i]);
    }
  });
  promiseArr.push(newPromise);
}

Promise.race(promiseArr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 控制台报错
// 3000
// 5000
// 7000
`)

const PromiseAllSettled = $builtIn(`
var promise1 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    reject(new Error("promise1--3000"));
    // resoleve("promise1--3000");
  }, 3000);
});
var promise2 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    // reject(new Error("promise1--1000"))
    resoleve("promise2--1000");
  }, 1000);
});
var promise3 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    resoleve("promise3--5000");
    // reject(new Error("promise1--5000"))
  }, 5000);
});
var promiseArr = [promise1, promise2, promise3];
console.time("promiseArr");
Promise.allSettled(promiseArr)
  .then((res) => {
    console.log("res", res);
    console.timeEnd("promiseArr");
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("finally"));
`)

const PromiseAny = $builtIn(`
var promise1 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    // reject(new Error("promise1--3000"));
    resoleve("promise1--3000");
  }, 3000);
});
var promise2 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    // reject(new Error("promise2--1000"))
    resoleve("promise1--1000");
  }, 1000);
});
var promise3 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    // resoleve("promise3--5000");
    reject(new Error("promise1--5000"))
  }, 5000);
});
var promiseArr = [promise1, promise2, promise3];
console.time("promiseArr");
Promise.any(promiseArr)
  .then((res) => {
    console.log("res", res); // res promise1--1000
    console.timeEnd("promiseArr");
  })
  .catch((err) => console.error(err)); 
  //所有的Promise都失败， AggregateError: All promises were rejected
`)

const PromiseErrorCatch = $builtIn(`
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("async error");
  }, 500);
});

p1.then((res) => {
  console.log("res--", res);
}).catch((err) => {
  console.error("err--", err);
});
// 会直接报错，不会走到 catch
`)

const PromiseErrorCatchTwo = $builtIn(`
var p1 = new Promise(function(resolve, reject) {
})
.then(res => {
})
.catch(err => {
})
throw Error('async error')   `)
</script>

<style lang="scss">

</style>