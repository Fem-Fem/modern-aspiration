import React from 'react';

// const Goal = ({ aim, strategy, category, objectives }) => (
  // <div className="Goal">
  //   <h3>{aim}</h3>
  //   <strong>Strategy:</strong>
  //     <p>{strategy}</p>
  //   <strong>Category:</strong>
  //       <p>{category}</p>
//   </div>
// )

class Goal extends React.Component {
  handleClick = () => {
    this.props.deleteGoal(this.props.id)
  }

  render(){
    const {aim, strategy, category, key, objectives } = this.props;
    return(
      <div className="Goal">
        <h3>{aim}</h3>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <button onClick={() => this.handleClick()}>Delete</button>
      </div>
    )
  }
}

export default Goal;