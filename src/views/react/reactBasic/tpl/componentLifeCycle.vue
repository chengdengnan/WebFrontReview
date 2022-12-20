<template>
    <h3 id="ReactLifeCycle">
        <RouterLink to="#ReactLifeCycle" class="a-link">#</RouterLink>
        4、React 生命周期
    </h3>
    <div>
        <h4 id="ReactThouseLifeCycle">
            <RouterLink to="#ReactThouseLifeCycle" class="a-link">#</RouterLink>
            1、React 组件生命周期有哪些？
        </h4>
        <section>
            <blockquote class="be-careful">
                <p class="title">注意：</p>
                <div>
                    此处只讲述 React 版本 >= 16.4版本的生命周期，下一节会讲述到 React 曾废弃了那些声明周期
                    ，以及废弃原因。
                </div>
            </blockquote>
            <div>
                <p>React 通常将生命周期( <span class="red">新</span> )分为三个阶段：</p>
                <ul>
                    <li>
                        1. 挂载阶段：由ReactDOM.render()触发 --- 初次渲染
                        <div type="cricle">
                            <ul>
                                <li><code>constructor()</code></li>
                                <li>
                                    <code class="red">getDerivedStateFromProps</code>
                                </li>
                                <li><code>render()</code></li>
                                <li><code>componentDidMount()</code> =====> 常用</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        2. 更新阶段：由组件内部this.setState() | 父组件render触发 | this.forceUpdate()触发
                        <div type="cricle">
                            <ul>
                                <li>
                                    <code class="red">getDerivedStateFromProps</code>
                                </li>
                                <li><code>shouldComponentUpdate()</code></li>
                                <li><code>render()</code></li>
                                <li><code class="red">getSnapshotBeforeUpdate</code></li>
                                <li><code>componentDidUpdate()</code></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        3. 卸载阶段：由ReactDOM.unmountComponentAtNode()触发
                        <div type="cricle">
                            <ul>
                                <li><code>componentWillUnmount</code> =====> 常用</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <WebImage v-model="newLifeCycle" :preview-src-list="lifeCycleImageList" :initial-index="0"></WebImage>
            <div>
                <p class="c-h5">1. 组件挂载阶段</p>
                <div class="ml-15">
                    <p class="c-h6">1) constructor</p>
                    <div class="ml-15">
                        <p>
                            组件的构造函数，第一个被执行，若没有显式定义它，会有一个默认的构造函数，但若显式的定义了
                            构造函数，我们必须在构造函数中执行<code>super(props)</code>，否则无法在构造函数中拿到
                            <code>this</code>
                        </p>
                        <p class="mt-20">
                            如果不初始化<code>state</code>或不进行方法绑定，则不需要为<code>React</code>组件实现
                            <code>constructor</code>
                        </p>
                        <p class="mt-20">
                            <code>constructor</code>中通常只做两件事：
                        <ul>
                            <li>初始化组件的<code>state</code></li>
                            <li>给事件处理方法绑定<code>this</code></li>
                        </ul>
                        </p>
                        <WebPrismEditor v-model="ReactConstructor"></WebPrismEditor>
                    </div>
                    <p class="c-h6">2) getDerivedStateFromProps</p>
                    <div class="ml-15">
                        <WebPrismEditor v-model="ReactGetDerivedStateFromProps"></WebPrismEditor>
                        <p>
                            这是个静态方法，所以不能在这个函数使用里使用<code>this</code>，有两个参数
                            <code>props</code>和<code>state</code>，分别指接收到的新参数和当前组件的
                            <code>state</code>对象，这个函数会返回一个对象用来更新当前的<code>state</code>
                            对象，如果不需要更新可以返回<code>null</code>
                        </p>
                        <p class="mt-20">
                            该函数会在挂载时，接收到新的<code>props</code>或者调用了<code>setState</code>和
                            <code>forceUpdate</code>时被调用。如当接受到新的属性想修改<code>state</code>，就可以使用。
                        </p>
                        <p class="mt-20">
                            此方法适合用于
                            <navigationBlank v-model="ReactDerivedLink">
                                罕见的用例
                            </navigationBlank>
                            即 state 的值在任何时候都取决于 props。例如，实现
                            <code>{{ '<Transition>' }}</code> 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。
                        </p>
                    </div>
                    <p class="c-h6">3) render</p>
                    <div class="ml-15">
                        <p>
                            <code>render</code>是<code>React</code>中最核心的方法，一个组件中必须要有这个方法，它会根据状态<code>state</code>和
                            属性<code>props</code>渲染组件。这个函数只做一件事，就是返回需要渲染的内容，所以不要在这个函数内做其他业务逻辑，通常
                            调用该方法会返回以下类型中的一个：
                        <ul>
                            <li><span class="c-h7">React 元素：</span>这里包含原生的 DOM 以及 React 组件</li>
                            <li><span class="c-h7">数组和 Fragment（片段）：</span>可以返回多个元素</li>
                            <li><span class="c-h7">Portals（插槽）：</span>可以将子元素渲染到不同 DOM 子树中</li>
                            <li><span class="c-h7">字符串和数字：</span>被渲染成 DOM 中的 text 节点</li>
                            <li><span class="c-h7">布尔值或 null：</span>不渲染任何内容</li>
                        </ul>
                        </p>
                    </div>
                    <p class="c-h6">4) componentDidMount</p>
                    <div class="ml-15">
                        <p> <code>componentDidMount() </code> 会在组件挂载后（插入 DOM 树中）立即调用。该阶段通常进行以下操作：</p>
                        <ul>
                            <li>执行依赖于 DOM 的操作</li>
                            <li>发送网络请求（官方建议）</li>
                            <li>添加订阅消息（会在componentWillUnmount取消订阅）</li>
                        </ul>
                        <p class="mt-20">
                            如果在<code>componentDidMont</code>中调用<code>setState</code>，就会触发一次额外的渲染，多调用一次<code>render</code>
                            函数，由于它是在浏览器刷新屏幕前执行的，所以用户对此是没有感知的，但是我们应当避免这样使用，这样会带来一定的性能问题。
                            尽量是在<code>constructor</code>中初始化<code>state</code>对象。
                        </p>
                        <WebPrismEditor v-model="ReactComponentDidMount"></WebPrismEditor>

                    </div>
                </div>
                <div>
                    <p class="c-h5">2. 组件更新阶段</p>
                    <div>
                        <p class="c-h6">1) shouldComponentUpdate</p>
                    </div>
                    <div>
                        <p class="c-h6">2) getSnapShotBeforeUpdate</p>
                    </div>
                    <div>
                        <p class="c-h6">3) componentDidUpdate</p>
                    </div>
                </div>
                <div>
                    <p class="c-h5">3. 组件卸载阶段</p>
                </div>
                <div>
                    <p class="c-h5">4. 错误处理阶段</p>
                </div>
            </div>
        </section>
    </div>
    <div>
        <h4 id="ReactDiscardLifeCycle">
            <RouterLink to="#ReactDiscardLifeCycle" class="a-link">#</RouterLink>
            2、React废弃的生命周期
        </h4>

        <section>
            <div>
                <p class="c-h6">生命周期的三个阶段( <span class="red">旧</span> )</p>
                <div>
                    <ul>
                        <li>
                            1. 挂载阶段：由ReactDOM.render()触发 --- 初次渲染
                            <div type="cricle">
                                <ul>
                                    <li><code>constructor()</code></li>
                                    <li>
                                        <code>componentWillMount()</code>
                                        <div>
                                            <ul type="square">
                                                <li>
                                                    <code>componentWillMount</code> ：React16之前写法
                                                </li>
                                                <li>
                                                    <code>UNSAFE_componentWillMount</code>
                                                    ：React16 之后的写法，因为即将废弃
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><code>render()</code></li>
                                    <li><code>componentDidMount()</code> =====> 常用</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            2. 更新阶段：由组件内部this.setState() | 父组件render触发 | this.forceUpdate()触发
                            <div type="cricle">
                                <ul>
                                    <li>
                                        <code>componentWillReceiveProps()</code>
                                        <div>
                                            <ul type="square">
                                                <li>
                                                    <code>componentWillReceiveProps</code> ：React16之前写法
                                                </li>
                                                <li>
                                                    <code>UNSAFE_componentWillReceiveProps</code>
                                                    ：React16 之后的写法，因为即将废弃
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><code>shouldComponentUpdate()</code></li>
                                    <li>
                                        <code>componentWillUpdate()</code>
                                        <div>
                                            <ul type="square">
                                                <li>
                                                    <code>componentWillUpdate</code> ：React16之前写法
                                                </li>
                                                <li>
                                                    <code>UNSAFE_componentWillUpdate</code>
                                                    ：React16 之后的写法，因为即将废弃
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><code>render()</code></li>
                                    <li><code>componentDidUpdate()</code></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            3. 卸载阶段：由ReactDOM.unmountComponentAtNode()触发
                            <div type="cricle">
                                <ul>
                                    <li><code>componentWillUnmount</code> =====> 常用</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <WebImage v-model="oldLifeCycle" height="500px" :preview-src-list="lifeCycleImageList" :initial-index="1"></WebImage>

        </section>
    </div>
    <div>
        <h4 id="ReactPerformanceOptimize">
            <RouterLink to="#ReactPerformanceOptimize" class="a-link">#</RouterLink>
            3、React 性能优化在哪个生命周期？它优化的原理是什么？
        </h4>
    </div>
</template>

<script lang='ts' setup >
// component life cycle -> 组件生命周期
import { getCurrentInstance, ref } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;
const newLifeCycle = require('@/assets/reactLifeCycle/newLifeCycle.jpg');
const oldLifeCycle = require('@/assets/reactLifeCycle/oldLifeCycle.jpg')
const lifeCycleImageList = ref([
    require("@/assets/reactLifeCycle/newLifeCycle.jpg"),
    require("@/assets/reactLifeCycle/oldLifeCycle.jpg"),
])
const ReactDerivedLink = ref<String>('https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state')

const ReactConstructor = $builtIn(`
constructor(props) {
  super(props);
  this.state = {
    isHot: false,
  };
  //解决 handleClick 中的 this 问题
  this.handleClick = this.handleClick.bind(this);
}`)

const ReactGetDerivedStateFromProps = $builtIn(`static getDerivedStateFromProps(props, state)`)

const ReactComponentDidMount = $builtIn(`
class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount () {
    this.setState({
      counter: 1
    })
  }
  render ()  {
    return (
      <div className="counter">
        counter值: { this.state.counter }
      </div>
    )
  }
}`)


</script>

<style lang='scss'>

</style>