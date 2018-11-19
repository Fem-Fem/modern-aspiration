import React, { Component } from 'react';

export default class AddGoal extends Component {
  render(){
    return(
      <div className="main-content">
        <h3>New Goal</h3>
        <form>
          <input type="text" placeholder="What would you like to achieve" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}