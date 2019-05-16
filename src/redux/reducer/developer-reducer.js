import { 
    GET_DEVELOPER_LIST, 
    SHOW_ADD_DEVELOPER_MODAL,
    ADD_DEVELOPER 
} from '../constant/developer-action-constants';

const initialState = {
    developerList: [],
    newDeveloper: {
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: new Date(),
        position: ''
    },
    selectedDeveloper: {
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: new Date(),
        position: ''
    },
    showDeveloperModal: false,  // For show and hiding the modal
    developerModalFlow: ADD_DEVELOPER,   // specify if the modal is add or update flow
};

const developerReducer = (state = initialState, action) => {

    if(action.type === GET_DEVELOPER_LIST) {
        return {
            ...state,
            developerList : action.payload
        }
    }

    if(action.type === SHOW_ADD_DEVELOPER_MODAL) {
        return {
            ...state,
            developerModalFlow: action.developerModalFlow,
            showDeveloperModal: action.showDeveloperModal
        }
    }

    return state;
}

export default developerReducer;