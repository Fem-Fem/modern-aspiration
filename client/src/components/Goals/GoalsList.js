import React from 'react';
import Goal from './Goal';

const GoalsList = props => {
  const goalsList = props.goals.map(goal => <li><Goal key={goal.id} {...goal} deleteGoal={props.deleteGoal}/></li>)

  return (
    <ol>
      {goalsList}
    </ol>
  );

};


export default GoalsList;
