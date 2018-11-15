import React, { Component } from 'react';
import Goal from './Goal'

export default class GoalList extends Component {
  render(){
    debugger
    return(
      <div>
        GoalList
      </div>
    )
  }
}

GoalList.defaultProps = {
  Goals: [
      {
      id: 1,
      aim: "Become a Software Engineer",
      strategy: "Learn to Code",
      category: "Professional Development",
      objectives: [
      {
      id: 1,
      description: "Finish Curriculum",
      goal_id: 1,
      completed: 0,
      created_at: "2018-11-13T22:36:03.151Z",
      updated_at: "2018-11-13T22:36:03.151Z"
      },
      {
      id: 2,
      description: "Build 5 Projects",
      goal_id: 1,
      completed: 0,
      created_at: "2018-11-13T22:36:03.165Z",
      updated_at: "2018-11-13T22:36:03.165Z"
      },
      {
      id: 3,
      description: "Build Portfolio",
      goal_id: 1,
      completed: 0,
      created_at: "2018-11-13T22:36:03.175Z",
      updated_at: "2018-11-13T22:36:03.175Z"
      }
      ]
      }
  ]
}