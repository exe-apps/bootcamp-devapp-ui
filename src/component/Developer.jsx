import React, { Component } from 'react';
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeveloperTable from './DeveloperTable'
import DeveloperModal from './DeveloperModal'
import { addDeveloper, updateDeveloper, showAddDeveloperModal, showUpdateDeveloperModal } from '../redux/action/developer-action';
import { ADD_DEVELOPER } from '../redux/constant/developer-action-constants';

class Developer extends Component {

    handleSubmit = (developerData, props, developerForm) => {
        const { addDeveloper, updateDeveloper, developerModalFlow } = this.props;

        if(developerModalFlow === ADD_DEVELOPER) 
        {
            addDeveloper(developerData);
        }
        else
        {
            updateDeveloper(developerData);
        }
        
        developerForm.reset();
    }

    render() {
        const {showAddDeveloperModal} = this.props;

        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <DeveloperTable />
                        <DeveloperModal onSubmit={this.handleSubmit} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Fab color="primary" aria-label="Add">
                            <AddIcon onClick={showAddDeveloperModal} />
                        </Fab>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        developerModalFlow: state.developerData.developerModalFlow
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addDeveloper: (devData) => dispatch(addDeveloper(devData)),
        showAddDeveloperModal: () => dispatch(showAddDeveloperModal()),
        showUpdateDeveloperModal: () => dispatch(showUpdateDeveloperModal()),
        updateDeveloper: (devData) => dispatch(updateDeveloper(devData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Developer);