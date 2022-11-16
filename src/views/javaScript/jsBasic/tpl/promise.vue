<template>
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
          <a target="_blank" rel="help" href="http://liubin.org/promises-book/" class="a-navigation">JavaScript
            Promise迷你书(中文版)</a>
        </div>
        <div>
          <span>2.</span>
          <a target="_blank" href="https://juejin.cn/post/6844903455962693640" class="a-navigation">深入理解Promise(上)</a>
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
          <a target="_blank" class="a-navigation" href="https://mp.weixin.qq.com/s/Yrwe2x6HukfqJZM6HkmRcw">【第1738期】100
            行代码实现 Promises/A+
            规范</a>
        </div>
        <div>
          <span>6.</span>
          <a target="_blank" class="a-navigation" href="https://zhuanlan.zhihu.com/p/144058361">从零开始手写Promise
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
          <div class="c-h6 red">③ promise穿透</div>
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
        <WebPrismEditor v-model="PromiseThenReject"></WebPrismEditor>
        <p>当然还能更简洁一些：</p>
        <WebPrismEditor v-model="PromiseThenRejectTwo"></WebPrismEditor>

      </section>

    </div>
    <div>
      <h4 id="ReturnValue">
        <RouterLink to="#ReturnValue" class="a-link">#</RouterLink>5、返回值
      </h4>
      <section>
        <p>关于返回值的知识其实我们在前面都已经讲过，这里总结一下并举个例子巩固一下：</p>
        <div>
          <ul>
            <li><code>Promise</code>会将最后的值存储起来，如果在下次使用<code>Promise</code>方法的时候，会直接返回该值
              的<code>Promise</code></li>
            <li><code>Promise</code>能够链式调用的原因是因为它的每一个方法都返回新的<code>Promise</code>
              ，哪怕是<code>finally</code>方法，特殊的是<code>finally</code>会返回上一个<code>Promise</code>的值
              包装成新的<code>Promise</code>，并且<code>finally</code>也不接受参数，因为无论<code>Promise</code>是
              <code>reject</code>还是<code>fulfill</code>它都会被调用
            </li>
          </ul>
        </div>
        <p>下面我们举个例子：</p>
        <WebPrismEditor v-model="PromiseRetValue"></WebPrismEditor>
        <p>这个例子也很经典，即使你已经搞清楚了上面的知识点，面对这个例子也还是会蒙掉，我们来说一下：</p>
        <div>
          <ul>
            <li>首先通过构造函数创建了一个<code>Promise</code>，我们这里称之为<code>Promise_1</code>
              ，通过<code>reject</code>进入<code>catch</code>函数，然后注意，<code>catch</code>的回调
              函数返回了一个2，实际上这里是返回了一个新的<code>Promise</code>，我们这里称之为<code>
                            Promise_2
                        </code>，它的状态是<code>fulfilled</code>。
            </li>
            <li>
              所以这里很迷惑人的一点就是<code>p1</code>最开始是指向<code>Promise_1</code>的，当
              <code>Promise_2</code>返回的时候，它又指向了<code>Promise_20</code>
            </li>
            <li>
              最后定时器经过一秒打印出2，因为<code>Promise_2</code>在被返回的时候就是<code>fulfilled</code>
              状态，<code>then</code>函数当中的回调函数自然而然的被异步触发。
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div>
      <h4 id="Async">
        <RouterLink to="#Async" class="a-link">#</RouterLink>7、async
      </h4>
      <section>
        <p><code>co</code>模块的语法糖（用于 <code>Generator</code> 函数的自动执行）</p>
        <WebPrismEditor v-model="AsyncBasic" />
        <p>资料</p>
        <div>
          <ul type="square">
            <li>
              <a target="_blank" class="a-navigation" href="https://juejin.cn/post/6844903457170653198">深入理解 ES7 的
                async/await
              </a>
            </li>
            <li>
              <a target="_blank" class="a-navigation" href="https://juejin.cn/post/6844903767129718791">async/await
                优雅的错误处理方法
              </a>
            </li>
            <li>
              <a target="_blank" class="a-navigation" href="https://juejin.cn/post/6844903860079738887">如何在 JS 循环中正确使用
                async 与 await
              </a>
            </li>
          </ul>
        </div>
        <p>参考总结：</p>
        <div>
          <ul>
            <li>
              如果一个函数通过<code>async</code>来声明，则一定可以通过<code>await</code>关键字来取到该函数
              的返回值。
            </li>
            <li>
              如果一个函数通过<code>async</code>来声明，则一定也可以通过<code>.then()</code>方法来取到该函数
              返回的<code>Promise</code>中的值(因为<code>async</code>声明的函数，<code>return</code>出来的
              结果一定是<code>Promise</code>对象 )
            </li>
            <li>
              如果一个函数没有通过<code>async</code>来声明，但只要<code>return</code>出来一个<code>Promise</code>，
              也可以通过<code>.then()</code>拿到里面的值(因为没有<code>async/await</code>的年代就是这样做的 )。
            </li>
            <li>
              如果一个函数通过<code>async</code>声明，则在该函数内部可以使用<code>await</code>，也可以使用<code>.then()</code>。这表明，
            </li>
            <li>
              如果一个函数没有通过<code>async</code>声明，则在该函数内部不可以使用<code>await</code>，
              但是可以使用<code>.then()</code>。
            </li>
          </ul>
        </div>
        <div>
          <div class="c-h5">1. 语法糖</div>
          <p><code>async</code>关键词是添加在函数定义之前的，一个<code>async</code>函数是定义会返回<code>Promise</code>
            函数的简便写法。
          </p>
          <p>比如：以下两个定义是有效的</p>
          <WebPrismEditor v-model="AsyncSugar" />
          <p>相似的，会抛出错误的<code>async</code>函数等效于返回失败的<code>Promise</code>的函数</p>
          <WebPrismEditor v-model="AsyncSugarTwo" />
        </div>
        <div>
          <div class="c-h5">2. async函数的返回值</div>
          <p>其实<code>async</code>返回值有下面这四种情况：</p>
          <div>
            <p class="indent c-h6">① 返回值是<code>Promise</code>对象</p>
            <section>
              <p>这种情况是最常见，也是符合<code>async</code>定义的</p>
              <WebPrismEditor v-model="AsyncReturnValue" />
            </section>
          </div>
          <div>
            <p class="indent c-h6">② 返回值是普通值</p>
            <section>
              <p>如果<code>return</code>出来一个普通值，会被包装成一个<code>Promise</code>对象。该<code>Promise</code>
                状态为<code>fulfilled</code>，该<code>Promise</code>的值为该简单值。可以使用<code>.then()</code>
                方法取到该<code>Promise</code>对象的值(该值就是 <code>async</code>声明的函数返回来的简单值 )。</p>
              <WebPrismEditor v-model="AsyncReturnCommonValue" />
            </section>
          </div>
          <div>
            <p class="indent c-h6">③ 返回值是Error类型</p>
            <section>
              <p>如果<code>return</code>出来是一个<code>Error</code>类型，则同样会被包装成一个<code>Promise</code>对象，
                该<code>Promise</code>对象的状态是<code>reject</code>，值是<code>Error</code>的信息，想取出来该<code>Promise</code>
                的报错信息，可以通过<code>.then()</code>的第二个参数，或者通过<code>.catch</code>方法。
              </p>
              <WebPrismEditor v-model="AsyncReturnErrorValue" />
            </section>
          </div>
          <div>
            <p class="indent c-h6">④ 没有返回值</p>
            <section>
              <p>
                如果没有<code>return</code>任何东西，则同样会返回一个<code>Promise</code>对象。该<code>Promise</code>
                对象的状态为<code>fulfilled</code>，该<code>Promise</code>的值为<code>undefined</code>。
              </p>
              <WebPrismEditor v-model="AsyncNotReturnValue" />
            </section>
          </div>
        </div>

      </section>
    </div>
    <div>
      <h4 id="Await">
        <RouterLink to="#Await" class="a-link">#</RouterLink>8、await
      </h4>
      <section>
        <p><code>await</code>关键字，它只能在<code>async</code>函数内部使用，让我们可以等待一个<code>Promise</code></p>
        <p>如果在<code>async</code>函数外使用<code>Promise</code>，我们依然需要使用<code>then</code>和回调函数
          ，例如普通函数和全局函数。所以目前取出<code>Promise</code>对象值的两种方法：<code>.then 和 await</code>
        </p>
        <div>
          <div class="c-h5">1. 最大作用</div>
          <p><code>await</code>最大的作用就是代替<code>.then()</code>方法，让整个成为同步的写法，更容易理解</p>
          <div>
            <p class="indent c-h6">① 串行异步</p>
            <section>
              <p>当串联异步的操作时，<code>await</code>要比<code>.then()</code>方法更加简洁。</p>
              <WebPrismEditor v-model="AwaitListPromise" />
            </section>
          </div>
          <div>
            <p class="indent c-h6">① 并行异步</p>
            <section>
              <p>虽然并行异步的代码还是离不开<code>Promise.all</code>或者<code>Promise.race</code>方法，但是用来处理
                最终的并行结果的代码也是很简洁的。
              </p>
              <WebPrismEditor v-model="AwaitParallelPromise" />
            </section>
          </div>
        </div>
        <div>
          <div class="c-h5">2. await本质</div>
          <p>从上面我们列出的这么多代码来看，<code>await</code>本质就是<code>.then</code>方法的语法糖。事实上
            ，<code>async/await</code>其实会编译为<code>Promise</code>与<code>then</code>回调。每次我们使用
            <code>await</code>，解释器会创建一个<code>Promise</code>然后把<code>async</code>函数中的后续代码(
            也就是书写在<code>await</code>后面的代码 )放在<code>then</code>回调中，并被计划在<code>Promise</code>
            完成之后执行。所以下面两段代码是等价的
          </p>
          <WebPrismEditor v-model="AwaitEssence" />
          <p>所以<code>await</code>关键字给我们的感觉是会让代码执行到<code>await</code>这一行的时候，“暂停执行”
            ，等到异步操作有了结果，再继续往下执行。那么问题来了，
            <span class="red"><code>await</code> 关键字会阻塞线程吗？</span>不会，因为还是我们上面说的那句话：
            <span class="red"><code>await</code>本质上是<code>.then()</code>的语法糖，<code>await</code>并没有
              改变<code>JavaScript</code>单线程的本质，没有改变<code>event Loop</code>的模型，只是方便我们写代码，更快捷
              ， 更清晰。</span>如下所示：
          </p>
          <WebPrismEditor v-model="AwaitEssenceTwo" />
          <p>所以通过上面这一段代码我们就能 <span class="red">明白</span> ：</p>
          <br />
          <p>
            <code>await</code>关键字不会阻塞<code>js</code>的<code>event loop</code>线程。当代码执行到<code>async</code>
            函数遇到<code>await</code>关键词时，不会继续往下执行，而是会发起异步调用，推入异步任务队列，等待异步处理。
            但是此时<code>node</code>线程并不会闲着，而是继续执行<code>async</code>函数被调用的哪一行下面的代码。等到异步
            操作的结果发生了变化时，将异步结果推入任务队列，<code>event loop</code>从队列中取出事件，推入的执行栈中。
          </p>
        </div>
      </section>
    </div>

    <div>
      <h4 id="AsyncAwaitErrorCatch">
        <RouterLink to="#AsyncAwaitErrorCatch" class="a-link">#</RouterLink>8、async和await错误处理
      </h4>
      <section>
        <div>
          <p class="c-h5">1. try-catch</p>
          <p>因为当我们使用<code>async/await</code>的时候我们的代码是同步的写法，同步的错误处理理所应当会先想到的就是
            <code>try/catch</code>，所以对于<code>async/await</code>的处理我们可以采用<code>try/catch</code>。
          </p>
          <WebPrismEditor v-model="AwaitTryCatch" />
          <p>
            实际通过上述代码可以看到：<code>try/catch</code>的方法在对于错误类型单一的情况下是简洁明了的，但是如果是
            不同类型的错误类型，如果我们还采用<code>try/catch</code>的方法也不是不行，只能在错误处理的代码上就要分类处理
            ，还不一定能准确知道是那个请求方法出了问题，所以使用<code>try/catch</code>在多类型错误的分析和定位是上是吃亏的：
          </p>
          <WebPrismEditor v-model="AwaitTryCatchTwo" />
        </div>
        <div>
          <p class="c-h5">2. .then和.catch方法输出值</p>
          <p>
            针对<code>try/catch</code>的问题我们希望就是在有不同类型错误可能出现的情况下，我们还是能准备并分别不同的类型
            做处理。而<code>async/await</code>本质就是<code>Promise</code>的语法糖，既然是<code>Promise</code>那么
            就可以使用<code>then</code>函数和<code>catch</code>函数，通过<code>then</code>和<code>catch</code>
            输出值。
          </p>
          <WebPrismEditor v-model="AwaitThenCatch" />
          <p>当在处理不同类型的错误的时候，我么就能分别在对应的不同的<code>Promise</code>的链的末尾
            <code>catch</code>当中书写不同的处理函数
          </p>
          <WebPrismEditor v-model="AwaitThenCatchTwo" />
        </div>
        <div>
          <p class="c-h5">3. 更优雅的方式</p>
          <p>使用
            <code>then</code>和<code>catch</code>函数及数组解构，区分正常和异常结果，封装公共处理函数。
          </p>
          <WebPrismEditor v-model="AwaitGracefulError" />
        </div>
      </section>
    </div>

    <div>
      <h4 id="AsyncAwaitLoop">
        <RouterLink to="#AsyncAwaitLoop" class="a-link">#</RouterLink>9、async和await循环中使用
      </h4>
      <section>
        <p>参考资料: <a target="_blank" rel="help" href="https://juejin.cn/post/6844903860079738887"
            class="a-navigation">如何在 JS
            循环中正确使用 async 与 await</a>
        </p>
        <div>
          <ul>
            <li>如果你想连续执行 <code>await</code>调用，请使用<code>for</code>循环(或者没有任何回调的循环)。</li>
            <li>永远不要和<code>forEach</code>一起使用<code>await</code>，而是使用<code>for</code>循环(或者没有任何回调的循环)。</li>
            <li>不要在<code>filter</code>和<code>reduce</code>中使用<code>await</code>，如果需要，先用<code>map</code>
              进一步处理，然后再使用<code>filter</code>和<code>reduce</code>进行处理。
            </li>
          </ul>
        </div>
      </section>
    </div>


  </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;



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

