import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Class-todoList/Main';
import Animate from './Animations/Animate';
import SlideText from './Animations/SlideText';
import Basic from './Animations/Basic';
import Skeleton from './Animations/Skeleton';


ReactDOM.render(
  <React.StrictMode>
    {/* <Main/> */}
   {/* <SlideText/> */}
   {/* <Basic/> */}
   <Skeleton/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
