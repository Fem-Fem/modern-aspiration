import React, { Component } from 'react';
import ObjectivesList from '../components/Objectives/ObjectivesList';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
// import { connect } from 'react-redux';
// import { fetchObjectives, deleteObjective } from  '../actions/ObjectivesActions';

class ObjectivesContainer extends Component {
  
  render(){
    return(
      <div>
        
        <ObjectiveInput />
        <ObjectivesList  /> 
        
      </div>
    )
  }
}



export default ObjectivesContainer;