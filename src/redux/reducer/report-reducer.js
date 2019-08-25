import { 
    GENERATE_REPORT
} from '../constant/report-action-constants';

const initialState = {
    reportList: []
};

const reportReducer = (state = initialState, action) => {

    if(action.type === GENERATE_REPORT) {
        return {
            ...state,
            reportList : action.payload
        }
    }

    return state;
}

export default reportReducer;