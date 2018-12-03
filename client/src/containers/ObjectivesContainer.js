import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
import { addObjective, deleteObjective, fetchGoalObjectives } from '../actions/objectivesActions';
import { connect } from 'react-redux';


class ObjectivesContainer extends Component {

  componentDidMount() {
    this.props.fetchGoalObjectives(this.props.match.params.goalId)
  }

  
  render(){
    return(
      <div>
        ObjectivesContainer
        <Objectives objectives={this.props.objectives} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  objectives: state.objectives.objectivesData
})

const mapDispatchToProps = dispatch => ({
  fetchGoalObjectives: goalId => dispatch(fetchGoalObjectives(goalId)),
  addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId)),
  deleteObjective: objectiveId => dispatch(deleteObjective(objectiveId))
})

export default connect(mapStateToProps, mapDispatchToProps)( ObjectivesContainer);
