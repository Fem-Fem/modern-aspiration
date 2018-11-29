import React from 'react';
import Objective from './Objective'

const Objectives = props => {
  const objectivesList = props.objectives.map(objective => 
    <li>
      <Objective key={objective.id} id={objective.id}
        description={objective.description} deleteObjective={props.deleteObjective} />
    </li>)

  return (
    <div> <strong>Key Objectives</strong>
      <ul>
        {objectivesList}
      </ul>
    </div>
  );

};

export default Objectives;