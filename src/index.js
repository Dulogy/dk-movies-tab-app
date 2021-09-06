import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux" ;

import './index.css';
import App from './Components/App';
import combineReducers from "./Reducer/index" ; // rootReducer also both same job performed

const store = createStore(combineReducers);
console.log("store",store) ;
console.log("getState",store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);