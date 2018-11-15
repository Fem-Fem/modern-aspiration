import React, { Component } from 'react';

export default class Goal extends Component {
  render(){
    const { aim, strategy, category, objectives } = this.props;

    return(
      <div className="Goal">
        <h3>Aspiration: {aim}</h3>
        <h4>Strategy: {strategy}</h4>
        <h5>Category: {category}</h5>
      </div>
    )
  }
}