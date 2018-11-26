export default function goalsReducer(state = {
  loading: false,
  goalsData: [] 
  }, action){

    switch(action.type){
      case 'ADD_GOAL':
        console.log('adding', action.goal )
        return {...state, goalsData: [...state.goalsData, action.goal]}
      case 'LOADING_GOALS':
        console.log("loading goals now")
        return {...state, loading: true}
      case 'FETCH_GOALS':
        console.log("fetch goals")
        return {loading: false, goalsData: action.payload}
      default:
        console.log("hit default case in reducer")
        return state;
    }
  }