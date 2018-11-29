const goalsURL = "/api/goals";

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
        let res = {
          objective,
          goalId
        }

        dispatch({
          type: 'UPDATE_OBJECTIVE',
          payload: res
        })
      })
      .catch(err => err)
  }
}

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
