import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import developerReducer from '../reducer/developer-reducer';
import skillReducer from '../reducer/skill-reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    developerData: developerReducer,
    skillData: skillReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;