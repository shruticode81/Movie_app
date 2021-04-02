import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'

// const logger = function({dispatch,getState}){
//   return function(next){ //calling middleware
//     return function(action){
//       //middleware code
//       console.log('ACTION_TYPE=',action.type);
//       next(action); // calling dispatch() func to send undated action
//     }
//   }
// }
// another way of writing middleware
const logger= ({dispatch,getState})=>(next)=>(action)=>{
    console.log('ACTION_TYPE=',action.type);
      next(action); // calling dispatch() func to send undated action
}

const store = createStore(rootReducer,applyMiddleware(logger));
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

