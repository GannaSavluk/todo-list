export enum List {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed',
}

export type ListType = keyof typeof List
export type TodoListType = { done: boolean; taskName: string; id: string | number }
