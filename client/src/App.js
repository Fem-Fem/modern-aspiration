import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import AddGoal from './components/Goals/AddGoal';
import GoalsContainer from './containers/GoalsContainer';

//Semantic-Ui-Components
import { Container } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';




class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' className="main-header">Modern Aspiration</Header>
          <Header as='h3'className="tagline">TagLine here</Header>
    
       
        <NavBar />
        
          <div>
            <Container>
              <Route exact path='/' render={Home} />
              <Route exact path='/goals/new' component={AddGoal} />
              <Route exact path='/goals' component={GoalsContainer} />
            </Container>
          </div>
         
        </Container>
    );
  }
}

export default App;
