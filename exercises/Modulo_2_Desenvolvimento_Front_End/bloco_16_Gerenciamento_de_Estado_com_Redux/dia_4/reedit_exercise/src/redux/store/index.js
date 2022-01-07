const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");
const { default: rootReducer } = require("../reducers");

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;