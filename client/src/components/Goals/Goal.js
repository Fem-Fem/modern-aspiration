import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Goal extends Component {
  render(){

    const {aim, strategy, category, goal } = this.props;
    
    return(
      <div className="goal">
        <NavLink key={this.props.id} to={`/goals/${goal.id}/objectives`}><h3>{aim}</h3></NavLink>
        
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <Button basic color='red' size='mini' onClick={ () => this.props.deleteGoal(this.props.id)}>Delete</Button>

      </div>
    )
  }
}




export default Goal;