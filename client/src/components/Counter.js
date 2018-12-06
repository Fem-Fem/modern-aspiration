import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';


export default class Counter extends Component {

  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
     count: prevState.count + 1
     })
    )
  }

  render(){
    return(
      <Button onClick={(e) => this.handleClick(e)}>{this.state.count}</Button>
    )
  }
}