import request from "@/utils/request";

namespace SystemNavbar {
    export type ResponseItem = {
        code: number
    }

    export type ResponseNavbar = {
        id: number,
        title: string,
        hashId?: string,
        children: Array<ResponseNavbarItem>
    }

    export type ResponseNavbarItem = {
        id: number,
        parentId: number,
        title: string,
        routeName: string
    }
}

// global get navbar
export const info = () => {
    return request.post<SystemNavbar.ResponseItem>('/infoNavbar', {})
}