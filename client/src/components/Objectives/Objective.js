import React, { Component } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';


export default class Objective extends Component {
  constructor(){
    super()
    this.state ={
      completed: false
    }
  }

  handleCheck = e => {
    e.preventDefault();
    this.props.toggleCompleted(this.props.id)

  }
  
  render(){
    return(
      <div>
        <Checkbox checked={this.props.completed} onChange={(e) => this.handleCheck(e)} value={this.props.completed}/>{this.props.description}<br/>
        <Button basic color='red' size='mini' onClick={() => this.props.deleteObjective(this.props.id)}> delete </Button>
      </div>
    )
  }

}
