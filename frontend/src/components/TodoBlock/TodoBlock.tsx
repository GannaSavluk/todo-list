import React, {useCallback, useEffect, useState} from 'react';
import './TodoBlock.css'
import TodoList from "../TodoList/TodoList";
import NavMenu from "../NavMenu/NavMenu";
import {List, ListType, TodoListType} from "../types/todoList";


const defaultTodo: TodoListType[] = [
    {done: true, taskName: 'wash hands', id: 'vbvxddsdcxyt6'},
    {done: false, taskName: 'brush teeth', id: 'v76frtfcxyt6'},
]

const handleListType = (item: ListType, list: TodoListType[]): TodoListType[] => {
    switch (item) {
        case List.All: return list;
        case List.Active: return list.filter((el) => !el.done)
        case List.Completed: return list.filter((el) => el.done)
        default: return list;
    }
}
function TodoBlock(): JSX.Element {
    const [initialTodos, setInitialTodos] = useState<TodoListType[]>(defaultTodo)
    const [currentTodoList, setCurrentTodoList] = useState<TodoListType[]>([])
    const [listType, setListType] = useState<ListType>('All')

    useEffect(() => {
        const currentList = handleListType(listType, initialTodos)
        setCurrentTodoList(currentList)
    },[listType, initialTodos])

    const updateTodos = useCallback((id: number | string, type = 'update') => {
        let updatedTodos = [...initialTodos]
        if (type === 'update') {
            const todoIndex = updatedTodos.findIndex((el) => el.id === id)
            updatedTodos[todoIndex] = {...updatedTodos[todoIndex], done: !updatedTodos[todoIndex].done}
        }
        if (type === 'delete') {
            updatedTodos = updatedTodos.filter((el) => el.id !== id) || []
        }
        setInitialTodos(updatedTodos)
    },[currentTodoList])

  return (
      <div className="todo-block">
          <header>
              <h1>My todos</h1>
          </header>
          <NavMenu type={listType} onChange={setListType} />
          <TodoList
              onChange={updateTodos}
              todos={currentTodoList}
          />
      </div>
  );
}

export default TodoBlock;
