export default function objectivesReducer(state = {
  loading: false,
  objectivesData: []}, 
  action){
  switch(action.type){
    case 'LOADING_OBJECTIVES':
      console.log("loading goals now")
      return {...state, loading: true}
    case 'FETCH_OBJECTIVES':
      console.log('Fetching Objectives', action.payload )
      return {loading: false, objectivesData: action.payload}
    default:
      console.log("hit default case in objective reducer")
      return state;
  }
}