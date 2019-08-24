import { 
    GET_ASSESSMENT_LIST,
    GET_ASSESSMENT_LIST_BY_ID,
    SHOW_ADD_ASSESSMENT_MODAL,
    SHOW_UPDATE_ASSESSMENT_MODAL,
    HIDE_ASSESSMENT_MODAL,
    ADD_ASSESSMENT, 
    UPDATE_ASSESSMENT
} from '../constant/assessment-action-constants';
import { ALL_ASSESSMENT_URL, DEV_ASSESSMENT_URL, DEV_ASSESSMENT_UPDATE_URL} from '../../js/service-url-constants'
import axios from 'axios';

export const getAssessmentList = () => {
    return dispatch => {
        return axios.get(ALL_ASSESSMENT_URL)
            .then(response => {
                dispatch({type: GET_ASSESSMENT_LIST, payload: response.data})
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const getAssessmentListById = (devId) => {
    
    let DEV_ASSESSMENT_URL_PROCESSED = DEV_ASSESSMENT_URL.replace('{devId}', devId);
    
    return dispatch => {
        return axios.get(DEV_ASSESSMENT_URL_PROCESSED)
            .then(response => {
                dispatch({type: GET_ASSESSMENT_LIST_BY_ID, payload: response.data, selectedDevId: devId})
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const addAssessment = (devId, body) => {

    let DEV_ASSESSMENT_URL_PROCESSED = DEV_ASSESSMENT_URL.replace('{devId}', devId);

    return dispatch => {
        return axios.post(DEV_ASSESSMENT_URL_PROCESSED, body)
            .then(response => {
                dispatch({type: ADD_ASSESSMENT});
                
                axios.get(DEV_ASSESSMENT_URL_PROCESSED)
                    .then(response => {
                        dispatch({type: GET_ASSESSMENT_LIST_BY_ID, payload: response.data, selectedDevId: devId})
                    })
                    .catch(error => {
                        // PUT ERROR DISPATCHER HERE
                    })
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const updateAssessment = (devId, body) => {

    console.log('ASSESSMENT ACTION');
    console.log(devId);

    let DEV_ASSESSMENT_URL_PROCESSED = DEV_ASSESSMENT_URL.replace('{devId}', devId);
    let DEV_ASSESSMENT_UPDATE_URL_PROCESSED = DEV_ASSESSMENT_UPDATE_URL.replace('{assessmentId}', body.assessmentId).replace('{devId}', devId);

    return dispatch => {
        return axios.put(DEV_ASSESSMENT_UPDATE_URL_PROCESSED, body)
            .then(response => {
                dispatch({type: UPDATE_ASSESSMENT});
                
                axios.get(DEV_ASSESSMENT_URL_PROCESSED)
                    .then(response => {
                        dispatch({type: GET_ASSESSMENT_LIST_BY_ID, payload: response.data, selectedDevId: devId})
                    })
                    .catch(error => {
                        // PUT ERROR DISPATCHER HERE
                    })
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const showAddAssessmentModal = () => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_ADD_ASSESSMENT_MODAL,
                showAssessmentModal: true,
                assessmentModalFlow: ADD_ASSESSMENT
            }
        )
    }
}

export const showUpdateAssessmentModal = (assessment) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_UPDATE_ASSESSMENT_MODAL,
                showAssessmentModal: true,
                assessmentModalFlow: UPDATE_ASSESSMENT,
                selectedAssessment: assessment
            }
        )
    }
}

export const hideAddAssessmentModal = () => {
    return dispatch => {
        dispatch(
            {
                type: HIDE_ASSESSMENT_MODAL,
                showASSESSMENTModal: false,
            }
        )
    }
}