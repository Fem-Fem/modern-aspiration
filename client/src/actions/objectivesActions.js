const goalsURL = "/api/goals";

//////////////////////         FETCH GOAL OBJECTIVES       ////////////////////////

export const fetchGoalObjectives = goalId => {
  return dispatch => {
    fetch(`${goalsURL}/${goalId}/objectives`)
      .then(response => response.json())
      .then(objectives => {
        let res = {
          objectives,
          goalId
        }
        dispatch({
            type: 'FETCH_OBJECTIVES',
            payload: res
        })
      })
      .catch(err => err)
  }
}

//////////////////////         CREATE NEW OBJECTIVE      ////////////////////////

export const addObjective = ( objectiveInput, goalId ) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objectiveInput)
  }
  return dispatch => {
    fetch(`${ goalsURL }/${goalId}/objectives`, data)
      .then(response => response.json())
      .then(objective => {
        let res = {objective, goalId}
        dispatch({type: 'CREATE_OBJECTIVE', payload: res})
      })
      .catch(err => err)
  }
}

/////////////////////////         DELETE OBJECTIVE      ////////////////////////


export const deleteObjective = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`/objectives/${ id }`, data)
      .then(response => response.json())
      .then(objective => dispatch({
        type: 'DELETE_OBJECTIVE',
        payload: objective
      }))
      .catch(err => err)
  }
}

////////////////////////// TOGGLE COMPLETED /////////////////////////////

export const toggleCompleted = id => {
  let data = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`/api/objectives/${ id }`, data)
      .then(response => response.json())
      .then(objective => dispatch({
        type: 'TOGGLE_COMPLETED_OBJECTIVE',
        payload: objective
      }))
      .catch(err => err)
  }
}