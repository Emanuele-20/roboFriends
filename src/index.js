import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './Hello'
import London from "./London"
import 'tachyons'; 
import reportWebVitals from './reportWebVitals';





ReactDOM.render(  <Hello greeting = {'Hello React Ninja'}/>,  document.getElementById('root')   );
ReactDOM.render(  <London addAProp = {'Trying to add a prop'}/>, document.getElementById('root')    )








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
