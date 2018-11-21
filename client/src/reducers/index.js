export default function rootReducer(state = {
  goals: []
}, action
){
  switch(action.type){
    case 'ADD_GOAL':
      console.log('adding', action.goal )
      debugger
      return {
        ...state,
        goals: [...state.goals, action.goal]
      }
    default:
      return state;
  }
}