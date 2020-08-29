import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import VisibilityFilters from './components/visibilityFilters/VisibilityFilters';

function App() {
  return (
    <div className="App">
      
      <AddTodo />
      <h1>Todo List</h1>
      <hr/>
      <TodoList />
      <hr/>
      <VisibilityFilters />
    </div>
  );
}

export default App;
