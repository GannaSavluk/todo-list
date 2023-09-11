import React, {useCallback, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './TodoBlock.css'
import TodoList from "../TodoList/TodoList";
import NavMenu from "../NavMenu/NavMenu";
import { List, ListType, TodoListType, ModalType } from "../types/todoList";
import AddTodoModal from "../Modals/AddTodoModal/AddTodoModal";

const defaultTodo: TodoListType[] = [
    {done: true, taskName: 'wash hands', id: uuidv4()},
    {done: false, taskName: 'brush teeth', id: uuidv4()},
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
    const [activeId, setActiveId] = useState<string>('')
    const [isAddTodoModalOpened, setAddTodoModalOpened] = useState<boolean>(false)

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

    const onChangeTodos = useCallback((value: string, type?: ModalType, id?: string ) => {
        if (type === 'edit' && id) {
            setInitialTodos(initialTodos.map((todo) => todo.id === id ? {...todo, taskName: value} : todo))
        } else {
            setInitialTodos([...initialTodos, { done: false, id: uuidv4(), taskName: value }])
        }
    },[initialTodos])

  return (
      <div className="todo-block">
          <header>
              <h1>My todos</h1>
          </header>
          <NavMenu type={listType} onChange={setListType} openModal={() => setAddTodoModalOpened(true)} />
          <TodoList
              onChange={updateTodos}
              todos={currentTodoList}
              openModal={(id) => {
                  setActiveId(id);
                  setAddTodoModalOpened(true);
              }}
          />
          <AddTodoModal
              isOpen={isAddTodoModalOpened}
              onClose={() => {
                  setAddTodoModalOpened(false);
                  setActiveId('');
              }}
              onSave={onChangeTodos}
              id={activeId}
              value={currentTodoList.find(el => el.id === activeId)?.taskName || ''}
          />
      </div>
  );
}

export default TodoBlock;
