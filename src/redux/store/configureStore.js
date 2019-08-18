import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import developerReducer from '../reducer/developer-reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    developerData: developerReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;