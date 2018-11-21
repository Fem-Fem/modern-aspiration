import { combineReducers } from 'redux';
import goalsReducer from './manageGoals';
import objectivesReducer from './manageObjectives';

const rootReducer = combineReducers({
  goals: goalsReducer
})

export default rootReducer;