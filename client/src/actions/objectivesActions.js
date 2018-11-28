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
      .then(objective => dispatch({
        type: 'CREATE_OBJECTIVE',
        payload: objective
      }))
      .catch(err => err)
  }
}
