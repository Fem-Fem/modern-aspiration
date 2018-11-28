import React, { Component } from 'react';

export default class Objective extends Component {
  
  render(){
    return(
      <div>
        {this.props.description}
        <button onClick={() => this.props.deleteObjective(this.props.id)}> X</button>
      </div>
    )
  }

}
