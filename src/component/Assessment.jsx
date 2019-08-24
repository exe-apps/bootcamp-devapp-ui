import React, { Component } from 'react';
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AssessmentTable from './AssessmentTable';
import AssessmentModal from './AssessmentModal';
import AssessmentSearch from './AssessmentSearch';
import { addAssessment, updateAssessment, showAddAssessmentModal, showUpdateAssessmentModal } from '../redux/action/assessment-action';
import { ADD_ASSESSMENT } from '../redux/constant/assessment-action-constants';

class Assessment extends Component {

    handleSubmit = (assessmentData, props, assessmentForm) => {
        const { addAssessment, updateAssessment, assessmentModalFlow, selectedDevId } = this.props;

        if(assessmentModalFlow === ADD_ASSESSMENT) 
        {
            addAssessment(selectedDevId, assessmentData);
        }
        else
        {
            updateAssessment(selectedDevId, assessmentData);
        }
        
        assessmentForm.reset();
    }

    render() {
        const { selectedDevId, showAddAssessmentModal} = this.props;

        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <AssessmentSearch />
                    </Col>
                </Row>
                
                {selectedDevId !== 0 ? (
                    <div>
                        <Row className='assessment-table'>
                            <Col>
                                <AssessmentTable />
                                <AssessmentModal onSubmit={this.handleSubmit} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Fab color="primary" aria-label="Add">
                                    <AddIcon onClick={showAddAssessmentModal} />
                                </Fab>
                            </Col>
                        </Row>
                    </div>
                ) : null
                }
                
            </Container>
        );
    }
}


const mapStateToProps = state => {
    return { 
        assessmentModalFlow: state.assessmentData.assessmentModalFlow,
        selectedDevId: state.assessmentData.selectedDevId
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addAssessment: (selectedDevId, assessmentData) => dispatch(addAssessment(selectedDevId, assessmentData)),
        showAddAssessmentModal: () => dispatch(showAddAssessmentModal()),
        showUpdateAssessmentModal: () => dispatch(showUpdateAssessmentModal()),
        updateAssessment: (selectedDevId, assessmentData) => dispatch(updateAssessment(selectedDevId, assessmentData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);