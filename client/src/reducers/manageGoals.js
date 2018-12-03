export default function goalsReducer(state = {
  loading: false,
  goalsData: [],
  goalData :[]
  }, action){

    switch(action.type){
      case 'CREATE_GOAL':
        console.log('creating', action.payload)
        return {...state, goalsData:[...state.goalsData, action.payload]}
      case 'LOADING_GOALS':
        console.log("loading goals now")
        return {...state, loading: true}
      case 'FETCH_GOALS':
        console.log("fetch goals")
        return {...state, loading: false, goalsData: action.payload}
      case 'FETCH_GOAL':
        console.log("fetching one goal")
        return {...state, loading: false, goalData: action.payload}
      case 'DELETE_GOAL':
        console.log("In REDUCER: deleting", action.payload)
        return{...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id)}
      default:
        console.log("hit default case in goals reducer")
        return state;
    }
  }