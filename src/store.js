
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// redux thunk for async operation
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;