import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddGoal extends Component {

  constructor(){
    super()
    this.state = {
      aim: "",
      category: "",
      strategy: ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({type: "ADD_GOAL", goal: this.state })
  }
  
  render(){
    return(
      <div className="main-content">
        <h3>New Goal</h3>
        <form onSubmit={this.handleOnSubmit}>

          <p>Your Aim:</p>
          <input 
            type="text" 
            id="aim" 
            onChange={this.handleChange}
            placeholder="What would you like to achieve" />

          <p>Category</p>
          <input 
            type="text"
            id="category"
            onChange={this.handleChange}
            placeholder="Category" />

          <p>Your Strategy</p>
          <input 
            type="content-box"
            id="strategy"
            onChange={this.handleChange}
            placeholder="How will you do it" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect()(AddGoal);