import { 
    GET_DEVELOPER_LIST,
    DELETE_DEVELOPER,
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

export const deleteDeveloper = (devId) => {

    let urlWithId = DEVELOPER_ID_URL.replace('{devId}', devId);

    console.log('DELETE ACTION');
    console.log(urlWithId);

    return dispatch => {
        
    }

    // return dispatch => {
    //     return axios.delete(DEVELOPER_ID_URL)
    //         .then(response => {
    //             axios.get(DEVELOPER_URL)
    //             .then(response => {
    //                 dispatch({type: GET_DEVELOPER_LIST, payload: response.data})
    //             })
    //             .catch(error => {
    //                 // PUT ERROR DISPATCHER HERE
    //             })
    //         })
    //         .catch(error => {
    //             // PUT ERROR DISPATCHER HERE
    //         })
    // }
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

export const showUpdateDeveloperModal = () => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_UPDATE_DEVELOPER_MODAL,
                showDeveloperModal: true,
                developerModalFlow: UPDATE_DEVELOPER
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