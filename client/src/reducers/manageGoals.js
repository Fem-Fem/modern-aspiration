// export default function goalsReducer(state = [], action){
//   switch(action.type){
//     case 'ADD_GOAL':
//       console.log('adding', action.goal )
//       return [...state, action.goal]
//     case 'LOADING_GOALS':
//       console.log("loading goals now")
//       return {...state, loading: [...state.loading, true]}
//     case 'FETCH_GOALS':
//       console.log("fetch goals")
//       return [...state, action.payload]
//     default:
//       console.log("hit default case in reducer")
//       return state;
//   }
// }
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

//must fix return for loading and fetch goals
// error "invalid attempt to spread non-terable instance"