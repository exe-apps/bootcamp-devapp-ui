import { GET_DEVELOPER_LIST } from '../constant/action-constants';

const initialState = {
    developerList: []
};

const developerReducer = (state = initialState, action) => {

    if(action.type === GET_DEVELOPER_LIST) {
        return {
            ...state,
            developerList : action.payload
        }
    }

    return state;
}

export default developerReducer;