import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import GoalInput from './components/Goals/GoalInput';
import GoalsContainer from './containers/GoalsContainer';

//Semantic-Ui-Components
import { Container, Header } from 'semantic-ui-react';




class App extends Component {
  render() {
    return (
      <Container>
        <h1 className="App-header">Modern Aspiration</h1>
          <Header as='h3'className="tagline">The starting point of all achievement is DESIRE. Weak desire brings weak results, just a small fire makes a small amount of heat. - Napolean Hill</Header>
    
       
        <NavBar />
        
        <Container>
          <Route exact path='/' render={Home} />
          <Route exact path='/goals/new' component={GoalInput} />
          <Route exact path='/goals' component={GoalsContainer} />
        </Container>
        
         
      </Container>
    );
  }
}

export default App;
