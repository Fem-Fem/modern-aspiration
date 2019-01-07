import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { addGoal } from '../../actions/goalsActions'; 
import { connect } from 'react-redux'

class GoalInput extends Component {
  constructor() {
    super()
    this.state = {
      aim: "",
      strategy: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addGoal(this.state);
    this.setState({
      aim: "",
      strategy: ""
    })
  }

  render() {
    return(
      <Form inverted className="new-goal-form" onSubmit={(e) =>this.handleOnSubmit(e)}>
        <h5>Set a New Goal</h5>
        <Form.Field>
          <label className="form-label">AIM</label>
          <input placeholder="Your Next Achievement" id="aim" required value={this.state.aim} onChange={(e) => this.handleChange(e)} />
        </Form.Field>

        <Form.Field>
          <label className="form-label">Your Strategy:</label>
          <textarea placeholder="What's your plan?" required id="strategy" value={this.state.strategy} onChange={this.handleChange} />
        </Form.Field>

        <Button type="submit">Add Goal</Button>
      </Form>
    )
  }
}

export default connect(null, { addGoal })(GoalInput);