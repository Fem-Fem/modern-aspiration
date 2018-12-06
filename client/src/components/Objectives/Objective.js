import React, { Component } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

export default class Objective extends Component {
  constructor() {
    super()
    this.state ={
      completed: false
    }
  }

  handleCheck = e => {
    e.preventDefault();
    this.props.toggleCompleted(this.props.id)
  }

  handleClick = e => {
    e.preventDefault();
    alert('clicked delete Icon!')
  }
  
  render() {
    return(
      <div>
        <Icon className="pointer" name='delete' color='red' onClick={() => this.props.deleteObjective(this.props.id)} />
        <Checkbox checked={this.props.completed} onChange={(e) => this.handleCheck(e)} value={this.props.completed}/>{this.props.description}        
      </div>
    )
  }
}
