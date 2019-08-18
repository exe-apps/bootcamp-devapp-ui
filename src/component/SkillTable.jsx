import React, { Component } from 'react';
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { 
    getSkillList, 
    showUpdateSkillModal, 
    deleteSkill 
} from '../redux/action/skill-action';

class SkillTable extends Component {

    componentDidMount() {
        this.props.getSkillList();
    }

    render() {
        const {deleteSkill, showUpdateSkillModal} = this.props;

        return (
            <Table striped responsive>
                <thead>
                    <tr className='skill-table-row'>
                        <th className='skill-table-cell'>SKILL NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.skillList.map((skill) =>{
                            return (
                                <tr key={skill.skillId} className='skill-table-row'>
                                    <td className='skill-table-cell'>{skill.skillName}</td>
                                    <td className='skill-table-cell'>
                                        <EditIcon onClick={() => showUpdateSkillModal(skill)} />
                                        <DeleteIcon onClick={() => deleteSkill(skill.skillId)} />
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
        skillList: state.skillData.skillList 
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getSkillList: () => dispatch(getSkillList()),
        showUpdateSkillModal: (skill) => dispatch(showUpdateSkillModal(skill)),
        deleteSkill: (skillId) => dispatch(deleteSkill(skillId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillTable);