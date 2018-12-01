import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ObjectivesContainer from '../../containers/ObjectivesContainer';
import { addObjective, deleteObjective, fetchGoalObjectives } from '../../actions/objectivesActions';
import { connect } from 'react-redux';


class Goal extends Component {


  render(){
    const {aim, strategy, category, goal, objectives } = this.props;
    
    return(
      <div className="goal">
        <h3>{aim}</h3>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <Button basic color='red' size='mini' onClick={ () => this.props.deleteGoal(this.props.id)}>Delete</Button>
        <ObjectivesContainer goal={goal} objectives={objectives} deleteObjective={this.props.deleteObjective} addObjective={this.props.addObjective}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchGoalObjectives: goalId => dispatch(fetchGoalObjectives(goalId)),
  addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId)),
  deleteObjective: objectiveId => dispatch(deleteObjective(objectiveId))
})

export default connect(null, mapDispatchToProps)(Goal);