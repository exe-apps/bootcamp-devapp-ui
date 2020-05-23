import React, { Component } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAssessmentListById } from '../redux/action/assessment-action';
import '../css/Assessment.css';

class AssessmentSearch extends Component {

    state = {
        devId: 0
    }

    handleDevId = e => {
        const {name, value} = e.target;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    findDevAssessment = () => {
        const { getAssessmentListById } = this.props;
        getAssessmentListById(this.state.devId);
    }

    render() {
        const { assessmentList, selectedDevId } = this.props;

        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="devId">Developer ID</label>
                            <input name="devId" className="form-control" component="input" type="text" placeholder="Enter developer ID" defaultValue={selectedDevId} onChange={this.handleDevId}/>
                            <br/>
                            <button type="button" className="btn btn-primary" onClick={() => this.findDevAssessment()}>Search Developer</button>
                        </div>
                    </Col>
                    {/* {assessmentList.length > 0 && 
                        <Col className='name-section'>
                            <Row>Developer Name:</Row>
                            <Row className='name-display'>{assessmentList[0].developerName}</Row>
                        </Col>
                    } */}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        assessmentList: state.assessmentData.assessmentList,
        selectedDevId: state.assessmentData.selectedDevId > 0 ? state.assessmentData.selectedDevId : '',
     };
};

const mapDispatchToProps = dispatch => {
    return {
        getAssessmentListById: (devId) => dispatch(getAssessmentListById(devId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSearch);