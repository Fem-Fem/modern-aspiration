import React, { Component } from 'react';
import GoalsList from '../components/Goals/GoalsList';


class GoalsContainer extends Component {

  constructor(){
    super()
    this.state = {
      goals: []
    }
  }

  componentDidMount(){
    fetch('./api/goals')
      .then(response => response.json())
      .then(goals => this.setState({goals}))
  }
  
  render(){
    return(
      <div className="Goals-container"> 
        <GoalsList goals={this.state.goals}/>
      </div>
    )
  }
}

export default GoalsContainer;