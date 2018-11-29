import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class Objective extends Component {
  
  render(){
    return(
      <div>
        {this.props.description}
        <Button basic color='red' size='mini' onClick={() => this.props.deleteObjective(this.props.id)}> delete </Button>
      </div>
    )
  }

}
