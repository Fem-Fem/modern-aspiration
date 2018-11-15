import React, { Component } from 'react';
import AddGoal from '../components/Goals/AddGoal';
import GoalList from '../components/Goals/GoalList';


class GoalsContainer extends Component {
  render(){
    return(
      <div>
        <AddGoal />
        <GoalList />
      </div>
    )
  }
}

export default GoalsContainer;