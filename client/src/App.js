import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import AddGoal from './components/Goals/AddGoal';
import GoalsContainer from './containers/GoalsContainer';

//Semantic-Ui-Components
import { Container, Header } from 'semantic-ui-react';




class App extends Component {
  render() {
    return (
      <Container>
        {/* <Header as='h1' className="main-header App-Header">Modern Aspiration</Header> */}
        <h1 className="App-header">Modern Aspiration</h1>
          <Header as='h3'className="tagline">The starting point of all achievement is DESIRE. Weak desire brings weak results, just a small fire makes a small amount of heat. - Napolean Hill</Header>
    
       
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
