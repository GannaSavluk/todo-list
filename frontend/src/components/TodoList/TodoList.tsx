import React, { memo } from 'react';
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";
import { TodoListType, Icons } from "../types/todoList";
import trashIcon from './trash.svg'
import editIcon from "./editIcon.svg"

export type TodoListProps = {
    onChange: (val: number | string, type: 'delete' | 'update') => void;
    todos: TodoListType[];
    openModal: (id: string) => void;
}

function TodoList({ onChange, todos, openModal }: TodoListProps): JSX.Element {

  return (
    <div className="todo-list">
        {todos.length > 0 && todos.map((task) => {
            return (
                <div
                    key={task.id}
                    className="one-task"
                    onClick={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.id === Icons.Delete) onChange(task.id, 'delete');
                        else if (target.id === Icons.Edit) openModal(task.id.toString());
                        else onChange(task.id, 'update');
                    }}
                >
                    <TodoItem
                        value={task.done}
                        label={task.taskName}
                    />
                    <div className="icons-wrapper">
                        <img
                         src={editIcon}
                         alt={Icons.Edit}
                         width="17"
                         id={Icons.Edit}
                        />
                        <img
                         src={trashIcon}
                         alt={Icons.Delete}
                         width="17"
                         id={Icons.Delete}
                        />
                    </div>
                </div>
            )
        })}
    </div>
  );
}

export default memo(TodoList);
