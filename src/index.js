import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers'



const store = createStore(movies)
console.log(store);
// console.log('BeforeState',store.getState());

// //we will use dispatch to send actions and change the state
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
// console.log('Afterstate',store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

