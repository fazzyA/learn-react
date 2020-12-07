import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';
import ToDoList from './components/ToDoList';
import Scenerio from './components/Scenerio';
import Home from './pages/Home';
import Main from './pages/Main';


ReactDOM.render(
  <React.StrictMode>
    <Main/>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
