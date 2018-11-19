import React, { Component } from 'react';

export default class AddGoal extends Component {

  constructor(){
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      value: e.target.value
    })

  }
  render(){
    return(
      <div className="main-content">
        <h3>New Goal</h3>
        <form>
          <input type="text" 
            value={this.state.value} 
            onChange={(e) => this.handleChange(e)}
            placeholder="What would you like to achieve" />

          {this.state.value}

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}