import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

/// Curring form of function logger(obj , next, action)
/// logger(obj)(next)(action)
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       ///middleware code is:
//       console.log('ACTION_TYPE =', action.type);
//       next(action);
//     }
//   }
// }

/// modify middleware 
const logger = ({dispatch, getState}) => (next) => (action) => {
  /// logger code
   if(typeof action !== 'function'){
    console.log('ACTION_TYPE =', action.type);
   }
    next(action);
}

const thunk = ({dispatch, getState}) => (next) => (action) => {
  /// logger code
  if(typeof action === 'function'){
    action(dispatch);
    return;
  }
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export const StoreContext = createContext();

class Provider extends React.Component{
  render() {
    const {store} = this.props;
   return  <StoreContext.Provider value={store}> {this.props.children}</StoreContext.Provider>
  }
}

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
