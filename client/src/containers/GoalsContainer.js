import React, { Component } from 'react';
import GoalsList from '../components/Goals/GoalsList';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from  '../actions/goalsActions';
import { Container } from 'semantic-ui-react';

class GoalsContainer extends Component {

  componentDidMount(){
    this.props.fetchGoals()
  }
  
  render(){
    return(
      <Container fluid textAlign='justified'>
        
        <GoalInput />
        <GoalsList goals={this.props.goals} deleteGoal={this.props.deleteGoal}/> 
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goalsData
  }
}

/* The connect function calls the mapStateToProps() function each time there is a change in state.
That mapStateToProps() function receives the state as its first argument and it can happily ignore the stores state and 
return whatever it likes.

Connect also takes the return value of the mapStateToProps() function and passes it to the component that is in those last set of parentheses.
We are taking part of the state and mapping them as props to the component
*/

export default connect(mapStateToProps, { fetchGoals, deleteGoal })(GoalsContainer);


/*
Connect()
Whatever function we pass to the connect() function will be called
each time the state changes, and the first argument to that function,
whatevver it's name, will be the state of the store
ie. 
export default connect( state => ({items: state.items})(App))
*/