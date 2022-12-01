import { Navbar, NavbarItem } from "../../navbar.type";

const dataSource: Array<Navbar> = [
    {
        id: 10, // children 21
        title: "Js",
        hashId: "Js",
        children: [
            {
                id: 111,
                parentId: 10,
                title: "js杂记",
                routeName: "JsBasic",
                disabled: false
            },
            {
                id: 112,
                parentId: 10,
                title: "面向对象",
                routeName: "OrientObject",
                disabled: true
            },
            {
                id: 113,
                parentId: 10,
                title: "Promise规范及其应用",
                routeName: "PromiseApplication",
                disabled: false
            },
            {
                id: 114,
                parentId: 10,
                title: "浏览器对象详解",
                routeName: "BrowserDetail",
                disabled: true
            },
            {
                id: 115,
                parentId: 10,
                title: "ES进阶",
                routeName: "EsAdvance",
                disabled: true
            },
            {
                id: 116,
                parentId: 10,
                title: "JavaScript性能优化",
                routeName: "JavaScriptPerformance",
                disabled: true
            },
            {
                id: 117,
                parentId: 10,
                title: "函数式编程",
                routeName: "FunctionProgram",
                disabled: true
            },
            {
                id: 118,
                parentId: 10,
                title: "设计模式",
                routeName: "DesignMode",
                disabled: true
            },
            {
                id: 119,
                parentId: 10,
                title: "TS初探",
                routeName: "TsFirst",
                disabled: true
            },
            {
                id: 120,
                parentId: 10,
                title: "TS初探",
                routeName: "TsBasic",
                disabled: true
            },
            {
                id: 121,
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
                id: 122,
                parentId: 11,
                title: "vue2.0基础",
                routeName: "Vue2Basic",
                disabled: true
            },
            {
                id: 123,
                parentId: 11,
                title: "vue2.0进阶",
                routeName: "Vue2Advance",
                disabled: true
            },
            {
                id: 124,
                parentId: 11,
                title: "vuex",
                routeName: "Vuex",
                disabled: true
            },
            {
                id: 125,
                parentId: 11,
                title: "vue-cli",
                routeName: "VueCli",
                disabled: true
            },
            {
                id: 126,
                parentId: 11,
                title: "vue-router",
                routeName: "VueRouter",
                disabled: true
            },
            {
                id: 127,
                parentId: 11,
                title: "vue-loader",
                routeName: "VueLoader",
                disabled: true
            },
            {
                id: 128,
                parentId: 11,
                title: "vue-ssr",
                routeName: "VueSsr",
                disabled: true
            },
            {
                id: 129,
                parentId: 11,
                title: "vue-i18n",
                routeName: "VueI18n",
                disabled: true
            },
            {
                id: 130,
                parentId: 11,
                title: "生命周期",
                routeName: "LifeCycle",
                disabled: true
            },
            {
                id: 131,
                parentId: 11,
                title: "响应式原理",
                routeName: "DefinepropertyTheory",
                disabled: true
            },
            {
                id: 132,
                parentId: 11,
                title: "diff原理",
                routeName: "DiffTheory",
                disabled: true
            },
            {
                id: 133,
                parentId: 11,
                title: "编译原理",
                routeName: "CompileTheory",
                disabled: true
            },
            {
                id: 134,
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
                id: 133,
                parentId: 12,
                title: "react基础",
                routeName: "ReactBasic",
                disabled: false
            },
            {
                id: 134,
                parentId: 12,
                title: "react进阶",
                routeName: "ReactAdvance",
                disabled: true
            },
            {
                id: 135,
                parentId: 12,
                title: "react-router",
                routeName: "ReactRouter",
                disabled: true
            },
            {
                id: 136,
                parentId: 12,
                title: "react状态管理",
                routeName: "ReactStatusManage",
                disabled: true
            },
            {
                id: 137,
                parentId: 12,
                title: "react状态同构",
                routeName: "ReactIsomorphism", // Isomorphism ：同构
                disabled: true
            },
            {
                id: 138,
                parentId: 12,
                title: "react组件封装",
                routeName: "ReactComponent",
                disabled: true
            },
            {
                id: 139,
                parentId: 12,
                title: "react源码分析",
                routeName: "ReactSourceCode",
                disabled: true
            },
            {
                id: 140,
                parentId: 12,
                title: "redux & mobox",
                routeName: "ReduxMobox",
                disabled: true
            },
            {
                id: 141,
                parentId: 12,
                title: "react-ts实战",
                routeName: "ReactTs",
                disabled: true
            },
            {
                id: 142,
                parentId: 12,
                title: "react问题整理",
                routeName: "ReactProblem",
                disabled: true
            }
        ]
    },
    {
        id: 13, 
        title: "工程化",
        hashId: "Engineer",
        children: [
            {
                id: 143,
                parentId: 13,
                title: "模块化规范",
                routeName: "ModulesStandard",
                disabled: true
            },
            {
                id: 144,
                parentId: 13,
                title: "前端工程化详解",
                routeName: "WebEngineerDetail",
                disabled: true
            },
            {
                id: 145,
                parentId: 13,
                title: "模块化开发与Webpack",
                routeName: "ModulesWebpack",
                disabled: true
            },
            {
                id: 146,
                parentId: 13,
                title: "babel详解",
                routeName: "BabelDetail",
                disabled: true
            },
            {
                id: 147,
                parentId: 13,
                title: "自动化构建",
                routeName: "AutomationStructure", // Structure:结构、构造
                disabled: true
            },
            {
                id: 148,
                parentId: 13,
                title: "自动化测试",
                routeName: "AutomationTest",
                disabled: true
            },
            {
                id: 149,
                parentId: 13,
                title: "自动化部署",
                routeName: "AutomationDeploy",
                disabled: true
            },
            {
                id: 150,
                parentId: 13,
                title: "前端AST",
                routeName: "WebAST",
                disabled: true
            },
            {
                id: 151,
                parentId: 13,
                title: "微前端",
                routeName: "TinyWeb",
                disabled: true
            },
            {
                id: 152,
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
                id: 153,
                parentId: 14,
                title: "nodejs基础",
                routeName: "NodejsBasic",
                disabled: true
            },
            {
                id: 154,
                parentId: 14,
                title: "nodejs基本原理", // EventLoop / Buffer / Stream / Global
                routeName: "NodejsTheory",
                disabled: true
            },
            {
                id: 155,
                parentId: 14,
                title: "nodejs常用框架",
                routeName: "NodejsFrame",
                disabled: true
            },
            {
                id: 156,
                parentId: 14,
                title: "nodejs网络及部署",
                routeName: "NodejsNetwork",
                disabled: true
            },
            {
                id: 157,
                parentId: 14,
                title: "nodejs缓存、安全及协议",
                routeName: "NodejsCache",
                disabled: true
            },
            {
                id: 158,
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
                id: 159,
                parentId: 15,
                title: "uniapp",
                routeName: "Uniapp",
                disabled: true
            },
            {
                id: 160,
                parentId: 15,
                title: "reactNative",
                routeName: "ReactNative",
                disabled: true
            },
            {
                id: 161,
                parentId: 15,
                title: "hybrid",
                routeName: "Hybrid",
                disabled: true
            },
            {
                id: 162,
                parentId: 15,
                title: "electron",
                routeName: "Electron",
                disabled: true
            },
            {
                id: 163,
                parentId: 15,
                title: "flutter",
                routeName: "Flutter",
                disabled: true
            },
            {
                id: 164,
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
                id: 165,
                parentId: 16,
                title: "基础数据结构",
                routeName: "BasicDataStructure",
                disabled: true
            },
            {
                id: 166,
                parentId: 16,
                title: "图的存储和遍历",
                routeName: "ChartStorage",
                disabled: true
            },
            {
                id: 167,
                parentId: 16,
                title: "双指针",
                routeName: "DoublePointer",
                disabled: true
            },
            {
                id: 168,
                parentId: 16,
                title: "最短编辑距离",
                routeName: "Minimum",
                disabled: true
            },
            {
                id: 169,
                parentId: 16,
                title: "贪心算法",
                routeName: "Greed",
                disabled: true
            },
            {
                id: 170,
                parentId: 16,
                title: "动态规划",
                routeName: "Planning",
                disabled: true
            },
            {
                id: 171,
                parentId: 16,
                title: "LeetCode",
                routeName: "LeetCode",
                disabled: true
            },
            {
                id: 172,
                parentId: 16,
                title: "BAT高频算法",
                routeName: "BAT",
                disabled: true
            },
            {
                id: 173,
                parentId: 16,
                title: "树遍历 & 图遍历",
                routeName: "TreeErgodic",
                disabled: true
            },
            {
                id: 174,
                parentId: 16,
                title: "DFS & BFS",
                routeName: "DFSBFS",
                disabled: true
            }
        ]
    },
    {
        id: 17, // children 83
        title: "其他",
        hashId: "Other",
        children: [
            {
                id: 175,
                parentId: 17,
                title: "前端面试",
                routeName: "Offer",
                disabled: true
            },
            {
                id: 176,
                parentId: 17,
                title: "前端性能优化",
                routeName: "WebPerformance",
                disabled: true
            },
            {
                id: 177,
                parentId: 17,
                title: "浏览器进程和线程",
                routeName: "BrowserProcess",
                disabled: true
            },
            {
                id: 178,
                parentId: 17,
                title: "前端网络安全",
                routeName: "NetworkSecurity",
                disabled: true
            },
            {
                id: 179,
                parentId: 17,
                title: "低代码平台",
                routeName: "LowCode",
                disabled: true
            },
            {
                id: 180,
                parentId: 17,
                title: "小程序",
                routeName: "WeChat",
                disabled: true
            },
            {
                id: 181,
                parentId: 17,
                title: "css",
                routeName: "Css",
                disabled: true
            },
            {
                id: 182,
                parentId: 17,
                title: "canvas",
                routeName: "Canvas",
                disabled: true
            },
            {
                id: 183,
                parentId: 17,
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
