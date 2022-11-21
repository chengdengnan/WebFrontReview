import { Navbar, NavbarItem } from "../../navbar.type";

const dataSource: Array<Navbar> = [
    {
        id: 10, // children 21
        title: "Js",
        hashId: "Js",
        children: [
            {
                id: 11,
                parentId: 10,
                title: "js杂记",
                routeName: "JsBasic",
                disabled: false
            },
            {
                id: 12,
                parentId: 10,
                title: "面向对象",
                routeName: "OrientObject",
                disabled: true
            },
            {
                id: 12,
                parentId: 10,
                title: "Promise规范及其应用",
                routeName: "PromiseApplication",
                disabled: false
            },
            {
                id: 14,
                parentId: 10,
                title: "浏览器对象详解",
                routeName: "BrowserDetail",
                disabled: true
            },
            {
                id: 15,
                parentId: 10,
                title: "ES进阶",
                routeName: "EsAdvance",
                disabled: true
            },
            {
                id: 16,
                parentId: 10,
                title: "JavaScript性能优化",
                routeName: "JavaScriptPerformance",
                disabled: true
            },
            {
                id: 17,
                parentId: 10,
                title: "函数式编程",
                routeName: "FunctionProgram",
                disabled: true
            },
            {
                id: 18,
                parentId: 10,
                title: "设计模式",
                routeName: "DesignMode",
                disabled: true
            },
            {
                id: 19,
                parentId: 10,
                title: "TS初探",
                routeName: "TsFirst",
                disabled: true
            },
            {
                id: 20,
                parentId: 10,
                title: "TS初探",
                routeName: "TsBasic",
                disabled: true
            },
            {
                id: 21,
                parentId: 10,
                title: "TS工程",
                routeName: "TsProject",
                disabled: true
            }
        ]
    },
    {
        id: 11, // children 32
        title: "Vue",
        hashId: "Vue",
        children: [
            {
                id: 22,
                parentId: 11,
                title: "vue2.0基础",
                routeName: "Vue2Basic",
                disabled: true
            },
            {
                id: 23,
                parentId: 11,
                title: "vue2.0进阶",
                routeName: "Vue2Advance",
                disabled: true
            },
            {
                id: 24,
                parentId: 11,
                title: "vuex",
                routeName: "Vuex",
                disabled: true
            },
            {
                id: 25,
                parentId: 11,
                title: "vue-cli",
                routeName: "VueCli",
                disabled: true
            },
            {
                id: 26,
                parentId: 11,
                title: "vue-router",
                routeName: "VueRouter",
                disabled: true
            },
            {
                id: 27,
                parentId: 11,
                title: "vue-loader",
                routeName: "VueLoader",
                disabled: true
            },
            {
                id: 28,
                parentId: 11,
                title: "vue-ssr",
                routeName: "VueSsr",
                disabled: true
            },
            {
                id: 29,
                parentId: 11,
                title: "vue-i18n",
                routeName: "VueI18n",
                disabled: true
            },
            {
                id: 30,
                parentId: 11,
                title: "生命周期",
                routeName: "LifeCycle",
                disabled: true
            },
            {
                id: 31,
                parentId: 11,
                title: "响应式原理",
                routeName: "DefinepropertyTheory",
                disabled: true
            },
            {
                id: 32,
                parentId: 11,
                title: "diff原理",
                routeName: "DiffTheory",
                disabled: true
            },
            {
                id: 33,
                parentId: 11,
                title: "编译原理",
                routeName: "CompileTheory",
                disabled: true
            },
            {
                id: 34,
                parentId: 11,
                title: "实战总结",
                routeName: "VueProject",
                disabled: true
            }
        ]
    },
    {
        id: 12, // children 42
        title: "React",
        hashId: "React",
        children: [
            {
                id: 33,
                parentId: 12,
                title: "react基础",
                routeName: "ReactBasic",
                disabled: true
            },
            {
                id: 34,
                parentId: 12,
                title: "react进阶",
                routeName: "ReactAdvance",
                disabled: true
            },
            {
                id: 35,
                parentId: 12,
                title: "react-router",
                routeName: "ReactRouter",
                disabled: true
            },
            {
                id: 36,
                parentId: 12,
                title: "react状态管理",
                routeName: "ReactStatusManage",
                disabled: true
            },
            {
                id: 37,
                parentId: 12,
                title: "react状态同构",
                routeName: "ReactIsomorphism", // Isomorphism ：同构
                disabled: true
            },
            {
                id: 38,
                parentId: 12,
                title: "react组件封装",
                routeName: "ReactComponent",
                disabled: true
            },
            {
                id: 39,
                parentId: 12,
                title: "react源码分析",
                routeName: "ReactSourceCode",
                disabled: true
            },
            {
                id: 40,
                parentId: 12,
                title: "redux & mobox",
                routeName: "ReduxMobox",
                disabled: true
            },
            {
                id: 41,
                parentId: 12,
                title: "react-ts实战",
                routeName: "ReactTs",
                disabled: true
            },
            {
                id: 42,
                parentId: 12,
                title: "react问题整理",
                routeName: "ReactProblem",
                disabled: true
            }
        ]
    },
    {
        id: 13, // children 52
        title: "工程化",
        hashId: "Engineer",
        children: [
            {
                id: 43,
                parentId: 13,
                title: "模块化规范",
                routeName: "ModulesStandard",
                disabled: true
            },
            {
                id: 44,
                parentId: 13,
                title: "前端工程化详解",
                routeName: "WebEngineerDetail",
                disabled: true
            },
            {
                id: 45,
                parentId: 13,
                title: "模块化开发与Webpack",
                routeName: "ModulesWebpack",
                disabled: true
            },
            {
                id: 46,
                parentId: 13,
                title: "babel详解",
                routeName: "BabelDetail",
                disabled: true
            },
            {
                id: 47,
                parentId: 13,
                title: "自动化构建",
                routeName: "AutomationStructure", // Structure:结构、构造
                disabled: true
            },
            {
                id: 48,
                parentId: 13,
                title: "自动化测试",
                routeName: "AutomationTest",
                disabled: true
            },
            {
                id: 49,
                parentId: 13,
                title: "自动化部署",
                routeName: "AutomationDeploy",
                disabled: true
            },
            {
                id: 50,
                parentId: 13,
                title: "前端AST",
                routeName: "WebAST",
                disabled: true
            },
            {
                id: 51,
                parentId: 13,
                title: "微前端",
                routeName: "TinyWeb",
                disabled: true
            },
            {
                id: 52,
                parentId: 13,
                title: "工程化方案",
                routeName: "EngineerScheme",
                disabled: true
            }
        ]
    },
    {
        id: 14, // children 58
        title: "Nodejs",
        hashId: "Nodejs",
        children: [
            {
                id: 53,
                parentId: 14,
                title: "nodejs基础",
                routeName: "NodejsBasic",
                disabled: true
            },
            {
                id: 54,
                parentId: 14,
                title: "nodejs基本原理", // EventLoop / Buffer / Stream / Global
                routeName: "NodejsTheory",
                disabled: true
            },
            {
                id: 55,
                parentId: 14,
                title: "nodejs常用框架",
                routeName: "NodejsFrame",
                disabled: true
            },
            {
                id: 56,
                parentId: 14,
                title: "nodejs网络及部署",
                routeName: "NodejsNetwork",
                disabled: true
            },
            {
                id: 57,
                parentId: 14,
                title: "nodejs缓存、安全及协议",
                routeName: "NodejsCache",
                disabled: true
            },
            {
                id: 58,
                parentId: 14,
                title: "nodejs实战",
                routeName: "NodejsProject",
                disabled: true
            }
        ]
    },
    {
        id: 15, // children 64
        title: "跨端",
        hashId: "CrossTerminal",
        children: [
            {
                id: 59,
                parentId: 15,
                title: "uniapp",
                routeName: "Uniapp",
                disabled: true
            },
            {
                id: 60,
                parentId: 15,
                title: "reactNative",
                routeName: "ReactNative",
                disabled: true
            },
            {
                id: 61,
                parentId: 15,
                title: "hybrid",
                routeName: "Hybrid",
                disabled: true
            },
            {
                id: 62,
                parentId: 15,
                title: "electron",
                routeName: "Electron",
                disabled: true
            },
            {
                id: 63,
                parentId: 15,
                title: "flutter",
                routeName: "Flutter",
                disabled: true
            },
            {
                id: 64,
                parentId: 15,
                title: "QT",
                routeName: "QT",
                disabled: true
            }
        ]
    },
    {
        id: 16, // children 74
        title: "算法",
        hashId: "Algorithm",
        children: [
            {
                id: 65,
                parentId: 16,
                title: "基础数据结构",
                routeName: "BasicDataStructure",
                disabled: true
            },
            {
                id: 66,
                parentId: 16,
                title: "图的存储和遍历",
                routeName: "ChartStorage",
                disabled: true
            },
            {
                id: 67,
                parentId: 16,
                title: "双指针",
                routeName: "DoublePointer",
                disabled: true
            },
            {
                id: 68,
                parentId: 16,
                title: "最短编辑距离",
                routeName: "Minimum",
                disabled: true
            },
            {
                id: 69,
                parentId: 16,
                title: "贪心算法",
                routeName: "Greed",
                disabled: true
            },
            {
                id: 70,
                parentId: 16,
                title: "动态规划",
                routeName: "Planning",
                disabled: true
            },
            {
                id: 71,
                parentId: 16,
                title: "LeetCode",
                routeName: "LeetCode",
                disabled: true
            },
            {
                id: 72,
                parentId: 16,
                title: "BAT高频算法",
                routeName: "BAT",
                disabled: true
            },
            {
                id: 73,
                parentId: 16,
                title: "树遍历 & 图遍历",
                routeName: "TreeErgodic",
                disabled: true
            },
            {
                id: 74,
                parentId: 16,
                title: "DFS & BFS",
                routeName: "DFSBFS",
                disabled: true
            }
        ]
    },
    {
        id: 16, // children 83
        title: "其他",
        hashId: "Other",
        children: [
            {
                id: 75,
                parentId: 16,
                title: "前端面试",
                routeName: "Offer",
                disabled: true
            },
            {
                id: 76,
                parentId: 16,
                title: "前端性能优化",
                routeName: "WebPerformance",
                disabled: true
            },
            {
                id: 77,
                parentId: 16,
                title: "浏览器进程和线程",
                routeName: "BrowserProcess",
                disabled: true
            },
            {
                id: 78,
                parentId: 16,
                title: "前端网络安全",
                routeName: "NetworkSecurity",
                disabled: true
            },
            {
                id: 79,
                parentId: 16,
                title: "低代码平台",
                routeName: "LowCode",
                disabled: true
            },
            {
                id: 80,
                parentId: 16,
                title: "小程序",
                routeName: "WeChat",
                disabled: true
            },
            {
                id: 81,
                parentId: 16,
                title: "css",
                routeName: "Css",
                disabled: true
            },
            {
                id: 82,
                parentId: 16,
                title: "canvas",
                routeName: "Canvas",
                disabled: true
            },
            {
                id: 83,
                parentId: 16,
                title: "前端设计模式",
                routeName: "DesignMode",
                disabled: true
            }
        ]
    }
];

export default {
    name: "infoNavbar",
    navbarInfo() {
        return {
            data: dataSource,
            success: true,
            code: 200
        };
    }
};
