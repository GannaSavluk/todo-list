import React from 'react';

export type TodoItemProps = { value: boolean; changeValue: () => void, label: string }

function TodoItem({value, changeValue, label}: TodoItemProps) {
  return (
    <div className="todo-item">
      <input
          type="checkbox"
          id="todoCheckbox"
          checked={value}
          onChange={changeValue}
      />
      <label htmlFor="todoCheckbox">{label}</label>
    </div>
  );
}

export default TodoItem;
