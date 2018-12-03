import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class ObjectiveInput extends Component {
  constructor(){
    super()
    this.state = {
      description: ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addObjective(this.state, this.props.goalId);
    this.setState({
      description: ''
    })
  }

  render(){
    return(
  
      <Form className="new-objective-form" onSubmit={(e) =>this.handleOnSubmit(e)}>

        <Form.Field>
          <label>Add Objective</label>
          <input placeholder="Define the milestones to help you reach your goal" id="description" required value={this.state.description} onChange={(e) =>this.handleChange(e)} />
        </Form.Field>

        <Button size='mini' type="submit">Submit</Button>
      </Form>
  
    )
  }
}

export default ObjectiveInput;
  