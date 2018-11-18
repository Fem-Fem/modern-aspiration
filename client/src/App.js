import React, { Component } from 'react';
import './App.css';
import GoalsContainer from './containers/GoalsContainer';

import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import AddGoal from './components/Goals/AddGoal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Modern Aspiration</h1>
        hello
        <NavBar />
        
        <div>
          <Route exact path='/goals/new' component={AddGoal} />
          <Route exact path='/goals' component={GoalsContainer} />
        </div>
      </div>
    );
  }
}

export default App;
