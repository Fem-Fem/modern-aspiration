import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

class GoalInput extends Component {

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
    e.preventDefault()
    this.props.dispatch({type: "ADD_GOAL", goal: this.state })
  }

  render(){
    return(
      <Form className="new-goal-form" onSubmit={this.handleOnSubmit}>

        <Form.Field>
          <label>Your Aim:</label>
          <input placeholder="Aim" id="aim" onChange={this.handleChange} />
        </Form.Field>

        <Form.Field>
          <label>Category</label>
          <input placeholder="Category" id="category" onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Your Strategy:</label>
          <input placeholder="How will you get there?" id="strategy" onChange={this.handleChange} />
        </Form.Field>

        <Button type="submit">Add Goal</Button>
      </Form>
    )
  }
}

export default connect()(GoalInput);

// just like we can write code like connect(mapStateToProps)(App) to add new props to our app compoenent, we can pass
// connect() a second argument, and add our action creator as props. Then we can reference this action creator as a prop
// to call it from our component. 


//TO DO:
// MAKE ACTION CREATOR FUNCTION TO ADD GOAL IN ACTIONS/ADDGOAL