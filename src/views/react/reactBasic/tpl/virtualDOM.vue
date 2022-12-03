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
        </section>
    </div>
    <div>
        <h4 id="ReactKey">
            <RouterLink to="#ReactKey" class="a-link">#</RouterLink>
            4、React key是干嘛用的，为什么要加？key主要是解决哪一类问题的
        </h4>
    </div>
    <div>
        <h4 id="ActualDOM">
            <RouterLink to="#ActualDOM" class="a-link">#</RouterLink>
            5、虚拟DOM的引入与直接操作原生DOM相比，哪一个效率更高，为什么
        </h4>
    </div>
    <div>
        <h4 id="ReactDiffAndVueDiff">
            <RouterLink to="#ReactDiffAndVueDiff" class="a-link">#</RouterLink>
            6、React与Vue的diff算法有何不同？
        </h4>
    </div>
</template>

<script lang='ts' setup >
import { getCurrentInstance } from "vue"

const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;


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