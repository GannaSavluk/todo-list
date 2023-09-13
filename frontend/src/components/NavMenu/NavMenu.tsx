import React from 'react';
import {List, ListType} from "../types/todoList";
import './NavMenu.css'
import { Link } from 'react-router-dom';

type NavMenuProps = {
    type: ListType;
    onChange: (val: ListType) => void;
    openModal: () => void;
}

const listTypeArray: ListType[] = Object.values(List);

function NavMenu({type = 'All', onChange, openModal}: NavMenuProps): JSX.Element {

  return (
          <nav className="nav-menu">
              <ul>
                {listTypeArray.map((item) => {
                  return (
                      <li key={item} >
                        <Link
                            to={`${item.toLowerCase()}`}
                            onClick={() => onChange(item)}
                            className={item === type ? 'active-list' : ''}
                        >
                            {item}
                        </Link>
                      </li>
                  )
                })}
              </ul>
              <button onClick={openModal}>+</button>
          </nav>
  );
}

export default NavMenu;
