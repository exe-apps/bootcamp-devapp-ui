import { 
    GET_DEVELOPER_LIST,
    SHOW_ADD_DEVELOPER_MODAL,
    ADD_DEVELOPER, 
    UPDATE_DEVELOPER
} from '../constant/developer-action-constants';
import { DEVELOPER_URL } from '../../js/service-url-constants'
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