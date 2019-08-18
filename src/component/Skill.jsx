import React, { Component } from 'react';
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillTable from './SkillTable'
import SkillModal from './SkillModal'
import { addSkill, updateSkill, showAddSkillModal, showUpdateSkillModal } from '../redux/action/skill-action';
import { ADD_SKILL } from '../redux/constant/skill-action-constants';

class Skill extends Component {

    handleSubmit = (skillData, props, skillForm) => {
        const { addSkill, updateSkill, skillModalFlow } = this.props;

        if(skillModalFlow === ADD_SKILL) 
        {
            addSkill(skillData);
        }
        else
        {
            updateSkill(skillData);
        }
        
        skillForm.reset();
    }

    render() {
        const { showAddSkillModal } = this.props;
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <SkillTable />
                        <SkillModal onSubmit={this.handleSubmit} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Fab color="primary" aria-label="Add">
                            <AddIcon onClick={showAddSkillModal} />
                        </Fab>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        skillModalFlow: state.skillData.skillModalFlow
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addSkill: (skillData) => dispatch(addSkill(skillData)),
        showAddSkillModal: () => dispatch(showAddSkillModal()),
        showUpdateSkillModal: () => dispatch(showUpdateSkillModal()),
        updateSkill: (skillData) => dispatch(updateSkill(skillData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skill);