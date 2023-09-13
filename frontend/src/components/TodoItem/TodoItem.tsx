import React from 'react';

export type TodoItemProps = {
    value: boolean;
    label: string
}

function TodoItem({value, label}: TodoItemProps) {
  return (
    <div className="todo-item">
      <input
          type="checkbox"
          id="todoCheckbox"
          checked={value}
          onChange={() => null}
      />
      <label htmlFor="todoCheckbox">{label}</label>
    </div>
  );
}

export default TodoItem;
