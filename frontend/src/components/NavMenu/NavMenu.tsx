import React from 'react';
import {List, ListType} from "../types/todoList";
import './NavMenu.css'

type NavMenuProps = { type: ListType; onChange: (val: ListType) => void }
const listTypeArray: ListType[] = Object.values(List);
function NavMenu({type = 'All', onChange}: NavMenuProps): JSX.Element {

  return (
          <nav className="nav-menu">
              {listTypeArray.map((item) => {
                  return (
                      <a key={item} onClick={() => onChange(item)} className={item === type ? 'active-list' : ''}>
                         {item}
                      </a>
                  )
              })}
              <button>+</button>
          </nav>
  );
}

export default NavMenu;
