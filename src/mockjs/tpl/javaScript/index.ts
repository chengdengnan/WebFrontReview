import { GlobalSidebar, Sidebar, getCurrentTreeNode } from "../../sidebar.type";


namespace InfoSidebar {
    export type InfoSidebarParams = {
        body: string,
        type: string,
        url: string
    }

}

const dataSource: Array<GlobalSidebar> = [
    {
        mainTitle: 'JavaScript基础问题梳理',
        mainSidebar: [
            {
                id: 0,
                hashId: 'This',
                title: 'this指向',
                routeName: 'JsBasic',
                children: [
                    {
                        id: 1,
                        parentId: 0,
                        hashId: 'GlobalFunction',
                        title: '全局函数'
                    },
                    {
                        id: 2,
                        parentId: 0,
                        hashId: 'ObjectMethod',
                        title: '对象方法'
                    },
                    {
                        id: 3,
                        parentId: 0,
                        hashId: 'Constructor',
                        title: '构造函数'
                    },
                    {
                        id: 4,
                        parentId: 0,
                        hashId: 'SetTimeout',
                        title: '定时器、回调函数'
                    },
                    {
                        id: 5,
                        parentId: 0,
                        hashId: 'EventFunction',
                        title: '事件函数'
                    },
                    {
                        id: 6,
                        parentId: 0,
                        hashId: 'ArrowFunction',
                        title: '箭头函数'
                    },
                    {
                        id: 7,
                        parentId: 0,
                        hashId: 'CallApplyBind',
                        title: 'call、apply、bind'
                    },
                ]
            },
            {
                id: 1,
                hashId: 'Promise',
                title: 'Promise',
                routeName: 'JsBasic',
                children: [
                    {
                        id: 8,
                        parentId: 1,
                        hashId: 'Reference',
                        title: '参考资料'
                    },
                    {
                        id: 9,
                        parentId: 1,
                        hashId: 'ConstructorStatus',
                        title: '构造函数和状态'
                    },
                    {
                        id: 10,
                        parentId: 1,
                        hashId: 'NineMethods',
                        title: '九大方法'
                    },
                    {
                        id: 11,
                        parentId: 1,
                        hashId: 'ErrorCapture',
                        title: '错误捕获'
                    },
                    {
                        id: 12,
                        parentId: 1,
                        hashId: 'ReturnValue',
                        title: '返回值'
                    },
                    {
                        id: 14,
                        parentId: 1,
                        hashId: 'Async',
                        title: 'async'
                    },
                    {
                        id: 14,
                        parentId: 1,
                        hashId: 'Await',
                        title: 'await'
                    },
                    {
                        id: 14,
                        parentId: 1,
                        hashId: 'AsyncAwaitErrorCatch',
                        title: 'async和await错误处理'
                    },
                    {
                        id: 14,
                        parentId: 1,
                        hashId: 'AsyncAwaitLoop',
                        title: 'async和await循环中使用'
                    },
                ]
            },
            {
                id: 2,
                hashId: 'Generator',
                title: 'Generator',
                routeName: 'JsBasic',
                children: [
                    {
                        id: 15,
                        parentId: 2,
                        hashId: 'Iterator',
                        title: '迭代器Iterator'
                    },
                    {
                        id: 16,
                        parentId: 2,
                        hashId: 'SubGenerator',
                        title: '生成器Generator'
                    },
                    {
                        id: 17,
                        parentId: 2,
                        hashId: 'AutoGenerator',
                        title: 'Generator自动执行'
                    },
                ]
            },
            {
                id: 3,
                hashId: 'DeepClone',
                title: '深拷贝和浅拷贝',
                routeName: 'JsBasic',
                children: []
            }
        ]
    },
];



export default {
    name: 'jsBasicInfo',
    jsBasicInfo(params: InfoSidebar.InfoSidebarParams) {
        const param = JSON.parse(params.body)
        if (!param) throw new Error("Params can not empty!");
        const data = dataSource.find((t: GlobalSidebar) => {
            return t.mainSidebar.filter((x: Sidebar) => {
                return x.routeName === param.routeName
            })
        })
        return {
            data,
            success: true,
            code: 200
        }
    },
    treeNode(params: InfoSidebar.InfoSidebarParams) {
        const { routeName } = JSON.parse(params.body)
        return getCurrentTreeNode(routeName, dataSource)
    }
} 