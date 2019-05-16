import React, { Component } from 'react';
import { connect } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DateTimePicker from 'react-datetime-picker';
import { ADD_DEVELOPER } from '../redux/constant/developer-action-constants';
import { hideAddDeveloperModal } from '../redux/action/developer-action';


class DeveloperModal extends Component{

    render() {
        return (
            <Modal show={this.props.showDeveloperModal}>
                <Modal.Header>
                    {
                        this.props.developerModalFlow === ADD_DEVELOPER ? 
                        <Modal.Title>Add Developer</Modal.Title> : 
                        <Modal.Title>Update Developer</Modal.Title>
                    }
                </Modal.Header>
    
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            {
                                this.props.developerModalFlow === ADD_DEVELOPER ? 
                                <Form.Control type="input" placeholder="First Name" name="firstName"/> :
                                <Form.Control defaultValue={'HELLO'} type="input" placeholder="First Name" name="firstName"/>
                            }
                        </Form.Group>
    
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            {
                                this.props.developerModalFlow === ADD_DEVELOPER ? 
                                <Form.Control type="input" placeholder="Last Name" name="lastName"/> :
                                <Form.Control defaultValue={'HELLO@'} type="input" placeholder="Last Name" name="lastName"/>
                            }
                            
                        </Form.Group>
    
                        <Form.Group controlId="birthDate">
                            <Form.Label>Birth Date: </Form.Label>
                            {
                                this.props.developerModalFlow === ADD_DEVELOPER ? 
                                <DateTimePicker
                                    // onChange={props2.selectBirthDate}
                                    // value={props2.developer ? new Date(props2.developer.birthDate) : new Date()}
                                    // clearIcon={null}
                                    // calendarIcon={null}
                                    // disableClock={true}
                                /> :
                                <DateTimePicker
                                    // onChange={props2.selectBirthDate}
                                    // value={props2.developer ? new Date(props2.developer.birthDate) : new Date()}
                                    // clearIcon={null}
                                    // calendarIcon={null}
                                    // disableClock={true}
                                />
                            }
                            
                        </Form.Group>
    
                        <Form.Group controlId="position">
                            <Form.Label>Position</Form.Label>
                            {
                                this.props.developerModalFlow === ADD_DEVELOPER ? 
                                <Form.Control type="input" placeholder="Position" name="position"/> :
                                <Form.Control defaultValue={'HELLO3'} type="input" placeholder="Position" name="position"/>
                            }
                        </Form.Group>
                    </Form>
                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hideAddDeveloperModal}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return { 
        developerModalFlow: state.developerReducer.developerModalFlow,
        showDeveloperModal: state.developerReducer.showDeveloperModal
    };
};


const mapDispatchToProps = dispatch => {
    return {
        hideAddDeveloperModal: () => dispatch(hideAddDeveloperModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperModal);