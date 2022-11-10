import { Router, RouteRecordRaw } from 'vue-router';
import Layout from "@/layout/index.vue";

const javaScript: Array<RouteRecordRaw> = [
    {
        path: '/jsBasic',
        component: Layout,
        redirect: '/jsBasic/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/jsBasic/index.vue"),
                name: 'JsBasic',
                meta: { title: 'Js Basic' }
            }
        ]
    },
    {
        path: '/orientObject',
        component: Layout,
        redirect: '/orientObject/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/orientObject/index.vue"),
                name: 'OrientObject',
                meta: { title: 'Orient Object' }
            }
        ]
    },
    {
        path: '/promiseApplication',
        component: Layout,
        redirect: '/promiseApplication/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/promiseApplication/index.vue"),
                name: 'PromiseApplication',
                meta: { title: 'Promise Application' }
            }
        ]
    },
    {
        path: '/browserDetail',
        component: Layout,
        redirect: '/browserDetail/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/browserDetail/index.vue"),
                name: 'BrowserDetail',
                meta: { title: 'Browser Detail' }
            }
        ]
    },
    {
        path: '/esAdvance',
        component: Layout,
        redirect: '/esAdvance/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/esAdvance/index.vue"),
                name: 'EsAdvance',
                meta: { title: 'Es Advance' }
            }
        ]
    },
    {
        path: '/javaScriptPerformance',
        component: Layout,
        redirect: '/javaScriptPerformance/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/javaScriptPerformance/index.vue"),
                name: 'JavaScriptPerformance',
                meta: { title: 'JavaScript Performance' }
            }
        ]
    },
    {
        path: '/functionProgram',
        component: Layout,
        redirect: '/functionProgram/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/functionProgram/index.vue"),
                name: 'FunctionProgram',
                meta: { title: 'Function Program' }
            }
        ]
    },
    {
        path: '/designMode',
        component: Layout,
        redirect: '/designMode/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/designMode/index.vue"),
                name: 'DesignMode',
                meta: { title: 'Design Mode' }
            }
        ]
    },
    {
        path: '/tsFirst',
        component: Layout,
        redirect: '/tsFirst/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/tsFirst/index.vue"),
                name: 'TsFirst',
                meta: { title: 'Ts First' }
            }
        ]
    },
    {
        path: '/tsBasic',
        component: Layout,
        redirect: '/tsBasic/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/tsBasic/index.vue"),
                name: 'TsBasic',
                meta: { title: 'Ts Basic' }
            }
        ]
    },
    {
        path: '/tsProject',
        component: Layout,
        redirect: '/tsProject/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/javaScript/tsProject/index.vue"),
                name: 'TsProject',
                meta: { title: 'Ts Project' }
            }
        ]
    },
];
const vue: Array<RouteRecordRaw> = [
    {
        path: '/vue2Basic',
        component: Layout,
        redirect: '/vue2Basic/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vue2Basic/index.vue"),
                name: 'Vue2Basic',
                meta: { title: 'Vue2 Basic' }
            }
        ]
    },
    {
        path: '/vue2Advance',
        component: Layout,
        redirect: '/vue2Advance/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vue2Advance/index.vue"),
                name: 'Vue2Advance',
                meta: { title: 'Vue2 Advance' }
            }
        ]
    },
    {
        path: '/vuex',
        component: Layout,
        redirect: '/vuex/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vuex/index.vue"),
                name: 'Vuex',
                meta: { title: 'vuex' }
            }
        ]
    },
    {
        path: '/vueCli',
        component: Layout,
        redirect: '/vueCli/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vueCli/index.vue"),
                name: 'VueCli',
                meta: { title: 'vue-cli' }
            }
        ]
    },
    {
        path: '/vueRouter',
        component: Layout,
        redirect: '/vueRouter/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vueRouter/index.vue"),
                name: 'VueRouter',
                meta: { title: 'vue-router' }
            }
        ]
    },
    {
        path: '/vueLoader',
        component: Layout,
        redirect: '/vueLoader/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vueLoader/index.vue"),
                name: 'vueLoader',
                meta: { title: 'vue-loader' }
            }
        ]
    },
    {
        path: '/vueSsr',
        component: Layout,
        redirect: '/vueSsr/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vueSsr/index.vue"),
                name: 'VueSsr',
                meta: { title: 'vue-ssr' }
            }
        ]
    },
    {
        path: '/vueI18n',
        component: Layout,
        redirect: '/vueI18n/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vueI18n/index.vue"),
                name: 'vueI18n',
                meta: { title: 'vue-i18n' }
            }
        ]
    },
    {
        path: '/lifeCycle',
        component: Layout,
        redirect: '/lifeCycle/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/lifeCycle/index.vue"),
                name: 'LifeCycle',
                meta: { title: 'Life Cycle' }
            }
        ]
    },
    {
        path: '/definepropertyTheory',
        component: Layout,
        redirect: '/definepropertyTheory/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/definepropertyTheory/index.vue"),
                name: 'DefinepropertyTheory',
                meta: { title: 'Defineproperty Theory' }
            }
        ]
    },
    {
        path: '/diffTheory',
        component: Layout,
        redirect: '/diffTheory/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/diffTheory/index.vue"),
                name: 'DiffTheory',
                meta: { title: 'Diff Theory' }
            }
        ]
    },
    {
        path: '/compileTheory',
        component: Layout,
        redirect: '/compileTheory/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/compileTheory/index.vue"),
                name: 'CompileTheory',
                meta: { title: 'Compile Theory' }
            }
        ]
    },
    {
        path: '/vueProject',
        component: Layout,
        redirect: '/vueProject/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/vue/vueProject/index.vue"),
                name: 'VueProject',
                meta: { title: 'Vue Project' }
            }
        ]
    },
]
const react: Array<RouteRecordRaw> = [
    {
        path: '/reactBasic',
        component: Layout,
        redirect: '/reactBasic/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactBasic/index.vue"),
                name: 'ReactBasic',
                meta: { title: 'React Basic' }
            }
        ]
    },
    {
        path: '/reactAdvance',
        component: Layout,
        redirect: '/reactAdvance/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactAdvance/index.vue"),
                name: 'ReactAdvance',
                meta: { title: 'React Advance' }
            }
        ]
    },
    {
        path: '/reactRouter',
        component: Layout,
        redirect: '/reactRouter/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactRouter/index.vue"),
                name: 'ReactRouter',
                meta: { title: 'React Router' }
            }
        ]
    },
    {
        path: '/reactStatusManage',
        component: Layout,
        redirect: '/reactStatusManage/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactStatusManage/index.vue"),
                name: 'ReactStatusManage',
                meta: { title: 'React Status Manage' }
            }
        ]
    },
    {
        path: '/reactIsomorphism',
        component: Layout,
        redirect: '/reactIsomorphism/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactIsomorphism/index.vue"),
                name: 'ReactIsomorphism',
                meta: { title: 'React Isomorphism' }
            }
        ]
    },
    {
        path: '/reactComponent',
        component: Layout,
        redirect: '/reactComponent/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactComponent/index.vue"),
                name: 'ReactComponent',
                meta: { title: 'React Component' }
            }
        ]
    },
    {
        path: '/reactSourceCode',
        component: Layout,
        redirect: '/reactSourceCode/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactSourceCode/index.vue"),
                name: 'ReactSourceCode',
                meta: { title: 'React Source Code' }
            }
        ]
    },
    {
        path: '/reduxMobox',
        component: Layout,
        redirect: '/reduxMobox/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reduxMobox/index.vue"),
                name: 'ReduxMobox',
                meta: { title: 'redux & mobox' }
            }
        ]
    },
    {
        path: '/reactTs',
        component: Layout,
        redirect: '/reactTs/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactTs/index.vue"),
                name: 'ReactTs',
                meta: { title: 'react-ts实战' }
            }
        ]
    },
    {
        path: '/reactProblem',
        component: Layout,
        redirect: '/reactProblem/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/react/reactProblem/index.vue"),
                name: 'reactProblem',
                meta: { title: 'react问题整理' }
            }
        ]
    },
]
const engineer: Array<RouteRecordRaw> = [
    {
        path: '/modulesStandard',
        component: Layout,
        redirect: '/modulesStandard/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/modulesStandard/index.vue"),
                name: 'ModulesStandard',
                meta: { title: 'Modules Standard' }
            }
        ]
    },
    {
        path: '/webEngineerDetail',
        component: Layout,
        redirect: '/webEngineerDetail/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/webEngineerDetail/index.vue"),
                name: 'WebEngineerDetail',
                meta: { title: 'Web Engineer Detail' }
            }
        ]
    },
    {
        path: '/modulesWebpack',
        component: Layout,
        redirect: '/modulesWebpack/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/modulesWebpack/index.vue"),
                name: 'ModulesWebpack',
                meta: { title: 'Modules Webpack' }
            }
        ]
    },
    {
        path: '/babelDetail',
        component: Layout,
        redirect: '/babelDetail/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/babelDetail/index.vue"),
                name: 'BabelDetail',
                meta: { title: 'Babel Detail' }
            }
        ]
    },
    {
        path: '/automationStructure',
        component: Layout,
        redirect: '/automationStructure/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/automationStructure/index.vue"),
                name: 'AutomationStructure',
                meta: { title: 'Automation Structure' }
            }
        ]
    },
    {
        path: '/automationTest',
        component: Layout,
        redirect: '/automationTest/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/automationTest/index.vue"),
                name: 'AutomationTest',
                meta: { title: 'Automation Test' }
            }
        ]
    },
    {
        path: '/automationDeploy',
        component: Layout,
        redirect: '/automationDeploy/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/automationDeploy/index.vue"),
                name: 'AutomationDeploy',
                meta: { title: 'Automation Deploy' }
            }
        ]
    },
    {
        path: '/webAST',
        component: Layout,
        redirect: '/webAST/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/webAST/index.vue"),
                name: 'WebAST',
                meta: { title: 'Web AST' }
            }
        ]
    },
    {
        path: '/tinyWeb',
        component: Layout,
        redirect: '/tinyWeb/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/tinyWeb/index.vue"),
                name: 'TinyWeb',
                meta: { title: 'Tiny Web' }
            }
        ]
    },
    {
        path: '/engineerScheme',
        component: Layout,
        redirect: '/engineerScheme/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/engineer/engineerScheme/index.vue"),
                name: 'EngineerScheme',
                meta: { title: 'Engineer Scheme' }
            }
        ]
    },
]
const nodejs: Array<RouteRecordRaw> = [
    {
        path: '/nodejsBasic',
        component: Layout,
        redirect: '/nodejsBasic/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/nodejs/nodejsBasic/index.vue"),
                name: 'NodejsBasic',
                meta: { title: 'Nodejs Basic' }
            }
        ]
    },
    {
        path: '/nodejsTheory',
        component: Layout,
        redirect: '/nodejsTheory/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/nodejs/nodejsTheory/index.vue"),
                name: 'NodejsTheory',
                meta: { title: 'nodejs基本原理' }// EventLoop / Buffer / Stream / Global
            }
        ]
    },
    {
        path: '/nodejsFrame',
        component: Layout,
        redirect: '/nodejsFrame/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/nodejs/nodejsFrame/index.vue"),
                name: 'NodejsFrame',
                meta: { title: 'nodejs常用框架' }
            }
        ]
    },
    {
        path: '/nodejsNetwork',
        component: Layout,
        redirect: '/nodejsNetwork/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/nodejs/nodejsNetwork/index.vue"),
                name: 'NodejsNetwork',
                meta: { title: 'nodejs网络及部署' }
            }
        ]
    },
    {
        path: '/nodejsCache',
        component: Layout,
        redirect: '/nodejsCache/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/nodejs/nodejsCache/index.vue"),
                name: 'NodejsCache',
                meta: { title: 'nodejs缓存、安全及协议' }
            }
        ]
    },
    {
        path: '/nodejsProject',
        component: Layout,
        redirect: '/nodejsProject/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/nodejs/nodejsProject/index.vue"),
                name: 'NodejsProject',
                meta: { title: 'nodejs实战' }
            }
        ]
    },
]
const crossTerminal: Array<RouteRecordRaw> = [
    {
        path: '/uniapp',
        component: Layout,
        redirect: '/uniapp/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/crossTerminal/uniapp/index.vue"),
                name: 'Uniapp',
                meta: { title: 'uniapp' }
            }
        ]
    },
    {
        path: '/reactNative',
        component: Layout,
        redirect: '/reactNative/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/crossTerminal/reactNative/index.vue"),
                name: 'ReactNative',
                meta: { title: 'reactNative' }
            }
        ]
    },
    {
        path: '/hybrid',
        component: Layout,
        redirect: '/hybrid/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/crossTerminal/hybrid/index.vue"),
                name: 'Hybrid',
                meta: { title: 'hybrid' }
            }
        ]
    },
    {
        path: '/electron',
        component: Layout,
        redirect: '/electron/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/crossTerminal/electron/index.vue"),
                name: 'Electron',
                meta: { title: 'electron' }
            }
        ]
    },
    {
        path: '/flutter',
        component: Layout,
        redirect: '/flutter/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/crossTerminal/flutter/index.vue"),
                name: 'Flutter',
                meta: { title: 'flutter' }
            }
        ]
    },
    {
        path: '/QT',
        component: Layout,
        redirect: '/QT/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/crossTerminal/QT/index.vue"),
                name: 'QT',
                meta: { title: 'QT' }
            }
        ]
    },
]
const algorithm: Array<RouteRecordRaw> = [
    {
        path: '/basicDataStructure',
        component: Layout,
        redirect: '/basicDataStructure/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/basicDataStructure/index.vue"),
                name: 'BasicDataStructure',
                meta: { title: '基础数据结构' }
            }
        ]
    },
    {
        path: '/chartStorage',
        component: Layout,
        redirect: '/chartStorage/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/chartStorage/index.vue"),
                name: 'ChartStorage',
                meta: { title: '图的存储和遍历' }
            }
        ]
    },
    {
        path: '/doublePointer',
        component: Layout,
        redirect: '/doublePointer/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/doublePointer/index.vue"),
                name: 'DoublePointer',
                meta: { title: '双指针' }
            }
        ]
    },
    {
        path: '/minimum',
        component: Layout,
        redirect: '/minimum/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/minimum/index.vue"),
                name: 'Minimum',
                meta: { title: '最短编辑距离' }
            }
        ]
    },
    {
        path: '/greed',
        component: Layout,
        redirect: '/greed/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/greed/index.vue"),
                name: 'Greed',
                meta: { title: '贪心算法' }
            }
        ]
    },
    {
        path: '/planning',
        component: Layout,
        redirect: '/planning/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/planning/index.vue"),
                name: 'Planning',
                meta: { title: '动态规划' }
            }
        ]
    },
    {
        path: '/leetCode',
        component: Layout,
        redirect: '/leetCode/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/leetCode/index.vue"),
                name: 'LeetCode',
                meta: { title: 'LeetCode' }
            }
        ]
    },
    {
        path: '/BAT',
        component: Layout,
        redirect: '/BAT/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/BAT/index.vue"),
                name: 'BAT',
                meta: { title: 'BAT高频算法' }
            }
        ]
    },
    {
        path: '/treeErgodic',
        component: Layout,
        redirect: '/treeErgodic/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/treeErgodic/index.vue"),
                name: 'TreeErgodic',
                meta: { title: '树遍历 & 图遍历' }
            }
        ]
    },
    {
        path: '/DFSBFS',
        component: Layout,
        redirect: '/DFSBFS/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/algorithm/DFSBFS/index.vue"),
                name: 'DFSBFS',
                meta: { title: 'DFS & BFS' }
            }
        ]
    },
]
const other: Array<RouteRecordRaw> = [
    {
        path: '/offer',
        component: Layout,
        redirect: '/offer/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/offer/index.vue"),
                name: 'Offer',
                meta: { title: '前端面试' }
            }
        ]
    },
    {
        path: '/webPerformance',
        component: Layout,
        redirect: '/webPerformance/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/webPerformance/index.vue"),
                name: 'WebPerformance',
                meta: { title: '前端性能优化' }
            }
        ]
    },
    {
        path: '/browserProcess',
        component: Layout,
        redirect: '/browserProcess/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/browserProcess/index.vue"),
                name: 'BrowserProcess',
                meta: { title: '浏览器进程和线程' }
            }
        ]
    },
    {
        path: '/networkSecurity',
        component: Layout,
        redirect: '/networkSecurity/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/networkSecurity/index.vue"),
                name: 'NetworkSecurity',
                meta: { title: '前端网络安全' }
            }
        ]
    },
    {
        path: '/lowCode',
        component: Layout,
        redirect: '/lowCode/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/lowCode/index.vue"),
                name: 'LowCode',
                meta: { title: '低代码平台' }
            }
        ]
    },
    {
        path: '/weChat',
        component: Layout,
        redirect: '/weChat/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/weChat/index.vue"),
                name: 'WeChat',
                meta: { title: '小程序' }
            }
        ]
    },
    {
        path: '/css',
        component: Layout,
        redirect: '/css/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/css/index.vue"),
                name: 'Css',
                meta: { title: 'Css' }
            }
        ]
    },
    {
        path: '/canvas',
        component: Layout,
        redirect: '/canvas/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/canvas/index.vue"),
                name: 'Canvas',
                meta: { title: 'Canvas' }
            }
        ]
    },
    {
        path: '/designMode',
        component: Layout,
        redirect: '/designMode/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/other/designMode/index.vue"),
                name: 'DesignMode',
                meta: { title: '前端设计模式' }
            }
        ]
    },
]
export {
    javaScript,
    vue,
    react,
    engineer,
    nodejs,
    crossTerminal,
    algorithm,
    other
}