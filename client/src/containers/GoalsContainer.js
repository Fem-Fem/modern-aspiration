import React, { Component } from 'react';
import GoalsList from '../components/Goals/GoalsList';
import AddGoal from '../components/Goals/AddGoal'


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
      <div> 
        <GoalsList goals={this.state.goals}/>
        <AddGoal />
      </div>
    )
  }
}

export default GoalsContainer;