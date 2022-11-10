/**
 * @param { number } id Unique value -> start :0
 * @param { string } hashId href Unique value
 * @param { string } title show current title
 * @param { string } routeName page find data
 */



interface GlobalSidebar {
    mainTitle: string,
    mainSidebar: Array<Sidebar>
}

interface Sidebar {
    id: number,
    hashId: string | number,
    title: string,
    routeName: string,
    children: Array<SidebarItem>,
}

interface SidebarItem {
    id: number,
    parentId: number,
    hashId: string | number,
    title: string,
}

const getCurrentTreeNode = (hashId: string, data: any) => {
    if (!hashId || !data) throw new Error("Params can not empty!");
    const result: any = {
        code: 200,
        success: true,
        data: null
    }
    data.find((t: GlobalSidebar) => {
        t.mainSidebar.find((x: Sidebar) => {
            if (x.hashId != hashId && x.children.length > 0) {
                let exist = x.children.find((s: SidebarItem) => s.hashId == hashId)
                if (exist) {
                    result.data = {
                        hashId: exist.hashId as string,
                        parentHashId: x.hashId as string,
                    }
                }
            } else if (x.hashId == hashId) {
                result.data = {
                    hashId: "",
                    parentHashId: x.hashId as string,
                }
            }

        })
    })

    return result
}

export {
    GlobalSidebar,
    Sidebar,
    SidebarItem,
    getCurrentTreeNode
}
