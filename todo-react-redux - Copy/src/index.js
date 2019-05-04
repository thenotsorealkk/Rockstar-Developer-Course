import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

var autoID = 0;

var store = createStore((state = [], action) => {
     switch (action.type) {
          case 'ADD':
               return [{
                    id: ++autoID,
                    subject: action.value,
                    status: 0
               }, ...state];
               break;
          case 'DEL':
               return state.filter(item => item.id !== action.id);
          case 'DONE':
               return state.map(item => {
                    if (item.id === action.id) item.status = 1;
                    return item;
               });
               break;
          case 'UNDO':
               return state.map(item => {
                    if(item.id === action.id) item.status = 0;
                    return item;
               });
               break;
          case 'CLEARALL':
               return state.filter(item => item.status === 3)
               break;
          case 'CLEARALLTODO':
               return state.filter(item => item.status === 1)
               break;
          case 'CLEARALLDONE':
               return state.filter(item => item.status === 0)
          default: return state

     }
});


store.dispatch({ type : 'ADD', value: "Buy a rope"});
store.dispatch({ type : 'ADD', value: "Tie the rope to the ceiling"});
store.dispatch({ type : 'ADD', value: "Get a chair"});
store.dispatch({ type : 'ADD', value: "Get on the chair with the rope around the neck"});
store.dispatch({ type : 'DONE', id : 1});
store.dispatch({ type : 'DONE', id : 2});

ReactDOM.render(
     <Provider store = {store}>
          <App />
     </Provider>
     ,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
