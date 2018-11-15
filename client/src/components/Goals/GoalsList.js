import React, { Component } from 'react';
import Goal from './Goal'


export default class GoalsList extends Component {
  render(){
    const { goals }  = this.props; 
  
    const listGoals = goals.map(g => {
      return (
        <li><Goal aim={g.aim} goal={g} strategy={g.strategy} category={g.category}/></li>
      )
    })
    
    return(
      <ol>
        {listGoals}
      </ol>
    )
   
  }
}

