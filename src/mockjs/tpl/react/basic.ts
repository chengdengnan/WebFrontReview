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
                hashId: "React",
                title: "基础语法",
                routeName: "ReactGrammar",
                children: [
                    {
                        id: 102,
                        parentId: 1,
                        hashId: "ReactJSX",
                        title: "react简介"
                    },
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
