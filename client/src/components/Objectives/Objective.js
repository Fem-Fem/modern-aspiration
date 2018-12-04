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
    this.state.completed ? this.setState({completed: false}) : this.setState({completed: true})
    // if (this.state.completed){
    //   this.setState({
    //     completed: false
    //   })
    // } else {
    //   this.setState({
    //     completed: true
    //   })
    // }
    
  }
  
  render(){
    return(
      <div>
        <Checkbox checked={this.state.completed} onChange={() => this.toggleCompleted()} value={this.state.completed}/>{this.props.description}
        <Button basic color='red' size='mini' onClick={() => this.props.deleteObjective(this.props.id)}> delete </Button>
      </div>
    )
  }

}
