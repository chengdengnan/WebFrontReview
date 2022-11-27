import { GlobalSidebar, Sidebar, getCurrentTreeNode } from "../../sidebar.type";

// js 杂记
namespace InfoSidebar {
    export type InfoSidebarParams = {
        body: string;
        type: string;
        url: string;
    };
}
const dataSource: Array<GlobalSidebar> = [
    {
        mainTitle: "JavaScript基础问题梳理",
        mainSidebar: [
            {
                id: 0,
                hashId: "This",
                title: "this指向",
                routeName: "JsBasic",
                children: [
                    {
                        id: 1,
                        parentId: 0,
                        hashId: "GlobalFunction",
                        title: "全局函数"
                    },
                    {
                        id: 2,
                        parentId: 0,
                        hashId: "ObjectMethod",
                        title: "对象方法"
                    },
                    {
                        id: 3,
                        parentId: 0,
                        hashId: "Constructor",
                        title: "构造函数"
                    },
                    {
                        id: 4,
                        parentId: 0,
                        hashId: "SetTimeout",
                        title: "定时器、回调函数"
                    },
                    {
                        id: 5,
                        parentId: 0,
                        hashId: "EventFunction",
                        title: "事件函数"
                    },
                    {
                        id: 6,
                        parentId: 0,
                        hashId: "ArrowFunction",
                        title: "箭头函数"
                    },
                    {
                        id: 7,
                        parentId: 0,
                        hashId: "CallApplyBind",
                        title: "call、apply、bind"
                    }
                ]
            },
            {
                id: 1,
                hashId: "ThisBind",
                title: "this绑定",
                routeName: "JsBasic",
                children: [
                    {
                        id: 8,
                        parentId: 1,
                        hashId: "DefaultBind",
                        title: "默认绑定(函数直接调用)"
                    },
                    {
                        id: 9,
                        parentId: 1,
                        hashId: "ImplicitBind",
                        title: "隐式绑定"
                    },
                    {
                        id: 10,
                        parentId: 1,
                        hashId: "DisplayBind",
                        title: "显示绑定(call/apply/bind)"
                    },
                    {
                        id: 11,
                        parentId: 1,
                        hashId: "NewObject",
                        title: "new创建对象"
                    },
                    {
                        id: 12,
                        parentId: 1,
                        hashId: "ThisBindArrowFunction",
                        title: "箭头函数"
                    },
                    {
                        id: 13,
                        parentId: 1,
                        hashId: "ThisPriority",
                        title: "优先级"
                    }
                ]
            },
            {
                id: 2,
                hashId: "ActionScope",
                title: "作用域",
                routeName: "JsBasic",
                children: [
                    {
                        id: 14,
                        parentId: 2,
                        hashId: "DataStorage",
                        title: "数据存储"
                    },
                    {
                        id: 15,
                        parentId: 2,
                        hashId: "ExcuteContext",
                        title: "执行上下文"
                    },
                    {
                        id: 16,
                        parentId: 2,
                        hashId: "ExcuteContextStack",
                        title: "执行上下文栈"
                    },
                    {
                        id: 17,
                        parentId: 2,
                        hashId: "ActionScopeChain",
                        title: "作用域与作用域链"
                    },
                    {
                        id: 18,
                        parentId: 2,
                        hashId: "ActionScopeChainGrow",
                        title: "作用域链增强"
                    }
                ]
            },
            {
                id: 3,
                hashId: "DeepClone",
                title: "深拷贝和浅拷贝",
                routeName: "JsBasic",
                children: []
            },
            {
                id: 4,
                hashId: "ClosePackage",
                title: "闭包",
                routeName: "JsBasic",
                children: []
            },
            {
                id: 5,
                hashId: "Interview",
                title: "面试",
                routeName: "JsBasic",
                children: [
                    {
                        id: 19,
                        parentId: 5,
                        hashId: "InterviewThis",
                        title: "this指向"
                    },
                    {
                        id: 20,
                        parentId: 5,
                        hashId: "InterviewActionScopeChain",
                        title: "作用域链"
                    },
                    {
                        id: 21,
                        parentId: 5,
                        hashId: "InterviewOrientObject",
                        title: "面向对象"
                    },

                    {
                        id: 22,
                        parentId: 5,
                        hashId: "CustomCall",
                        title: "实现 call"
                    },
                    {
                        id: 23,
                        parentId: 5,
                        hashId: "CustomApply",
                        title: "实现 apply"
                    },
                    {
                        id: 24,
                        parentId: 5,
                        hashId: "CustomBind",
                        title: "实现 bind"
                    },
                    {
                        id: 25,
                        parentId: 5,
                        hashId: "InterviewIntergrated",
                        title: "综合题"
                    }
                ]
            }
        ]
    }
];

export default {
    name: "jsBasicInfo",
    info(params: InfoSidebar.InfoSidebarParams) {
        const param = JSON.parse(params.body);
        if (!param) throw new Error("Params can not empty!");
        const data = dataSource.find((t: GlobalSidebar) => {
            return t.mainSidebar.filter((x: Sidebar) => {
                return x.routeName === param.routeName;
            });
        });
        return {
            data,
            success: true,
            code: 200
        };
    },
    treeNode(params: InfoSidebar.InfoSidebarParams) {
        const { routeName } = JSON.parse(params.body);
        return getCurrentTreeNode(routeName, dataSource);
    }
};
