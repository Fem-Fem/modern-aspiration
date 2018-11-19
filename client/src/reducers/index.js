export default function rootReducer(state = {
  goals: []
}, action
){
  switch(action.type){
    case 'ADD_GOAL':
      console.log("hit reducer and first action")
      break;
    default:
      return state;
  }
}