import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux" ;
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App';
import combineReducers from "./Reducer/index" ; // rootReducer also both same job performed

// function logger(obj,next,action)   curry-function
// logger(obj)(next)(action)    internally call as
// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       // middleware code
//       console.log('action type',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch,action}) => (next) => (action) => {
  // logger code
  if(typeof action !== 'function')
  console.log('action type',action.type);
  next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch) ;
//     return;
//   }
//   next(action) ;
// }

// thunk middleware


const store = createStore(combineReducers,applyMiddleware(logger,thunk));
console.log("store",store) ;
console.log("getState",store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);