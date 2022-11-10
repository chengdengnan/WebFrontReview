import request from "@/utils/request";

namespace User {
    // login
    export interface LoginForm {
        userName: string,
        password: string
    }
}


export namespace SystemSidebar {


    export type InfoSidebar = {
        path: string,
        routeName: string
    }


    export type ResponseItem = {
        code: number,
        items: Array<ResponseSidebar>,
        success: boolean
    }

    export type ResponseSidebar = {
        id: number,
        hashId: string | number,
        title: string,
        routeName: string,
        children: Array<ResponseSidebarItem>,
    }

    export type ResponseSidebarItem = {
        id: number,
        parentId: number,
        hashId: string | number,
        title: string,
    }
}

// get sidebarData
export const info = (params: SystemSidebar.InfoSidebar) => {
    // response 
    if (!params || !params.path) throw new Error('Params and params in path can not empty!')
    return request.post<SystemSidebar.ResponseSidebar>(params.path, { routeName: params.routeName })
}

export const infoTreeNode = (params: SystemSidebar.InfoSidebar) => {
    if (!params || !params.path) throw new Error('Params and params in path can not empty!')
    return request.post<any>(params.path + '/infoTreeNode', { routeName: params.routeName })
}

