import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-bootstrap/Modal';
import { ADD_SKILL } from '../redux/constant/skill-action-constants';
import { hideAddSkillModal } from '../redux/action/skill-action';

class SkillModal extends Component {

    render() {
        const { 
            skillModalFlow, 
            showSkillModal,
            handleSubmit, 
            hideAddSkillModal
        } = this.props;

        return (
            <Modal show={showSkillModal}>
                <Modal.Header>
                        <Modal.Title>
                            {skillModalFlow === ADD_SKILL ?
                                 'Add Skill' : 'Update Skill'}
                        </Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="skillName">First Name</label>
                            <Field name="skillName" className="form-control" component="input" type="text" placeholder="Enter skill name"/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {
                                skillModalFlow === ADD_SKILL ?
                                 'Add Skill' : 'Update Skill'
                            }
                        </button>
                        <button type="button" className="btn btn-primary" onClick={hideAddSkillModal}>Cancel</button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    const skillModalFlow = state.skillData.skillModalFlow;
    const newSkill = state.skillData.newSkill;
    const selectedSkill = state.skillData.selectedSkill;
    const skill = skillModalFlow === ADD_SKILL ? newSkill : selectedSkill; 

    return { 
        skillModalFlow: skillModalFlow,
        newSkill: state.skillData.newSkill,
        showSkillModal: state.skillData.showSkillModal,
        initialValues: skill
    };
};


const mapDispatchToProps = dispatch => {
    return {
        hideAddSkillModal: () => dispatch(hideAddSkillModal())
    };
}

SkillModal = reduxForm({
    form: 'skillModal',    // unique form name
    enableReinitialize : true
})(SkillModal);

export default connect(mapStateToProps, mapDispatchToProps)(SkillModal);