import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoBlock from "./components/TodoBlock/TodoBlock";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route
                    path={'*'}
                    element={
                    <CardContainer>
                        <TodoBlock />
                    </CardContainer>}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
