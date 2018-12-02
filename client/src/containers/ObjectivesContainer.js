import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
import { addObjective, deleteObjective, fetchGoalObjectives } from '../actions/objectivesActions';
import { connect } from 'react-redux';


class ObjectivesContainer extends Component {
  render(){
    debugger
    return(
      <div>
        ObjectivesContainer
          {/* <Objectives objectives={this.props.objectives} deleteObjective={this.props.deleteObjective}/>
          <ObjectiveInput addObjective={this.props.addObjective} goalId={this.props.goal.id} /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGoalObjectives: goalId => dispatch(fetchGoalObjectives(goalId)),
  addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId)),
  deleteObjective: objectiveId => dispatch(deleteObjective(objectiveId))
})

export default connect(null, mapDispatchToProps)( ObjectivesContainer);
