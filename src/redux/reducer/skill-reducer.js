import { 
    GET_SKILL_LIST,
    SHOW_ADD_SKILL_MODAL,
    SHOW_UPDATE_SKILL_MODAL,
    ADD_SKILL,
    HIDE_SKILL_MODAL,
    UPDATE_SKILL
} from '../constant/skill-action-constants';

const initialState = {
    skillList: [],
    newskill: {
        skillName: ''
    },
    selectedSkill: {
        skillName: ''
    },
    showSkillModal: false,  // For show and hiding the modal
    skillModalFlow: ADD_SKILL,   // specify if the modal is add or update flow
};

const skillReducer = (state = initialState, action) => {

    if(action.type === GET_SKILL_LIST) {
        return {
            ...state,
            skillList : action.payload
        }
    }

    if(action.type === ADD_SKILL) {
        return {
            ...state,
            showSkillModal: false
        }
    }

    if(action.type === UPDATE_SKILL) {
        return {
            ...state,
            showSkillModal: false
        }
    }

    if(action.type === SHOW_ADD_SKILL_MODAL) {
        return {
            ...state,
            skillModalFlow: action.skillModalFlow,
            showSkillModal: action.showSkillModal
        }
    }

    if(action.type === SHOW_UPDATE_SKILL_MODAL) {
        return {
            ...state,
            skillModalFlow: action.skillModalFlow,
            showSkillModal: action.showSkillModal,
            selectedSkill: action.selectedSkill
        }
    }

    if(action.type === HIDE_SKILL_MODAL) {
        return {
            ...state,
            showSkillModal: action.showSkillModal
        }
    }

    return state;
}

export default skillReducer;