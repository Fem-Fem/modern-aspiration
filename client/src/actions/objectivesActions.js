const goalsURL = "/api/goals";

export function fetchObjectives(){
  return (dispatch) => {
    dispatch({type: "LOADING_OBJECTIVES"})
      return fetch(`${goalsURL}/${goalID}/objectives`)
        .then(response => response.json())
        .then(objectives => dispatch({type: 'FETCH_OBJECTIVES', payload: objectives}))
  }
}