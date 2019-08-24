import { 
    GET_DEVELOPER_LIST,
    GET_DEVELOPER_BY_ID,
    SHOW_ADD_DEVELOPER_MODAL,
    SHOW_UPDATE_DEVELOPER_MODAL,
    HIDE_DEVELOPER_MODAL,
    ADD_DEVELOPER, 
    UPDATE_DEVELOPER
} from '../constant/developer-action-constants';
import { DEVELOPER_URL, DEVELOPER_ID_URL } from '../../js/service-url-constants'
import axios from 'axios';

export const getDeveloperList = () => {
    return dispatch => {
        return axios.get(DEVELOPER_URL)
            .then(response => {
                dispatch({type: GET_DEVELOPER_LIST, payload: response.data})
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const getDeveloperById = (devId) => {
    let DEVELOPER_URL_PROCESSED = DEVELOPER_ID_URL.replace('{devId}', devId);
    
    return dispatch => {
        return axios.get(DEVELOPER_URL_PROCESSED)
            .then(response => {
                dispatch({type: GET_DEVELOPER_BY_ID, payload: response.data})
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const addDeveloper = body => {
    return dispatch => {
        return axios.post(DEVELOPER_URL, body)
            .then(response => {
                dispatch({type: ADD_DEVELOPER});
                
                axios.get(DEVELOPER_URL)
                    .then(response => {
                        dispatch({type: GET_DEVELOPER_LIST, payload: response.data})
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

export const updateDeveloper = body => {
    let DEVELOPER_URL_PROCESSED = DEVELOPER_ID_URL.replace('{devId}', body.devId);

    return dispatch => {
        return axios.put(DEVELOPER_URL_PROCESSED, body)
            .then(response => {
                dispatch({type: UPDATE_DEVELOPER});
                
                axios.get(DEVELOPER_URL)
                    .then(response => {
                        dispatch({type: GET_DEVELOPER_LIST, payload: response.data})
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

export const deleteDeveloper = (devId) => {

    let DEVELOPER_URL_PROCESSED = DEVELOPER_ID_URL.replace('{devId}', devId);

    return dispatch => {
        return axios.delete(DEVELOPER_URL_PROCESSED)
            .then(response => {
                
                axios.get(DEVELOPER_URL)
                    .then(response => {
                        dispatch({type: GET_DEVELOPER_LIST, payload: response.data})
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

export const showAddDeveloperModal = () => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_ADD_DEVELOPER_MODAL,
                showDeveloperModal: true,
                developerModalFlow: ADD_DEVELOPER
            }
        )
    }
}

export const showUpdateDeveloperModal = (developer) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_UPDATE_DEVELOPER_MODAL,
                showDeveloperModal: true,
                developerModalFlow: UPDATE_DEVELOPER,
                selectedDeveloper: developer
            }
        )
    }
}

export const hideAddDeveloperModal = () => {
    return dispatch => {
        dispatch(
            {
                type: HIDE_DEVELOPER_MODAL,
                showDeveloperModal: false,
            }
        )
    }
}