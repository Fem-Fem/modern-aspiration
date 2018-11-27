import React, { Component } from 'react';
import ObjectivesList from '../components/Objectives/ObjectivesList';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
import { connect } from 'react-redux';

class ObjectivesContainer extends Component {
  

  render(){
    return(
      <div>
        <ObjectivesList goalId={this.props.goal.id} objectives={this.props.objectives} /> 
        <ObjectiveInput goalId={this.props.goal.id}/>
      </div>
    )
  }
}



export default ObjectivesContainer;