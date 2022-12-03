<template>
    <h3 id="ReactOverview">
        <RouterLink to="#ReactOverview" class="a-link">#</RouterLink>
        1、综述
    </h3>

    <div>
        <h4 id="ReactVersion">
            <RouterLink to="#ReactVersion" class="a-link">#</RouterLink>1、react 简史及版本
        </h4>
        <section>
            <div style="width: 80%;">
                <p>用于构建用户界面的 JavaScript 库,是一个将数据渲染为 HTML 视图的开源 JavaScript 库。</p>
                <p class="right">--- 摘自React官网</p>
            </div>
            <p class="mt-15">
                <el-timeline>
                    <el-timeline-item timestamp="2011" placement="top">
                        起初由 Facebook 软件工程师 Jordan Wakke 创建。于 2011 年部署于 Facebook 的 newsfeed。
                    </el-timeline-item>
                    <el-timeline-item timestamp="2012" placement="top">
                        随后在 2012 年部署于 Instagram
                    </el-timeline-item>
                    <el-timeline-item timestamp="2013" placement="top">
                        然后于 2013 年 5 月宣布开源
                    </el-timeline-item>
                    <el-timeline-item timestamp="2015" placement="top">
                        2015年发布v0.14.0版本：拆分react package into two，react and react-dom
                    </el-timeline-item>
                    <el-timeline-item timestamp="2016" placement="top">
                        2016年发布v15.0版本：虚拟dom的diff操作同步执行
                    </el-timeline-item>
                    <el-timeline-item timestamp="2017" placement="top">
                        2017年发布React v16.0版本：使用fiber架构(分片)，小于ie11需使用polyfill
                    </el-timeline-item>
                    <el-timeline-item timestamp="2017-react v16.2.0" placement="top">
                        react v16.2.0（2017年）：增加Fragment组件
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018-react V16.3.0" placement="top">
                        react V16.3.0（2018年）：增加主要的api，React.createRef()、React.forwardRef()
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018-V16.6.0" placement="top">
                        react V16.6.0（2018年）：增加主要的api，React.memo()、React.lazy()
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018-V16.8.0" placement="top">
                        react V16.8.0（2019年）：增加React Hooks，用来解决状态逻辑复用问题，且不会产生 JSX 嵌套地狱
                    </el-timeline-item>
                    <el-timeline-item timestamp="2020-V17.0.0" placement="top">
                        2020年发布React v17.0版本：引入渐进式升级
                    </el-timeline-item>
                    <el-timeline-item timestamp="2022-V18.0.0" placement="top">
                        2022年发布React v18.0版本：引入useId 、useTransition 、useDeferredValue
                        、useSyncExternalStore 、useInsertionEffect 等
                    </el-timeline-item>
                </el-timeline>
            </p>

        </section>
    </div>
    <div>
        <h4 id="ReactEcology">
            <RouterLink to="#ReactEcology" class="a-link">#</RouterLink>2、react 生态
        </h4>
        <section>
            <div>
                <ul>
                    <li>
                        脚手架/框架
                        <div>
                            <ul type="cricle">
                                <li>
                                    umi：可插拔的企业级 react 应用框架
                                </li>
                                <li>
                                    create react app：官方支持的创建 react 单页应用程序的方法
                                </li>
                                <li>
                                    Nextjs：SSR框架
                                </li>
                                <li>
                                    React-vr：vr框架，适用于展厅、房屋设计
                                </li>
                                <li>
                                    Reactxp：多端框架
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        组件库
                        <div>
                            <ul type="cricle">
                                <li>
                                    ant Design系列：pc、mobile，引入Ant Design设计概念
                                </li>
                                <li>
                                    Material-UI：实现了谷歌Material Design设计规范，世界流行界面
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        工具类
                        <div>
                            <ul type="cricle">
                                <li>
                                    Redux：遵循函数式编程思想的状态管理插件
                                </li>
                                <li>
                                    Mobx：面向对象变迁和响应式编程的状态管理插件
                                </li>
                                <li>
                                    Immutable-js：解决javasript Immutable Data的问题
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        跨端类
                        <div>
                            <ul type="cricle">
                                <li>
                                    Remax：阿里的React跨端框架，目前支持支付宝、微信、字节小程序
                                </li>
                                <li>
                                    Taro：类React跨端框架，支持主流小程序及React Native
                                </li>
                                <li>
                                    React Native：js编写原生的React框架
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        其他
                        <div>
                            <ul type="cricle">
                                <li>
                                    react-window和react-virtualized：虚拟滚动库，提供可服用组件，
                                    用于展示列表、网络和表格数据。
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script lang='ts' setup >
// overview 概述;纵览;概论;概况 ->综述
import { ref } from "vue"
import { getCurrentInstance } from "vue"
const currentInstance = getCurrentInstance();
const { $builtIn } = currentInstance?.appContext.config.globalProperties as any;

</script>

<style lang='scss'>

</style>