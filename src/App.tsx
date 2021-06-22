import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import TodoInput from './features/todoList/todoInput';
import TodoList from './features/todoList/todoList';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MaterialUI from './features/todoList/materialUi';

function App() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
      <MaterialUI />
    </Provider>
    
  );
}

export default App;
