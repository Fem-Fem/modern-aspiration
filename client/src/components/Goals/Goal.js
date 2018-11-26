import React, { Component } from 'react';

// const Goal = ({ aim, strategy, category, objectives }) => (
  // <div className="Goal">
  //   <h3>{aim}</h3>
  //   <strong>Strategy:</strong>
  //     <p>{strategy}</p>
  //   <strong>Category:</strong>
  //       <p>{category}</p>
//   </div>
// )

class Goal extends Component {
  render(){
    const {aim, strategy, category, objectives } = this.props;
    return(
      <div className="Goal">
        <h3>{aim}</h3>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <button onClick={ () => this.props.deleteGoal(this.props.id)}>Delete</button>
      </div>
    )
  }
}

export default Goal;