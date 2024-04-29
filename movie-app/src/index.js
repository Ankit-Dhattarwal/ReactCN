import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

/// Curring form of function logger(obj , next, action)
/// logger(obj)(next)(action)
const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      ///middleware code is:
      console.log('ACTION_TYPE =', action.type);
      next(action);
    }
  }
}


const store = createStore(rootReducer, applyMiddleware(logger));

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
