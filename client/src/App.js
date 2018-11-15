import React, { Component } from 'react';
import './App.css';
import GoalsContainer from './containers/GoalsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Modern Aspiration</h1>
        <GoalsContainer />
      </div>
    );
  }
}

export default App;
