import { 
    GET_DEVELOPER_LIST,
    GET_DEVELOPER_BY_ID,
    SHOW_ADD_DEVELOPER_MODAL,
    SHOW_UPDATE_DEVELOPER_MODAL,
    ADD_DEVELOPER,
    HIDE_DEVELOPER_MODAL,
    UPDATE_DEVELOPER
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
    searchDeveloper: null
};

const developerReducer = (state = initialState, action) => {

    if(action.type === GET_DEVELOPER_LIST) {
        return {
            ...state,
            developerList : action.payload
        }
    }

    if(action.type === GET_DEVELOPER_BY_ID) {
        return {
            ...state,
            searchDeveloper : action.payload
        }
    }

    if(action.type === ADD_DEVELOPER) {
        return {
            ...state,
            showDeveloperModal: false
        }
    }

    if(action.type === UPDATE_DEVELOPER) {
        return {
            ...state,
            showDeveloperModal: false
        }
    }

    if(action.type === SHOW_ADD_DEVELOPER_MODAL) {
        return {
            ...state,
            developerModalFlow: action.developerModalFlow,
            showDeveloperModal: action.showDeveloperModal
        }
    }

    if(action.type === SHOW_UPDATE_DEVELOPER_MODAL) {
        return {
            ...state,
            developerModalFlow: action.developerModalFlow,
            showDeveloperModal: action.showDeveloperModal,
            selectedDeveloper: action.selectedDeveloper
        }
    }

    if(action.type === HIDE_DEVELOPER_MODAL) {
        return {
            ...state,
            showDeveloperModal: action.showDeveloperModal
        }
    }

    return state;
}

export default developerReducer;