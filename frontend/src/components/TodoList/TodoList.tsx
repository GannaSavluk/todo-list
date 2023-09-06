import React, { memo } from 'react';
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";
import { TodoListType} from "../types/todoList";
import trashIcon from './trash.svg'

export type TodoListProps = {
    onChange: (val: number | string, type: 'delete' | 'update') => void,
    todos: TodoListType[],
}

function TodoList({ onChange, todos }: TodoListProps): JSX.Element {

  return (
    <div className="todo-list">
        {todos.length > 0 && todos.map((task) => {
            return (
                <div
                    key={task.id}
                    className="one-task"
                    onClick={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.tagName === 'IMG') onChange(task.id, 'delete')
                        else onChange(task.id, 'update')
                    }}
                >
                    <TodoItem
                        value={task.done}
                        changeValue={() => onChange(task.id, 'update')}
                        label={task.taskName}
                    />
                    <img
                        src={trashIcon}
                        alt="delete icon"
                        width="17"
                    />
                </div>
            )
        })}
    </div>
  );
}

export default memo(TodoList);