const PromiseThenReject = $builtIn(`
var onRejected = console.error.bind(console);
var promise = Promise.resolve();
promise
  .then(() => {
    var retPromise = new Promise(function (resolve, reject) {
      reject(new Error("this promise is rejected"));
    });
    return retPromise;
  })
  .catch(onRejected);
`)

const PromiseThenRejectTwo = $builtIn(`
var promise = Promise.resolve();
promise
  .then(function () {
    return (retPromise = Promise.reject(
      new Error("this promise is rejected")
    ));
  })
  .catch((err) => console.error("err", err));
`)

const PromiseRetValue = $builtIn(`
var p1 = new Promise((resolve, reject) => {
  reject("p1");
}).catch((err) => {
  console.error("err", err);
  return "p2";
});

setTimeout(() => {
  p1.then((res) => console.log(res));
}, 1000);
// 先打印出error 1
// 1秒钟以后打印出 P2
`)

const AsyncBasic = $builtIn(`
(function* () {
  var f1 = yield readFile("/etc/fstab");
  var f2 = yield readFile("/etc/shells");
  console.log(f1.toString());
})();
`)

const AsyncSugar = $builtIn(`
function f() {
  return Promise.resolve("TEST");
}

// asyncF is equivalent to f!
async function asyncF() {
  return "Test";
}
// console.log(f());
// console.log(asyncF());
`)

