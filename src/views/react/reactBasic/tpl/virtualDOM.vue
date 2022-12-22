<template>
    <h3 id="ReactVirtualDOM">
        <RouterLink to="#ReactVirtualDOM" class="a-link">#</RouterLink>
        2、虚拟 DOM
    </h3>
    <div>
        <h4 id="CreateVirtualDOM">
            <RouterLink to="#CreateVirtualDOM" class="a-link">#</RouterLink>
            1、虚拟DOM的两种创建方式
        </h4>
        <section>
            <div>
                <p class="c-h6">第一种：JS 的方式创建虚拟DOM(几乎不用,了解即可)</p>
                <WebPrismEditor v-model="JSCreateVirtualDOM"></WebPrismEditor>
            </div>
            <div>
                <p class="c-h6">第二种：JSX 的方式创建虚拟DOM</p>
                <p><code>JSX</code>可以使我们更便捷的去创建虚拟DOM，也可以说<code>JSX</code>创建虚拟DOM是原生
                    <code>JS</code>创建虚拟<code>DOM</code>的语法糖。
                </p>
                <WebPrismEditor v-model="JSXCreateVirtualDOM"></WebPrismEditor>
            </div>
        </section>
    </div>
    <div>
        <h4 id="VirtualDOMUnderstand">
            <RouterLink to="#VirtualDOMUnderstand" class="a-link">#</RouterLink>
            2、对虚拟DOM的理解？虚拟DOM主要做了什么？虚拟DOM本身是什么？
        </h4>
        <section>
            <div>
                <p class="indent">
                    从本质上说，<code>Virtual DOM</code>是一个<code>JavaScript</code>对象，通过对象的方式来表现
                    <code>DOM</code>结构。将页面的状态抽象为<code>JS</code>对象的形式，配合不同的渲染工具，是跨平台渲染
                    成为可能。通过事务处理机制，将多次<code>DOM</code>修改的结果一次性的更新到页面上，从而有效的减少页面
                    渲染的次数，减少修改<code>DOM</code>的重排重绘次数，提高渲染性能。
                </p>
                <p class="indent">
                    虚拟<code>DOM</code>就是对<code>DOM</code>的抽象，这个对象是更加轻量级的对<code>DOM</code>的描述。
                    它设计的最初目的，就是更好的跨平台，比如<code>node.js</code>就没有<code>DOM</code>。如果想实现
                    <code>SSR</code>，那么一个方式就是借助虚拟<code>DOM</code>，因为虚拟<code>DOM</code>本身是<code>js</code>
                    对象。在代码渲染到页面之前，<code>Vue</code>或<code>React</code>会把代码转换成一个对象（虚拟DOM）。以
                    对象的形式来描述真实的<code>DOM</code>结构，最终渲染到页面。在每次数据发生变化前，虚拟<code>DOM</code>都
                    会缓存一份，变化之时，现在的虚拟<code>DOM</code>会与缓存的虚拟<code>DOM</code>进行比较。在<code>Vue</code>
                    或者<code>React</code>内部封装了<code>Diff</code>算法，通过这个算法来进行比较，渲染时只针对有变化的
                    <code>DOM</code>进行修改，原先没有发生改变的通过原先的数据进行渲染。
                </p>
                <p class="indent">
                    另外现在前端框架的一个基本要求就是无需手动操作<code>DOM</code>，一方面是因为手动操作<code>DOM</code>无法
                    保证性能，多人协同的项目中如果<code>review</code>不严格，可能会有开发者写出性能较低的代码，另一方面
                    更重要的是省略手动<code>DOM</code>操作可以大大提高效率。
                </p>
            </div>
            <div>
                <p class="c-h6">
                    为什么要用 Virtual DOM：
                </p>
                <div>
                    <p class="s-indent c-h6">(1) 保证性能下限，在不进行手动优化的情况下，提供过得去的性能</p>
                    <p>
                        下面对比一下修改<code>DOM</code>时真实<code>DOM</code>操作和<code>Virtual DOM</code>操作的
                        过程，来看一下它们重排重绘的性能消耗：
                    </p>
                    <div>
                        <ul>
                            <li>
                                <span class="c-h7">真实DOM：</span>
                                生成 <code>HTML</code> 字符串 -> 重建所有的 <code>DOM</code> 元素
                            </li>
                            <li>
                                <span class="c-h7">Virtual DOM：</span>
                                生成<code>vNode</code> -> <code>DOM diff</code> -> 必要的<code>DOM</code>更新
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p class="s-indent c-h6">
                        (2) 跨平台
                    </p>
                    <p>
                        <code>Virtual DOM</code>本质上是<code>JavaScript</code>的对象，它可以很方便的跨平台操作，
                        比如服务器端渲染、uniapp等。
                    </p>
                </div>
            </div>
        </section>
    </div>
    <div>
        <h4 id="ReactDiff">
            <RouterLink to="#ReactDiff" class="a-link">#</RouterLink>
            3、React diff算法的原理是什么？
        </h4>
        <section>
            <WebImage v-model="reactDiff" :preview-src-list="reactDiffImageList" height="170px" :initial-index="0">
            </WebImage>

            <p>
                实际上，<code>diff</code> 算法探讨的就是虚拟 <code>DOM</code> 树发生变化后，生成 <code>DOM</code>
                树更新补丁的方式。它通过对比新旧两株虚拟 <code>DOM</code> 树的变更差异，
                将更新补丁作用于真实 <code>DOM</code> ，以最小成本完成视图更新。
            </p>
            <p class="c-h7">具体流程如下：</p>
            <div>
                <ul>
                    <li>真实的 <code>DOM</code> 首先会映射为虚拟 <code>DOM</code></li>
                    <li>
                        当虚拟<code>DOM</code>发生变化后，就会根据差异计算生成生成<code>patch</code>，这个
                        <code>patch</code>是一个结构化数据，内容包含了增加、更新、移除。
                    </li>
                    <li>
                        根据<code>patch</code>去更新真实的<code>DOM</code>，反馈到用户界面上。
                    </li>
                </ul>
            </div>
            <WebImage v-model="reactDiff2" :preview-src-list="reactDiffImageList" :initial-index="1"></WebImage>

            <p class="c-h6">待完善,请等候.....</p>
        </section>
    </div>
    <div>
        <h4 id="ReactKey">
            <RouterLink to="#ReactKey" class="a-link">#</RouterLink>
            4、React key是干嘛用的，为什么要加？key主要是解决哪一类问题的
        </h4>
        <section>
            <p class="indent">
                <code>keys</code>是<code>React</code>用于追踪那些列表中元素被修改、被添加或者被移除的辅助标识。
                在开发过程中，我们需要保证某个元素的<code>key</code>在同级元素中具有唯一性。
            </p>
            <p class="indent">
                在<code>React Diff</code>算法中<code>React</code>会借助元素的<code>key</code>值来判断该元素是新
                创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。此外，<code>React</code>还需要借助
                <code>key</code>值来判断元素与本地状态的关联关系。
            </p>
            <div class="mt-20">
                <p class="c-h7">用 <code>index</code> 作为<code>key</code>可能会引发的问题：</p>
                <ul>
                    <li>
                        若对数据进行：逆序添加、逆序删除等破坏顺序的操作：
                        <p class="ml-20">会产生没有必要的真实DOM更新 ===> 界面效果没问题，效率低。</p>
                    </li>
                    <li>
                        如果结构中还包含输入类的DOM：
                        <p class="ml-20">会产生错误DOM更新 ===> 界面有问题。</p>
                    </li>
                    <li>
                        注意：如果不存在对数据进行逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
                        使用index作为key是没有问题的。
                    </li>
                </ul>
            </div>
            <p class="c-h7 mt-20">注意事项：</p>
            <div>
                <ul>
                    <li>
                        <code>key</code>值一定要和具体的元素--对应
                    </li>
                    <li>
                        尽量不要用数组的<code>index</code>去作为<code>key</code>
                    </li>
                    <li>
                        不要在<code>render</code>的时候，用随机数或者其他操作给元素加上不稳定的<code>key</code>，
                        这样造成的性能开销比不加<code>key</code>的情况下更糟糕。
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <div>
        <h4 id="ActualDOM">
            <RouterLink to="#ActualDOM" class="a-link">#</RouterLink>
            5、虚拟DOM的引入与直接操作原生DOM相比，哪一个效率更高，为什么
        </h4>
        <section>
            <p class="indent">
                虚拟<code>DOM</code>相对原生的<code>DOM</code>不一定是效率更高，如果只修改一个按钮的文案，那么虚拟
                <code>DOM</code>的操作无论如何都不可能比真实的<code>DOM</code>操作更快。在首次渲染大量<code>DOM</code>
                时，由于多了一层虚拟<code>DOM</code>的计算，虚拟<code>DOM</code>也会比<code>innerHTML</code>插入慢。
                它能保证性能下限，在真实<code>DOM</code>操作的时候进行针对性优化时，还是更快的。所以要根据具体的场景
                进行探讨，不能以偏概全。
            </p>
            <p class="indent">
                在整个<code>DOM</code>操作的演化过程中，其实主要矛盾并不在于性能，而在于开发者写的爽不爽，在于
                <span class="c-h7">研发体验/研发效率</span>。虚拟<code>DOM</code>不是别的，正是前端开发们为了
                更好的研发体验和研发效率而创建出来的高阶产物。虚拟<code>DOM</code>并不一定能带来更好的性能，
                <code>React</code>官方也从来没有把虚拟<code>DOM</code>作为性能层面的卖点对外输出过。
            </p>
            <p class="red">
                虚拟<code>DOM</code>的优越之处在于，它能够提供更爽、更高效的研发模式(也就是函数式的 UI 编程方式)的同时，
                仍然保持一个还不错的性能。
            </p>
        </section>
    </div>
    <div>
        <h4 id="ReactDiffAndVueDiff">
            <RouterLink to="#ReactDiffAndVueDiff" class="a-link">#</RouterLink>
            6、React与Vue的diff算法有何不同？
        </h4>
        <section>
            <p class="indent">
                <code>Diff</code>算法是指生成更新补丁的方式，主要应用于虚拟<code>DOM</code>树变化后，更新真实<code>DOM</code>。
                所以<code>diff</code>算法一定存在这样一个过程：<span class="c-h7">
                    触发更新 --> 生成补丁 --> 应用补丁
                </span>
            </p>
            <p class="indent">
                <code>React</code>的<code>diff</code>算法，触发更新的时机主要在<code>state</code>变化与<code>hooks</code>
                调用之后。此时触发虚拟<code>DOM</code>树变更差异，采用了深度优先遍历算法。但传统的的遍历方式，效率更低。
                为了优化效率，采用了分治的方式。将单一节点的对比转换为了3种类型节点的对比，分别是树、组件及元素，以此提高效率。
            </p>
            <div>
                <ul>
                    <li>
                        <span class="c-h7">树对比：</span>
                        由于网页视图中较少有跨层级节点移动，两株虚拟<code>DOM</code>树只对同一层级的节点进行比较。
                    </li>
                    <li>
                        <span class="c-h7">组件对比：</span>
                        如果组件是同一类型，则进行树对比，如果不是则直接放入到补丁中。
                    </li>
                    <li>
                        <span class="c-h7">元素对比：</span>
                        主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实<code>DOM</code>的裁剪操作。
                    </li>
                </ul>
            </div>
            <p class="indent">
                以上是经典的<code>React Diff</code>算法内容。自 <code>React 16</code>起，引入了<code>Fiber</code>架构。
                为了使整个更新过程可随时暂停恢复，节点和树分别采用了<code>FiberNode</code>和<code>FiberTree</code>进行了
                重构。<code>FiberNode</code>使用了双链表的结构，可以直接找到兄弟节点与子节点。整个更新过程由
                <code>current</code>与<code>workInProgress</code>两株树双缓冲完成。<code>workInProgress</code>更新
                完成后，再通过修改<code>current</code>相关指针指向新节点。
            </p>
            <p class="indent c-h7">
                <code>Vue</code>的整体<code>diff</code>策略与<code>React</code>对齐，虽然缺乏时间切片能力，但这并不意味着
                <code>Vue</code>的性能更差，因为在<code>Vue3</code>初期引入过后期因为收益不高移除掉了。除了高帧率动画，
                在<code>Vue</code>中其他的场景几乎都可以使用防抖和节流去提高响应性能。
            </p>
        </section>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance, ref } from "vue"

const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


const reactDiff = require('@/assets/react/reactDiffing.jpg');
const reactDiff2 = require('@/assets/react/reactDiffing2.jpg');
const reactDiffImageList = ref([
    require('@/assets/react/reactDiffing.jpg'),
    require('@/assets/react/reactDiffing2.jpg')
])

const JSCreateVirtualDOM = $builtIn(`
<div id="container2"></div>

<!-- 使用 js 创建虚拟 DOM -->
// 1.create virtual DOM
const virtualDOM2 = React.createElement(
  "h1",
  {},
  React.createElement("span", { id: "title" }, "Hello world!")
);
// 2.render virtual DOM
ReactDOM.render(virtualDOM2, document.getElementById("container2"));
`)

const JSXCreateVirtualDOM = $builtIn(`
<div id="container"></div>

<!-- 使用jsx 创建虚拟 DOM ( script 需要加上 type="text/babel")-->
// 1.create virtual DOM
const virtualDOM = (
  <h1>
    <span id="title">Hello world!</span>
  </h1>
);
// 2.render virtual DOM
ReactDOM.render(virtualDOM, document.getElementById("container"));
`)


</script>

<style lang='scss'>

</style>