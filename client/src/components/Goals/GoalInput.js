import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { addGoal } from '../../actions/goalsActions'

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
    e.preventDefault();
    this.props.addGoal(this.state);
    this.setState({
      aim: '',
      category: '',
      strategy: ''
    })
  }


  render(){
    return(
      <Form className="new-goal-form" onSubmit={(e) =>this.handleOnSubmit(e)}>

        <Form.Field>
          <label>Your Aim:</label>
          <input placeholder="Aim" id="aim" required value={this.state.aim} onChange={(e) =>this.handleChange(e)} />
        </Form.Field>

        <Form.Field>
          <label>Category</label>
          <input placeholder="Category" required id="category" value={this.state.category} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Your Strategy:</label>
          <input placeholder="How will you get there?" required id="strategy" value={this.state.strategy} onChange={this.handleChange} />
        </Form.Field>

        <Button type="submit">Add Goal</Button>
      </Form>
    )
  }
}

export default connect(null, { addGoal })(GoalInput);

// just like we can write code like connect(mapStateToProps)(App) to add new props to our app compoenent, we can pass
// connect() a second argument, and add our action creator as props. Then we can reference this action creator as a prop
// to call it from our component. 


//TO DO:
// MAKE ACTION CREATOR FUNCTION TO ADD GOAL IN ACTIONS/ADDGOAL