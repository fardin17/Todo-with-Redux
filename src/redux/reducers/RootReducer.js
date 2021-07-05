import { combineReducers } from "redux";

import TaskReducer from "./TaskReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  TaskReducer: TaskReducer,
});

export default rootReducer;