const AsyncSugarTwo = $builtIn(`
function f() {
  return Promise.reject("TEST");
}

// asyncF is equivalent to f!
async function asyncF() {
  throw "Test";
}
// console.log(f());
// console.log(asyncF());
`)

const AsyncReturnValue = $builtIn(`
const request = require("request");
async function f1() {
  return new Promise(function (resolve, reject) {
    request("https://www.baidu.com/", function (err, res, body) {
      resolve(body);
    });
  });
}
// 用then来拿到返回值
f1().then((res) => console.log(res));
// 用await来拿到返回值
(async function () {
  console.log(await f1());
})();
`)

const AsyncReturnCommonValue = $builtIn(`
async function f1 () {
    return 10;
}

console.log(f1());     // Promise {<resolved>: 10}
fn1().then(function (x) {
  console.log(x);      // 10
})
`)

const AsyncReturnErrorValue = $builtIn(`
async function f1() {
  throw new Error("ssss");
}
// 第一种
f1().then(
  (onFulfilled) => {},
  (onRejected) => console.log(onRejected)
);
// 第二种
f1().catch(function (e) {
  console.log(e);
});
`)
const AsyncNotReturnValue = $builtIn(`
var p1 = new Promise((resolve, reject) => {
  resolve();
});
p1.then((res) => console.log("p1", res));

async function p2() {
  await (1 + 1);
}
(async () => {
  console.log("p2", p2());
})();
`)

