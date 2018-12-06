import React, { Component } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

export default class Objective extends Component {
  constructor(){
    super()
    this.state = {
      completed: false
    }
  }

  handleCheck = e => {
    e.preventDefault();
    if (this.state.completed === false){
      this.setState({completed: true})
    } else {
      this.setState({completed: false})
    }
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
        <Checkbox value={this.props.completed} checked={this.state.completed} onChange={(e) => this.handleCheck(e)} />{this.props.description}        
      </div>
    )
  }
}
