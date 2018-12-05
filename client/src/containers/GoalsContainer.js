import React, { Component } from 'react';
import Goals from '../components/Goals/Goals';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal, addGoal } from  '../actions/goalsActions';
import { Container } from 'semantic-ui-react';
import GoalsHeader from '../components/Goals/GoalsHeader';

class GoalsContainer extends Component {

  componentDidMount(){
    this.props.fetchGoals()
  }
  
  render(){
    return(
      <Container>
        
        <GoalInput addGoal={this.props.addGoal}/>
        <GoalsHeader />
        <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal} /> 

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
  fetchGoals: () => dispatch(fetchGoals()),
  deleteGoal: id => dispatch(deleteGoal(id)),
  addGoal: goalInput => dispatch(addGoal(goalInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);