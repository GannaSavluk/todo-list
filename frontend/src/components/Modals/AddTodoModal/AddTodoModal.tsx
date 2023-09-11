import React, {useState} from 'react';
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
            onChange={(e) => setData(e?.currentTarget?.value)}
            defaultValue={value}
        />
      </label>
      <footer>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSave(data, value ? 'edit' : 'create', id);
            onClose();
          }}
        >
         Create
        </button>
        <button type="reset" onClick={onClose}>Reset</button>
      </footer>
    </form>
  </Modal>
}

export default AddTodoModal;
