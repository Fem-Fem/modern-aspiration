import React from 'react';
import Goal from './Goal';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import GoalShow from './GoalShow';


const Goals = props => {
  const goalsList = props.goals.map(goal => <Goal key={goal.id} goal={goal} {...goal} deleteGoal={props.deleteGoal}/>)
  
  return (
    <Container>
      {goalsList}
    </Container>
  );

};


export default Goals;
