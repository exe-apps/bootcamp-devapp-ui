import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import developerReducer from '../reducer/developer-reducer';

const allReducers = combineReducers({
    developerReducer: developerReducer
})

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

export default store;