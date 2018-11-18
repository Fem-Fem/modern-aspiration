import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import AddGoal from './components/Goals/AddGoal'
import GoalsContainer from './containers/GoalsContainer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose;

const store =
createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const About = () => <h1>My About Component</h1>

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path='/' component={App} />
      <Route exact path='/about' render={About} />
      <Route exact path='/goals/new' component={AddGoal} />
      <Route exact path='/goals' component={GoalsContainer} />
    </React.Fragment>
  </Router>), 
  document.getElementById('root')
);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
