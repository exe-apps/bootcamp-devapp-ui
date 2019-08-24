import React, { Component } from 'react';
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table';
import EditIcon from '@material-ui/icons/Edit';
import { 
    showUpdateAssessmentModal,  
} from '../redux/action/assessment-action';

class AssessmentTable extends Component {

    render() {
        const { assessmentList, showUpdateAssessmentModal } = this.props;

        return (
            <Table striped responsive>
                <thead>
                    <tr className='assessment-table-row'>
                        <th className='assessment-table-cell'>SKILL NAME</th>
                        <th className='assessment-table-cell'>SKILL LEVEL</th>
                        <th className='assessment-table-cell'>EXPERIENCE IN MONTHS</th>
                        <th className='assessment-table-cell'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        assessmentList.map((assessment) =>{
                            return (
                                <tr key={assessment.assessmentId} className='asessment-table-row'>
                                    <td className='assessment-table-cell'>{assessment.skillName}</td>
                                    <td className='assessment-table-cell'>{assessment.skillLevel}</td>
                                    <td className='assessment-table-cell'>{assessment.monthsExp}</td>
                                    <td className='assessment-table-cell'>
                                        <EditIcon onClick={() => showUpdateAssessmentModal(assessment)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { 
        assessmentList: state.assessmentData.assessmentList
    };
};


const mapDispatchToProps = dispatch => {
    return {
        showUpdateAssessmentModal: (assessment) => dispatch(showUpdateAssessmentModal(assessment)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentTable);