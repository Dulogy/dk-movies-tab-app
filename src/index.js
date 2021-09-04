import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux" ;

import './index.css';
import App from './Components/App';
import movies from "./Reducer/index" ;

const store = createStore(movies);
console.log("store",store) ;
console.log("getState",store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);