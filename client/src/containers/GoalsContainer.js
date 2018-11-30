import React, { Component } from 'react';
import Goals from '../components/Goals/Goals';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from  '../actions/goalsActions';
import { Container } from 'semantic-ui-react';
import GoalsHeader from '../components/GoalsHeader';
import { addObjective, deleteObjective } from '../actions/objectivesActions'


class GoalsContainer extends Component {

  componentDidMount(){
    this.props.fetchGoals()
  }
  
  render(){
  
    return(
      <Container>
        
        <GoalInput />
        <GoalsHeader />
        <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal} addObjective={this.props.addObjective} deleteObjective={this.props.deleteObjective}/> 
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goalsData
  }
}


const mapDispatchToProps = dispatch => ({
  addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId)),
  deleteObjective: objectiveId => dispatch(deleteObjective(objectiveId)),
  fetchGoals: () => dispatch(fetchGoals()),
  deleteGoal: (goalId) => dispatch(deleteGoal(goalId))
})


/* The connect function calls the mapStateToProps() function each time there is a change in state.
That mapStateToProps() function receives the state as its first argument and it can happily ignore the stores state and 
return whatever it likes.

Connect also takes the return value of the mapStateToProps() function and passes it to the component that is in those last set of parentheses.
We are taking part of the state and mapping them as props to the component
*/

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);



/*
Connect()
Whatever function we pass to the connect() function will be called
each time the state changes, and the first argument to that function,
whatevver it's name, will be the state of the store
ie. 
export default connect( state => ({items: state.items})(App))
*/