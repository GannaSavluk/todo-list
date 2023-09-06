import React from 'react';
import './CardContainer.css'

function CardContainer({ children }:{ children: React.ReactNode }): JSX.Element {

  return (
          <div className="card-container">
              {children}
          </div>
  );
}

export default CardContainer;
