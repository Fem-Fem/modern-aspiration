const goalURL = "/api/goals"

export function fetchGoals(){
  return (dispatch) => {
    dispatch({type: "LOADING_GOALS"})
      return fetch(goalURL)
        .then(response => response.json())
        .then(goals => dispatch({type: 'FETCH_GOALS', payload: goals}))
  }
}

// export const addGoal = ( goalInput ) => {
//   return ({ type: "ADD_GOAL", goal: goalInput })
// }
export const addGoal = ( goalInput ) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goalInput)
  }

  return dispatch => {
    fetch(`${ goalURL }`, data)
      .then(response => response.json())
      .then(goal => dispatch({
        type: 'CREATE_GOAL',
        payload: goal
      }))
      .catch(err => err)
  }
}

