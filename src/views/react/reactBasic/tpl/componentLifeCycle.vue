<template>
    <h3 id="ReactLifeCycle">
        <RouterLink to="#ReactLifeCycle" class="a-link">#</RouterLink>
        4、React 生命周期
    </h3>
    <div>
        <section>
            <div>
                <p class="c-h6">生命周期的三个阶段( <span class="red">旧</span> )</p>
                <div>
                    <ul>
                        <li>
                            1. 初始化阶段：由ReactDOM.render()触发 --- 初次渲染
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
            <div>
                <p class="c-h6">生命周期的三个阶段( <span class="red">新</span> )</p>
                <div>
                    <ul>
                        <li>
                            1. 初始化阶段：由ReactDOM.render()触发 --- 初次渲染
                            <div type="cricle">
                                <ul>
                                    <li><code>constructor()</code></li>
                                    <li>
                                        <code class="red">getDerivedStateFromProps()</code>
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
                                        <code class="red">getDerivedStateFromProps()</code>
                                    </li>
                                    <li><code>shouldComponentUpdate()</code></li>
                                    <li><code>render()</code></li>
                                    <li><code class="red">getSnapshotBeforeUpdate()</code></li>
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
        </section>
    </div>
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
                <div>
                    <p class="c-h5">1. 组件挂载阶段</p>
                    <div>
                        <p class="c-h6">1) constructor</p>
                    </div>
                    <div>
                        <p class="c-h6">2) getDerivedStateFromProps</p>
                    </div>
                    <div>
                        <p class="c-h6">3) render</p>
                    </div>
                    <div>
                        <p class="c-h6">4) componentDidMount</p>
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
    </div>
    <div>
        <h4 id="ReactNewLifeCycle">
            <RouterLink to="#ReactNewLifeCycle" class="a-link">#</RouterLink>
            3、React新增的生命周期
        </h4>
    </div>
    <div>
        <h4 id="ReactNewLifeAndOldLife">
            <RouterLink to="#ReactNewLifeAndOldLife" class="a-link">#</RouterLink>
            4、对比新旧生命周期
        </h4>
    </div>
    <div>
        <h4 id="ReactPerformanceOptimize">
            <RouterLink to="#ReactPerformanceOptimize" class="a-link">#</RouterLink>
            5、React 性能优化在哪个生命周期？它优化的原理是什么？
        </h4>
    </div>
</template>

<script lang='ts' setup >
// component life cycle -> 组件生命周期
import { getCurrentInstance, ref } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

</script>

<style lang='scss'>

</style>