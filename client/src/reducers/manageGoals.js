export default function goalsReducer(state = [], action){
  switch(action.type){
    case 'ADD_GOAL':
      console.log('adding', action.goal )
      return [...state, action.goal]
    default:
      console.log("hit default case in reducer")
      return state;
  }
}