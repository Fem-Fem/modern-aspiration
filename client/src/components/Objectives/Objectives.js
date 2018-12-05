import React from 'react';
import Objective from './Objective'

const Objectives = props => {
  const objectivesList = props.objectives.map(objective => 
    <li className="objective-items">
      <Objective 
        key={objective.id} 
        id={objective.id}
        description={objective.description} 
        deleteObjective={props.deleteObjective}
        toggleCompleted={props.toggleCompleted}
      />
    </li>)

  return (
    <div className="objectives-box"> 
      <h1>{props.goal.aim}</h1>
      <strong>Key Objectives</strong>
      <ul>
        {objectivesList}
      </ul>
    </div>
  );

};

export default Objectives;