const AwaitListPromise = $builtIn(`
var asyncFunc1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("asyncFunc1");
    }, 1000);
  });
};
var asyncFunc2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("asyncFunc2");
    }, 1000);
  });
};

// 使用 .then 进行串联操作
function asyncF() {
  asyncFunc1()
    .then((res) => {
      console.log("res", res);
      return asyncFunc2();
    })
    .then((res2) => {
      console.log("res2", res2);
    });
}
asyncF();

// 使用 await 关键字
async function asyncF2() {
  let res = await asyncFunc1();
  let res2 = await asyncFunc2();
  console.log("res", res);
  console.log("res2", res2);
}
asyncF2();
`)

const AwaitParallelPromise = $builtIn(`
var asyncFunc1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("asyncFunc1");
  }, 1000);
});

var asyncFunc2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("asyncFunc2");
  }, 1000);
});

// 使用 .then 进行串联操作
function asyncF() {
  // [ res1, res2 ] 结构
  Promise.all([asyncFunc1, asyncFunc2]).then(([res1, res2]) => {
    console.log("asyncF", res1, res2);
  });
}
asyncF();

// 使用 await 关键字
async function asyncF2() {
  let [res1, res2] = await Promise.all([asyncFunc1, asyncFunc2]);
  console.log("asyncF2", res1, res2);
}
asyncF2();
`)

