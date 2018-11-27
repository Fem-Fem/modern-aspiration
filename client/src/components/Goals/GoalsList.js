import React from 'react';
import Goal from './Goal';
import { Container } from 'semantic-ui-react';

const GoalsList = props => {
  const goalsList = props.goals.map(goal => <Goal key={goal.id} {...goal} deleteGoal={props.deleteGoal}/>)

  return (
    <Container>
      {goalsList}
    </Container>
  );

};


export default GoalsList;
