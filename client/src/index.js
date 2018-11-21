import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// redux store setup
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose;

// eslint-disable-next-line 
const store =
createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
//pass the store a reducer to change state
ReactDOM.render((   
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>), 
  document.getElementById('root')
);

/* The Provider Component: 
Does 2 things: 
1. alerts the app when there has been a change in state.
2. rerenders the React app. 
To avoid passing the store as a prop, we use the Provider Component.
The Provider component wraps the top level Element (App) and is the 
only Component where store is passed in.
By including the Provider, we're able to access the Redux store and/or dispatch
actions from any component we want.
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
