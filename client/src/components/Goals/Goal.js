import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Counter from '../Counter'

const Goal = ({ aim, deleteGoal, id }) => {
  return(
    <div className="goal">
      <NavLink key={id} to={`/goals/${id}/objectives`}><h3>{aim}</h3></NavLink>
      <Button className="delete-button" basic color='red' size='mini' onClick={() => deleteGoal(id)}>Delete</Button>

      <Counter />
    </div>
  )
}

export default Goal;