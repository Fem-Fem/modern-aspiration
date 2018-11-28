import React from 'react';
import Objective from './Objective'

const Objectives = props => {
  const objectivesList = props.objectives.map(objective => 
    <li>
      <Objective key={objective.id} goalId={objective.id} id={objective.id}
        description={objective.description} deleteObjective={props.deleteObjective} />
    </li>)

  return (
    <div> <strong>TODO</strong>
      <ul>
        {objectivesList}
      </ul>
    </div>
  );

};

export default Objectives;