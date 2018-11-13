export default function rootReducer(state = {
  goals: []
}, action = {type:"ADD_GOAL", goal:"objective1"}){
  console.log("hitaction");
  switch(action.type){
    case 'ADD_GOAL':
      console.log("hit reducer and first action")
      break;
    default:
      console.log("hit default reducer statement")
  }
}