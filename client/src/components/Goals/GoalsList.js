import React, { Component } from 'react';
import Goal from './Goal';

const GoalsList = ({ goals }) => (
  <div>
    <ol>
    {goals.map((goal) => <li><Goal key={goal.id} aim={goal.aim} goal={goal} strategy={goal.strategy} category={goal.category} /></li> )}
    </ol>
  </div>
);

export default GoalsList;
