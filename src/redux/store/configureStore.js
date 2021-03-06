import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import assessmentReducer from '../reducer/assessment-reducer';
import developerReducer from '../reducer/developer-reducer';
import skillReducer from '../reducer/skill-reducer';
import reportReducer from '../reducer/report-reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    assessmentData: assessmentReducer,
    developerData: developerReducer,
    skillData: skillReducer,
    reportData: reportReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;