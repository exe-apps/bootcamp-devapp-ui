import React, { Component } from 'react';
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeveloperTable from './DeveloperTable'
import DeveloperModal from './DeveloperModal'
import { showAddDeveloperModal } from '../redux/action/developer-action';

class Developer extends Component {

    clickAdd = e => {
        console.log('Click ADD');
        this.props.showAddDeveloperModal();
    }

    clickEdit = e => {
        console.log('Click EDIT');
    }

    clickDelete = e => {
        console.log('Click DELETE');
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <DeveloperTable />
                        <DeveloperModal />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Fab color="primary" aria-label="Add">
                            <AddIcon onClick={this.clickAdd} />
                        </Fab>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        //showDeveloperModal: state.developerReducer.showDeveloperModal
    };
};


const mapDispatchToProps = dispatch => {
    return {
        showAddDeveloperModal: () => dispatch(showAddDeveloperModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Developer);