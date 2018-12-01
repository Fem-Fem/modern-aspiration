import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';

class ObjectivesContainer extends Component {


  render(){
  
    return(
      <div>
          <Objectives objectives={this.props.objectives} deleteObjective={this.props.deleteObjective}/>
          <ObjectiveInput addObjective={this.props.addObjective} goalId={this.props.goal.id} />
      </div>
    )
  }
}

export default ObjectivesContainer;