const AwaitEssence = $builtIn(`
// await写法
await foo();         
console.log("hello");

// .then写法
foo().then(() => {
    console.log("hello");
});
`)


const AwaitEssenceTwo = $builtIn(`
var p1 = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(6);
  }, 1000);
});

async function multipleRequestAsync() {
  console.log(3);
  let result = await p1;
  console.log(result);
  console.log(7);
}
console.log(2);
multipleRequestAsync();
console.log(4);
console.log(5);

// 1 2 3 4 5 6 7
`)

const AwaitTryCatch = $builtIn(`
(async () => {
  const _fetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("reject promise");
      }, 1000);
    });
  };

  try {
    let result = await _fetch();
    console.log("result", result);
  } catch (err) {
    console.log("err", err);
  }
})();
`)

const AwaitTryCatchTwo = $builtIn(`
try {
    let result = await fsData()        // 读取文件
    let result = await requestData()   // 网络请求
    let result = await readDb()        // 读取数据库
} catch (error) {
    // 不同的错误进行分类
}
`)

const AwaitThenCatch = $builtIn(`
(async () => {
  const _fetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("reject promise");
      }, 1000);
    });
  };

  let result = await _fetch()
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log("result", result);
})();
`)

const AwaitThenCatchTwo = $builtIn(`
const data = await fsData().then(data => data ).catch(err => // 文件读取错误的处理)
const data = await requestData().then(data => data ).catch(err => // 网络请求错误的处理)
const data = await readDb().then(data => data ).catch(err => // 数据库读写错误的处理)
`)

const AwaitGracefulError = $builtIn(`
(async () => {
  function handleError(err) {
    if (err !== null) {
      console.log("err", err);
      // 具体错误处理逻辑，Tip 还是？
    }
  }

  function handleData(data) {
    if (data !== null) {
      // 具体处理结果
    }
  }
  const _fetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("reject promise");
      }, 1000);
    });
  };

  const [err, data] = await _fetch()
    .then((data) => [null, data])
    .catch((err) => [err, null]);
  handleData(data);
  handleError(err);

  // 抽离成公共方法

  const awaitWrap = (promise) => {
    return promise.then((data) => [null, data]).catch((err) => [err, null]);
  };
  const [err1, data1] = await awaitWrap(_fetch());
  handleData(data1);
  handleError(err1);
})();
`)


</script>

<style lang='scss'>

</style>