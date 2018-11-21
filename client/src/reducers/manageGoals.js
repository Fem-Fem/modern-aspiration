export default function goalsReducer(state = {
  goals: []}, 
  action){
  switch(action.type){
    case 'ADD_GOAL':
      console.log('adding', action.goal )
      return {
        ...state,
        goals: [...state.goals, action.goal]
      }
    default:
      console.log("hit default case in reducer")
      return state;
  }
}