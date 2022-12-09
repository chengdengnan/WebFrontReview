import {
    GlobalSidebar,
    Sidebar,
    InfoSidebar,
    getCurrentTreeNode
} from "../../sidebar.type";

// react basic

const dataSource: Array<GlobalSidebar> = [
    {
        mainTitle: "react基础",
        mainSidebar: [
            {
                id: 0,
                hashId: "ReactOverview",
                title: "综述",
                routeName: "ReactBasic",
                children: [
                    {
                        id: 100,
                        parentId: 0,
                        hashId: "ReactVersion",
                        title: "react简介"
                    },
                    {
                        id: 101,
                        parentId: 0,
                        hashId: "ReactEcology",
                        title: "react生态"
                    }
                ]
            },
            {
                id: 1,
                hashId: "ReactVirtualDOM",
                title: "虚拟 DOM",
                routeName: "ReactBasic",
                children: [
                    {
                        id: 1102,
                        parentId: 1,
                        hashId: "CreateVirtualDOM",
                        title: "虚拟DOM的两种创建方式"
                    },
                    {
                        id: 102,
                        parentId: 1,
                        hashId: "VirtualDOMUnderstand",
                        title: "对虚拟DOM的理解"
                    },
                    {
                        id: 103,
                        parentId: 1,
                        hashId: "ReactDiff",
                        title: "React diff算法的原理"
                    },
                    {
                        id: 104,
                        parentId: 1,
                        hashId: "ReactKey",
                        title: "React Key的作用"
                    },
                    {
                        id: 105,
                        parentId: 1,
                        hashId: "ActualDOM",
                        title: "虚拟DOM与原生DOM对比"
                    },
                    {
                        id: 106,
                        parentId: 1,
                        hashId: "ReactDiffAndVueDiff",
                        title: "React与Vue的diff算法差异"
                    }
                ]
            },
            {
                id: 2,
                hashId: "ReactGrammar",
                title: "React 基础",
                routeName: "ReactBasic",
                children: [
                    {
                        id: 107,
                        parentId: 2,
                        hashId: "ReactJSX",
                        title: "JSX"
                    },
                    {
                        id: 108,
                        parentId: 2,
                        hashId: "FunctionComponent",
                        title: "函数式组件"
                    },
                    {
                        id: 109,
                        parentId: 2,
                        hashId: "ClassComponent",
                        title: "类式组件"
                    },
                    {
                        id: 1109,
                        parentId: 2,
                        hashId: "StateAndSetState",
                        title: "state与setState的理解使用"
                    },
                    {
                        id: 110,
                        parentId: 2,
                        hashId: "HasStateComponent",
                        title: "有无状态组件"
                    },
                    {
                        id: 111,
                        parentId: 2,
                        hashId: "ControlComponent",
                        title: "受控组件和非受控组件"
                    },
                    {
                        id: 112,
                        parentId: 2,
                        hashId: "EventBind",
                        title: "事件绑定"
                    }
                ]
            },
            {
                id: 3,
                hashId: "ReactLifeCycle",
                title: "组件生命周期",
                routeName: "ReactBasic",
                children: [
                    {
                        id: 113,
                        parentId: 3,
                        hashId: "ReactThouseLifeCycle",
                        title: "React生命周期"
                    },
                    {
                        id: 114,
                        parentId: 3,
                        hashId: "ReactDiscardLifeCycle",
                        title: "React废弃的生命周期"
                    },
                    {
                        id: 114,
                        parentId: 3,
                        hashId: "ReactDiscardLifeCycle",
                        title: "React废弃的生命周期"
                    }
                ]
            }
        ]
    }
];

export default {
    name: "reactBasicInfo",
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
