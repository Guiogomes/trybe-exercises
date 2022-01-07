import frontendReducer from "./frontendReducer";
import reactReducer from "./reactReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({frontendReducer, reactReducer})

export default rootReducer;