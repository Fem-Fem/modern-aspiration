import React, { Component } from 'react';
import GoalsList from '../components/Goals/GoalsList';
import AddGoal from '../components/Goals/AddGoal';
import { connect } from 'react-redux';


class GoalsContainer extends Component {
  
  render(){
    return(
      <div> 
        hi
        <GoalsList goals={this.props.goals}/>
        <AddGoal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps)(GoalsContainer);


/*
Connect()
Whatever function we pass to the connect() function will be called
each time the state changes, and the first argument to that function,
whatevver it's name, will be the state of the store
ie. 
export default connect( state => ({items: state.items})(App))
*/