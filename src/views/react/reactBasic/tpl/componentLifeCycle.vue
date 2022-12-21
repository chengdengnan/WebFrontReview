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
                <p class="c-h5">2. 组件更新阶段</p>
                <div class="ml-15">
                    <p class="c-h6">1) shouldComponentUpdate</p>
                    <div class="ml-15">
                        <WebPrismEditor v-model="ReactShouldComponentUpdate"></WebPrismEditor>
                        <p>
                            再说这个生命周期函数之前，来看两个问题：
                        <section>
                            <ul>
                                <li class="c-h7">
                                    setState 函数在任何情况下都会导致组件重新渲染吗？例如下面这种情况
                                    <WebPrismEditor v-model="ReactShouldComponentUpdateSetState"></WebPrismEditor>
                                </li>
                                <li class="c-h7">
                                    如果没有调用 setState，props 值也没有变化，是不是组件就不会重新渲染？
                                </li>
                            </ul>
                        </section>
                        </p>
                        <p class="mt-20">
                            第一个问题答案是<span class="red">会</span>，第二个问题如果父组件重新渲染时，不管传入的<code>props</code>有没有变化
                            ，都会引起子组件的重新渲染。
                        </p>
                        <p class="mt-20">
                            那么有没有什么方法解决在这两个场景下不让组件重新渲染进而提示性能呢？
                        </p>
                        <p>
                            这个时候<code>shouldComponentUpdate</code>登场了，这个生命周期函数是用来提升速度的，它是在重新渲染组件开始前触发的，默认返回
                            <code>true</code>，可以比较<code>this.props</code>和<code>nextProps</code>，<code>this.state</code>和
                            <code>nextState</code>值是否变化，来确认返回<code>true</code>或者<code>false</code>。当返回<code>false</code>时，
                            <span class="red">组件的更新过程停止</span>，后续的<code>render、componentDidUpdate</code>也不会被调用
                        </p>
                        <blockquote class="be-careful">
                            <span class="title">注意：</span>
                            <p>
                                添加<code>shouldComponentUpdate</code>方法时，不建议使用深度相等检查（如使用 <code>JSON.stringify</code>
                                ），因为深度
                                比较效率很低，很可能会比重新渲染组件效率还低。而且该方法维护比较困难，建议使用该方法会产生明显的性能提升时使用。
                            </p>
                        </blockquote>
                    </div>
                    <p class="c-h6">2) getSnapShotBeforeUpdate</p>
                    <div class="ml-15">
                        <WebPrismEditor v-model="ReactGetSnapshotBeforeUpdate"></WebPrismEditor>
                        <p>
                            这个方法在<code>render</code>之后，<code>componentDidMount</code>之前调用，有两个参数<code>prevProps</code>和
                            <code>prevState</code>，表示更新之前的<code>props</code>和<code>state</code>，这个函数必须要和<code>componentDidMount</code>
                            一起使用，并且要有一个返回值，默认是<code>null</code>，这个返回值作为第三个参数传给<code>componentDidUpdate</code>
                        </p>
                    </div>
                    <p class="c-h6">3) componentDidUpdate</p>
                    <div class="ml-15">
                        <WebPrismEditor v-model="ReactComponentDidUpdate"></WebPrismEditor>
                        <p>
                            <code>componentDidUpdate</code>在更新后会被立即调用，首次渲染不会执行此方法。该阶段通常进行以下操作：
                        <div>
                            <ul>
                                <li>当组件更新后，对 DOM 进行操作</li>
                                <li>如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当props1未发生变化时，
                                    则不会执行网络请求）</li>
                            </ul>
                        </div>
                        </p>
                        <p class="mt-20">
                            该方法有三个参数：
                        <div>
                            <ul>
                                <li>prevProps : 更新前的 props</li>
                                <li>prevState : 更新前的 state</li>
                                <li>snapshot : getSnapshotBeforeUpdate 生命周期的返回值</li>
                            </ul>
                        </div>
                        </p>
                    </div>
                </div>
                <p class="c-h5">3. 组件卸载阶段</p>
                <div class="ml-15">
                    <p>
                        卸载阶段只有一个生命周期函数，<code>componentWillUnmount</code>会在组件卸载及销毁之前直接调用。在此方法中执行一些必要的
                        清理操作：
                    <div>
                        <ul>
                            <li>清除timer，取消网络请求或清除</li>
                            <li>取消在 componentDidMount 中创建的订阅等</li>
                        </ul>
                    </div>
                    </p>
                    <p>这个生命周期在一个组件被卸载和销毁之前被调用，因此你不应该再这个方法中使用<code>setState</code>，因为组件一旦被
                        卸载，就不会再装载，也就不会重新渲染。</p>
                </div>
                <p class="c-h5">4. 错误处理阶段</p>
                <div class="ml-15">
                    <WebPrismEditor v-model="ReactComponentDidCatch"></WebPrismEditor>
                    <p>此生命周期在后代组件抛出错误后被调用。 它接收两个参数∶</p>
                    <ul>
                        <li>error：抛出的错误。</li>
                        <li>info：带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息</li>
                    </ul>
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
            <WebImage v-model="oldLifeCycle" height="500px" :preview-src-list="lifeCycleImageList" :initial-index="1">
            </WebImage>
            <p class="mt-20">
                被废弃的三个函数都是在<code>render</code>之前，因为<code>fber</code>的出现，很可能因为高优先级任务的出现而打断现有任务导致它们被执行
                多次。另外的一个原因则是，React 想约束使用者，好的框架能够让人不得已写出容易维护和扩展的代码，这一点又是从何谈起，可以从新增加以及废弃
                的生命周期分析入手。
            </p>
            <p class="c-h6">1) componentWillMount</p>
            <p class="indent">
                首先这个函数的功能完全可以使用<code>componentDidMount</code>和<code>constructor</code>代替，异步获取数据的情况上面已经说明了，
                而如果抛去异步获取数据，其余的则是初始化而已，这些功能都可以在<code>constructor</code>中执行。除此之外，如果在<code>componentWillMount</code>
                中订阅事件，但在服务端这并不会执行<code>componentWillUnmount</code>事件，也就是说服务端会导致内存泄漏，所以<code>componentWillMount</code>
                完全可以不使用，但使用者有时候难免因为各种各样的情况在<code>componentWillMount</code>中做一些操作，那么 React 为了约束开发者，干脆就
                抛弃了这个<code>API</code>。
            </p>
            <p class="c-h6">2) componentWillReceiveProps</p>
            <p class="indent">
                在老版本的 React 中，如果组件自身的某个<code>state</code>跟其<code>props</code>密切相关的话，一直都没有一种很优雅的处理方式去更新
                <code>state</code>，而是需要在<code>componentWillReceiveProps</code>中判断前后两个<code>props</code>是否相同，如果不同再将新的
                <code>props</code>更新到相应的<code>state</code>上去。这样做一来会破坏<code>state</code>的单一数据源，导致组件状态变得不可预测。
                另一方面也会增加组件的重绘次数。
            </p>
            <p class="indent">
                类似的也无需求也有很多，如一个可以横向滑动的列表，当前高亮的 Tab 显然隶属于自身的时，根据传入的某个值，直接定位到某个 Tab。为了解决这些问题，
                React 引入了一个新的生命周期：getDerivedStateFromProps。它有以下的优点：
            <div>
                <ul>
                    <li>静态方法，在这里不能使用this，也就是一个纯函数，开发者不能写出副作用的代码</li>
                    <li>开发者只能通过prevState而不是prevProps来做对比，保证了state和props之间的简单关系以及不需要处理第一次渲染时prevProps为空的情况</li>
                    <li>基于第一点，将状态变化（setState）和昂贵操作（tabChange）区分开，更加便于 render 和 commit 阶段操作或者说优化。 </li>
                </ul>
            </div>
            </p>
            <p class="c-h6">3) componentWillUpdate</p>
            <p class="indent">
                与<code>componentWillReceiveProps</code>类似，许多开发者也会在<code>componentWillUpdate</code>中根据<code>props</code>的变化去触发
                一些回调。单不论是<code>componentWillReceiveProps</code>还是<code>componentWillUpdate</code>，都有可能在一次更新中被调用多次，
                也就是说写在这里的回调函数也有可能会被调用多次，这显然是不可取的。与<code>componentDidMount</code>类似，<code>componentDidUpdate</code>
                不存在这样的问题，一次更新中<code>componentDidUpdate</code>只会被调用一次，所以将原本写在<code>componentWillUpdate</code>中的回调
                迁移至<code>componentDidUpdate</code>就可以解决这个问题。
            </p>
            <p class="indent">
                另外一种情况则是需要获取 DOM 元素状态，但是由于<code>fber</code>中，<code>render</code>可以打断，可能在<code>componentWillMount</code>
                中获取到的元素状态很可能与实际需要的不同，这个通常可以使用第二个新增的生命函数的解决
                <code>getSnapshotBeforeUpdate(prevProps, prevState)</code>
            </p>
        </section>
    </div>
    <div>
        <h4 id="ReactPerformanceOptimize">
            <RouterLink to="#ReactPerformanceOptimize" class="a-link">#</RouterLink>
            3、React 性能优化在哪个生命周期？它优化的原理是什么？
        </h4>
        <section>
            <p> React 的父级组件的<code>render</code>函数重新渲染会引起子组件的<code>render</code>方法的重新渲染。但是，有时候子组件的接收的父组件的数据
                没有变动。子组件<code>render</code>的执行会影响性能，这时就可以使用<code>shouldComponentUpdate</code>来解决这个问题。
            </p>
            使用方法如下：
            <WebPrismEditor v-model="ReactShouldComponentUpdatDemo"></WebPrismEditor>
            <p class="mt-20">
                <code>shouldComponentUpdate</code>提供了两个参数<code>nextProps</code>和<code>nextState</code>，表示下一次的<code>props</code>和
                <code>state</code>的值，当函数返回<code>false</code>时候，<code>render</code>方法不执行，组件也就不会渲染，返回<code>true</code>时
                ，组件照常渲染。此方法就是拿当前的<code>props</code>的值和下一次<code>props</code>进行对比，数据相等时，返回<code>false</code>，
                反之返回<code>true</code>。
            </p>
            <p class="mt-20">
                需要注意，在进行新旧对比的时候，是浅对比，也就是说如果比较的数据是引用数据类型，只要数据的引用的地址没变，即使内容变了，
                也会被判定为 <code>true</code> 。
            </p>
            <p>面对这个问题，可以使用如下方法进行解决：</p>
            <p>（1）使用setState改变数据之前，先采用ES6中assgin进行拷贝，但是assgin只深拷贝的数据的第一层，所以说不是最完美的解决办法：</p>
            <WebPrismEditor v-model="ReactShouldComponentUpdatDemo2"></WebPrismEditor>
            <p>（2）使用JSON.parse(JSON.stringfy())进行深拷贝，但是遇到数据为undefined和函数时就会错。</p>
            <WebPrismEditor v-model="ReactShouldComponentUpdatDemo3"></WebPrismEditor>

        </section>
    </div>
    <div>
        <h4 id="ReactNetworkRequest">
            <RouterLink to="#ReactNetworkRequest" class="a-link">#</RouterLink>
            4、React 中发起网络请求应该在哪个生命周期中进行，为什么？
        </h4>
        <section>
            <p>对于异步请求，最好放在componentDidMount中去操作，对于同步的状态改变，可以放在componentWillMount中，一般用的比较少。</p>
        </section>
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

const ReactShouldComponentUpdate = $builtIn(`shouldComponentUpdate(nextProps, nextState)`)

const ReactShouldComponentUpdateSetState = $builtIn(`this.setState({number: this.state.number})`)

const ReactGetSnapshotBeforeUpdate = $builtIn(`getSnapshotBeforeUpdate(prevProps, prevState)`)

const ReactComponentDidUpdate = $builtIn(`componentDidUpdate(prevProps, prevState, snapshot)`)

const ReactComponentDidCatch = $builtIn(`componentDidCatch(error, info)`)

const ReactShouldComponentUpdatDemo = $builtIn(`
shouldComponentUpdate(nexrProps) {
    if (this.props.num === nexrProps.num) {
        return false
    }
    return true;
}`)

const ReactShouldComponentUpdatDemo2 = $builtIn(`
const o2 = Object.assign({},this.state.obj)
    o2.student.count = '00000';
    this.setState({
        obj: o2,
    })`)

const ReactShouldComponentUpdatDemo3 = $builtIn(`
const o2 = JSON.parse(JSON.stringify(this.state.obj))
    o2.student.count = '00000';
    this.setState({
        obj: o2,
    })`)



</script>

<style lang='scss'>

</style>