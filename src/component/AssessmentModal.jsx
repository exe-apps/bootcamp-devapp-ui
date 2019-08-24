import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-bootstrap/Modal';
import { ADD_ASSESSMENT } from '../redux/constant/assessment-action-constants';
import { hideAddAssessmentModal } from '../redux/action/assessment-action';
import { getSkillList } from '../redux/action/skill-action';
import CustomDropDown from './custom-forms/CustomDropDown';

class AssessmentModal extends Component {
    
    componentDidMount() {
        const { skillList, getSkillList } = this.props;

        if(skillList.length === 0) {
            getSkillList();
        }
    }

    render() {
        const { 
            assessmentModalFlow, 
            showAssessmentModal,
            handleSubmit, 
            hideAddAssessmentModal,
            skillList
        } = this.props;

        return (
            <Modal show={showAssessmentModal}>
                <Modal.Header>
                        <Modal.Title>
                            {assessmentModalFlow === ADD_ASSESSMENT ?
                                 'Add Assessment' : 'Update Assessment'}
                        </Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                            <label htmlFor="skillName">Skill Name</label>
                            <Field name="skillName" className="form-control skill-dropdown" component={CustomDropDown} choices={skillList} placeholder="Enter skill name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skillLevel">Skill Level</label>
                            <Field name="skillLevel" className="form-control" component="input" type="text" placeholder="Enter skill level"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="monthsExp">Exp in Months</label>
                            <Field name="monthsExp" className="form-control" component="input" type="text" placeholder="Enter exp in months" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {
                                assessmentModalFlow === ADD_ASSESSMENT ?
                                 'Add Assessment' : 'Update Assessment'
                            }
                        </button>
                        <button type="button" className="btn btn-primary" onClick={hideAddAssessmentModal}>Cancel</button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}


const mapStateToProps = state => {
    const assessmentModalFlow = state.assessmentData.assessmentModalFlow;
    const newAssessment = state.assessmentData.newAssessment;
    const selectedAssessment = state.assessmentData.selectedAssessment;
    const assessment = assessmentModalFlow === ADD_ASSESSMENT ? newAssessment : selectedAssessment; 

    return { 
        assessmentModalFlow: assessmentModalFlow,
        newAssessment: state.assessmentData.newAssessment,
        showAssessmentModal: state.assessmentData.showAssessmentModal,
        initialValues: assessment,
        skillList: state.skillData.skillList 
    };
};


const mapDispatchToProps = dispatch => {
    return {
        hideAddAssessmentModal: () => dispatch(hideAddAssessmentModal()),
        getSkillList: () => dispatch(getSkillList()),
    };
}

AssessmentModal = reduxForm({
    form: 'assessmentModal',    // unique form name
    enableReinitialize : true
})(AssessmentModal);

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentModal);