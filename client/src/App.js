import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import GoalInput from './components/Goals/GoalInput';
import GoalsContainer from './containers/GoalsContainer';
import ObjectivesContainer from './containers/ObjectivesContainer';


//Semantic-Ui-Components
import { Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-header">Modern Aspiration</h1>
        <Container>
          <Header as='h3' className='tagline'>Tough times don't last; tough people do.</Header>
          <NavBar />
          
          <Container>
            <Route exact path='/' render={Home} />
            <Route exact path='/goals/new' component={GoalInput} />
            <Route exact path='/goals' component={GoalsContainer} />
            <Route exact path='/goals/:goalId/objectives' component={ObjectivesContainer} />
          </Container>
        
        </Container>
      </div>
    );
  }
}

export default App;


