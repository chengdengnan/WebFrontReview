import request from "@/utils/request";

namespace User {
    // login
    export interface LoginForm {
        userName: string,
        password: string
    }

    export interface info {
        path: string,
        routeName: string
    }

    export interface Sidebar {
        id: number,
        hashId: string | number,
        title: string,
        routeName: string,
        children: Array<SidebarItem>,
    }

    export interface SidebarItem {
        id: number,
        parentId: number,
        hashId: string | number,
        title: string,
    }
}

export const info = (params: User.info) => {
    console.log('api-params', params)
    // response 
    if (!params || !params.path) throw new Error('Params and params in path can not empty!')
    return request.post<User.Sidebar>(params.path, { routeName: params.routeName })
}