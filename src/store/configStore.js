import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import reducerBook from "./reducers/reducerBook";

export const history = createBrowserHistory()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
    book: reducerBook
})

const middleware = [thunk]
const enhancers = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(rootReducer, enhancers)

export default store