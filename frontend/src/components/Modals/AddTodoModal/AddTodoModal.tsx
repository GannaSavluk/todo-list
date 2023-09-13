import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './AddTodoModal.css'
import closeIcon from "../closeIcon.svg";
import {ModalType} from "../../types/todoList";

type AddTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string, type?: ModalType, id?: string ) => void;
  value?: string;
  id?: string;
}

function AddTodoModal({ isOpen, onClose, onSave, value = '', id } : AddTodoModalProps): JSX.Element {
  const [data, setData] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => setData(value),[value])

  return <Modal
      className="add-todo-modal"
      isOpen={isOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
  >
    <img
        src={closeIcon}
        alt="delete icon"
        width="17"
        onClick={onClose}
    />
    <form >
      <label htmlFor="add-todo-input">Create your own to-do
        <textarea
            name="add-todo-input"
            autoFocus={true}
            required={true}
            onInput={(e) => setData(e?.currentTarget?.value || '')}
            defaultValue={data}
            placeholder="..."
            style={error ? {borderColor: 'red'} : {}}
        />
      </label>
      <footer>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (!data) setError(true);
            else {
              setError(false);
              onSave(data, value ? 'edit' : 'create', id);
              onClose();
            }
          }}
        >
          {value ? 'Save' : 'Create'}
        </button>
        <button type="reset" onClick={() => setData('')}>Clear</button>
      </footer>
    </form>
  </Modal>
}

export default AddTodoModal;
