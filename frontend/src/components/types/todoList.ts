export enum List {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed',
}

export enum Icons {
    Delete = 'Delete',
    Edit = 'Edit',
}

export type ListType = keyof typeof List
export type TodoListType = { done: boolean; taskName: string; id: string }
export type ModalType = 'create'| 'edit'
