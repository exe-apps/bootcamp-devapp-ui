import { 
    GET_ASSESSMENT_LIST,
    GET_ASSESSMENT_LIST_BY_ID,
    SHOW_ADD_ASSESSMENT_MODAL,
    SHOW_UPDATE_ASSESSMENT_MODAL,
    ADD_ASSESSMENT,
    HIDE_ASSESSMENT_MODAL,
    UPDATE_ASSESSMENT
} from '../constant/assessment-action-constants';

const initialState = {
    assessmentList: [],
    newAssessment: {
        assessmentName: ''
    },
    selectedAssessment: {
        assessmentName: ''
    },
    showAssessmentModal: false,  // For show and hiding the modal
    assessmentModalFlow: ADD_ASSESSMENT,   // specify if the modal is add or update flow
    selectedDevId: 0
};

const AssessmentReducer = (state = initialState, action) => {

    if(action.type === GET_ASSESSMENT_LIST) {
        return {
            ...state,
            assessmentList : action.payload
        }
    }

    if(action.type === GET_ASSESSMENT_LIST_BY_ID) {
        return {
            ...state,
            assessmentList : action.payload,
            selectedDevId: action.selectedDevId
        }
    }

    if(action.type === ADD_ASSESSMENT) {
        return {
            ...state,
            showAssessmentModal: false
        }
    }

    if(action.type === UPDATE_ASSESSMENT) {
        console.log('DEV ID!', state.selectedDevId);
        return {
            ...state,
            showAssessmentModal: false,
            selectedDevId: action.selectedDevId
        }
    }

    if(action.type === SHOW_ADD_ASSESSMENT_MODAL) {
        return {
            ...state,
            assessmentModalFlow: action.assessmentModalFlow,
            showAssessmentModal: action.showAssessmentModal
        }
    }

    if(action.type === SHOW_UPDATE_ASSESSMENT_MODAL) {
        return {
            ...state,
            assessmentModalFlow: action.assessmentModalFlow,
            showAssessmentModal: action.showAssessmentModal,
            selectedAssessment: action.selectedAssessment
        }
    }

    if(action.type === HIDE_ASSESSMENT_MODAL) {
        return {
            ...state,
            showAssessmentModal: action.showAssessmentModal
        }
    }

    return state;
}

export default AssessmentReducer;