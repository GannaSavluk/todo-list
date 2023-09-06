import React from 'react';
import './App.css';
import TodoBlock from "./components/TodoBlock/TodoBlock";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  return (
    <div className="App">
        <CardContainer>
            <TodoBlock />
        </CardContainer>
    </div>
  );
}

export default App;
