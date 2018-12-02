import React, { Component } from 'react';
import Goals from '../components/Goals/Goals';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from  '../actions/goalsActions';
import { Container } from 'semantic-ui-react';
import GoalsHeader from '../components/Goals/GoalsHeader';
import { Route } from 'react-router-dom';
import GoalShow from '../components/Goals/GoalShow';


class GoalsContainer extends Component {

  componentDidMount(){
    this.props.fetchGoals()
  }
  
  render(){
    return(
      <Container>
        
        <GoalInput />
        <GoalsHeader />

        <Route exact path={this.props.match.url} render={()=>(<h3>Select a Goal From the List </h3>)}  />
        <Route exact path={`${this.props.match.url}/:goalId`} component={GoalShow} />

        <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal}/> 
        
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