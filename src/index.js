import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 



ReactDOM.render(<App />, document.getElementById('root')); 









// "id" , "name" and "email" are Card's properties so inside the component will be PROPS .
// Now CardList here receive robots(11) as props so I have access now to that property inside the CardList component.


















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
