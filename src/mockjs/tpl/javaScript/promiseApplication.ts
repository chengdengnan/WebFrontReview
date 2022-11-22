import { GlobalSidebar, Sidebar, getCurrentTreeNode } from "../../sidebar.type";

// Promise 规范应用
namespace InfoSidebar {
    export type InfoSidebarParams = {
        body: string;
        type: string;
        url: string;
    };
}

const dataSource: Array<GlobalSidebar> = [
    {
        mainTitle: "Promise规范和应用",
        mainSidebar: [
            {
                id: 100,
                hashId: "ReferenceInformation",
                routeName: "PromiseApplication",
                title: "参考资料",
                children: []
            },
            {
                id: 101,
                hashId: "PromiseStandard",
                routeName: "PromiseApplication",
                title: "PromiseA+ 规范",
                children: [
                    {
                        id: 1001,
                        parentId: 101,
                        hashId: "PromiseTerm",
                        title: "术语"
                    },
                    {
                        id: 1002,
                        parentId: 101,
                        hashId: "PromiseStates",
                        title: "状态"
                    },
                    {
                        id: 1003,
                        parentId: 101,
                        hashId: "PromiseThen",
                        title: "Promise then方法"
                    }
                ]
            },
            {
                id: 102,
                hashId: "PromiseApplication",
                routeName: "PromiseApplication",
                title: "Promise 应用",
                children: [
                    {
                        id: 1004,
                        parentId: 102,
                        hashId: "ConstructorStatus",
                        title: "构造函数和状态"
                    },
                    {
                        id: 1005,
                        parentId: 102,
                        hashId: "NineMethods",
                        title: "九大方法"
                    },
                    {
                        id: 1006,
                        parentId: 102,
                        hashId: "ErrorCapture",
                        title: "错误捕获"
                    },
                    {
                        id: 1007,
                        parentId: 102,
                        hashId: "ReturnValue",
                        title: "返回值"
                    },
                    {
                        id: 1008,
                        parentId: 102,
                        hashId: "Async",
                        title: "async"
                    },
                    {
                        id: 1009,
                        parentId: 102,
                        hashId: "Await",
                        title: "await"
                    },
                    {
                        id: 1010,
                        parentId: 102,
                        hashId: "AsyncAwaitErrorCatch",
                        title: "async和await错误处理"
                    },
                    {
                        id: 1011,
                        parentId: 102,
                        hashId: "AsyncAwaitLoop",
                        title: "async和await循环中使用"
                    }
                ]
            },
            {
                id: 103,
                hashId: "PromiseRealization",
                routeName: "PromiseApplication",
                title: "实现一个 PromiseA+ 规范",
                children: [
                    {
                        id: 1012,
                        parentId: 103,
                        hashId: "RealizationSteps",
                        title: "实现步骤"
                    },
                    {
                        id: 1013,
                        parentId: 103,
                        hashId: "PromiseATest",
                        title: "测试"
                    }
                ]
            }
        ]
    }
];

export default {
    name: "promiseApplicationInfo",
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
