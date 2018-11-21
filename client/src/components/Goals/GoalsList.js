import React from 'react';
import Goal from './Goal';

const GoalsList = ({ goals }) => (
  <div>
    <h3>Your Aspirations</h3>
    <ol>
    {goals.map((goal) => (
      <li>
        <Goal aim={goal.aim} goal={goal} strategy={goal.strategy} 
          category={goal.category} objectives={goal.objectives} />
      </li> ))}
    </ol>
  </div>
);

export default GoalsList;
