import React from 'react';

const Goal = ({ aim, strategy, category, objectives }) => (
  <div className="Goal">
    <h3>{aim}</h3>
    <strong>Strategy:</strong>
      <p>{strategy}</p>
    <strong>Category:</strong>
        <p>{category}</p>
  </div>
)

export default Goal;