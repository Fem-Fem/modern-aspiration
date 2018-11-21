export default function objectivesReducer(state = {
  objectives: []}, 
  action){
  switch(action.type){
    case 'ADD_OBJECTIVE':
      console.log('adding', action.objective )
      return state
    default:
      console.log("hit default case in objective reducer")
      return state;
  }
}