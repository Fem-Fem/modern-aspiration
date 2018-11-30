import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';

class ObjectivesContainer extends Component {

  render(){
    return(
      <div>
        Objectives Container
        <ObjectiveInput addObjective={this.props.addObjective} goalId={this.props.goal.id}/>
        <Objectives objectives={this.props.objectives} deleteObjective={this.props.deleteObjective} />
      </div>
    )
  }
}
export default ObjectivesContainer;

/*
1. Goal component renders ObjectivesContainer with prop of goal

2. Objectives Container renders
  a. new objective form
  b. all existing objectives for the given goal
    - on load, fetchObjectives
    - mapStateToProps
    - mapDispatchToProps

*/