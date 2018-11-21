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

/* The connect function calls the mapStateToProps() function each time there is a change in state.
That mapStateToProps() function receives the state as its first argument and it can happily ignore the stores state and 
return whatever ti likes.

Connect also takes the return value of the mapStateToProps() function and passes it to the component that is in those last set of partentheses.
We are taking part of the state and mapping them as props to the component
*/

export default connect(mapStateToProps)(GoalsContainer);


/*
Connect()
Whatever function we pass to the connect() function will be called
each time the state changes, and the first argument to that function,
whatevver it's name, will be the state of the store
ie. 
export default connect( state => ({items: state.items})(App))
*/