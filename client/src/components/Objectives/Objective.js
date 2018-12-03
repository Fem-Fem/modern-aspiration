import React, { Component } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';


export default class Objective extends Component {
  
  constructor(){
    super()
    this.state = {
      completed: false
    }
  }

  toggleCompleted(){
    this.setState({
      completed: true
    })
    
  }
  
  render(){
    return(
      <div>
        <Checkbox onChange={() => this.toggleCompleted()} value={this.state.completed}/>{this.props.description}
        <Button basic color='red' size='mini' onClick={() => this.props.deleteObjective(this.props.id)}> delete </Button>
      </div>
    )
  }

}
