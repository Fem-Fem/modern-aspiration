export default function goalsReducer(state = {
  loading: false,
  goalsData: [] 
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
        return {loading: false, goalsData: action.payload}
      case 'DELETE_GOAL':
        console.log("In REDUCER: deleting", action.payload)
        return{...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id)}
      case 'UPDATE_OBJECTIVE':
        console.log("udpating goal objectives", action.payload)    
        // 1
        // let goal = state.goalsData.filter(goal => goal.id === action.payload.goalId)[0]
        // goal.objectives.push(action.payload.objective) 
        
        let state2 = {...state}
        let goal = state2.goalsData.filter(goal => goal.id === action.payload.goalId)[0]
        goal.objectives.push(action.payload.objective) 
        // 2 
        

        return state2
      default:
        console.log("hit default case in goals reducer")
        return state;
    }
  }