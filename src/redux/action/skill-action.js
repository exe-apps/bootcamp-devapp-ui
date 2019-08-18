import { 
    GET_SKILL_LIST,
    SHOW_ADD_SKILL_MODAL,
    SHOW_UPDATE_SKILL_MODAL,
    HIDE_SKILL_MODAL,
    ADD_SKILL, 
    UPDATE_SKILL
} from '../constant/skill-action-constants';
import { SKILL_URL, SKILL_ID_URL } from '../../js/service-url-constants'
import axios from 'axios';

export const getSkillList = () => {
    return dispatch => {
        return axios.get(SKILL_URL)
            .then(response => {
                dispatch({type: GET_SKILL_LIST, payload: response.data})
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}

export const addSkill = body => {
    return dispatch => {
        return axios.post(SKILL_URL, body)
            .then(response => {
                dispatch({type: ADD_SKILL});
                
                axios.get(SKILL_URL)
                    .then(response => {
                        dispatch({type: GET_SKILL_LIST, payload: response.data})
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

export const updateSkill = body => {
    let SKILL_URL_PROCESSED = SKILL_ID_URL.replace('{skillId}', body.skillId);

    return dispatch => {
        return axios.put(SKILL_URL_PROCESSED, body)
            .then(response => {
                dispatch({type: UPDATE_SKILL});
                
                axios.get(SKILL_URL)
                    .then(response => {
                        dispatch({type: GET_SKILL_LIST, payload: response.data})
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

export const deleteSkill = (skillId) => {

    let SKILL_URL_PROCESSED = SKILL_ID_URL.replace('{skillId}', skillId);

    return dispatch => {
        return axios.delete(SKILL_URL_PROCESSED)
            .then(response => {
                
                axios.get(SKILL_URL)
                    .then(response => {
                        dispatch({type: GET_SKILL_LIST, payload: response.data})
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

export const showAddSkillModal = () => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_ADD_SKILL_MODAL,
                showSkillModal: true,
                skillModalFlow: ADD_SKILL
            }
        )
    }
}

export const showUpdateSkillModal = (skill) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_UPDATE_SKILL_MODAL,
                showSkillModal: true,
                skillModalFlow: UPDATE_SKILL,
                selectedSkill: skill
            }
        )
    }
}

export const hideAddSkillModal = () => {
    return dispatch => {
        dispatch(
            {
                type: HIDE_SKILL_MODAL,
                showSkillModal: false,
            }
        )
    }
}