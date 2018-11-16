import React, { Component } from 'react';

const Goal = ({ aim, strategy, category, objectives }) => (
  <div className="Goal">
         <h3>Aspiration: {aim}</h3>
         <h4>Strategy: {strategy}</h4>
         <h5>Category: {category}</h5>
       </div>
)

export default Goal;