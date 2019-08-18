import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-bootstrap/Modal';
import { ADD_DEVELOPER } from '../redux/constant/developer-action-constants';
import { hideAddDeveloperModal } from '../redux/action/developer-action';
import "react-datepicker/dist/react-datepicker.css";

class DeveloperModal extends Component {

    render() {
        const { 
            developerModalFlow, 
            handleSubmit, 
            hideAddDeveloperModal
        } = this.props;

        return (
            <Modal show={this.props.showDeveloperModal}>
                <Modal.Header>
                        <Modal.Title>
                            {developerModalFlow === ADD_DEVELOPER ?
                                 'Add Developer' : 'Update Developer'}
                        </Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" className="form-control" component="input" type="text" placeholder="Enter first name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <Field name="middleName" className="form-control" component="input" type="text" placeholder="Enter middle name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" className="form-control" component="input" type="text" placeholder="Enter last name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Position">Position</label>
                            <Field name="position" className="form-control" component="input" type="text" placeholder="Enter position" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {
                                developerModalFlow === ADD_DEVELOPER ?
                                 'Add Developer' : 'Update Developer'
                            }
                        </button>
                        <button type="button" className="btn btn-primary" onClick={hideAddDeveloperModal}>Cancel</button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    const developerModalFlow = state.developerData.developerModalFlow;
    const newDeveloper = state.developerData.newDeveloper;
    const selectedDeveloper = state.developerData.selectedDeveloper;
    const developer = developerModalFlow === ADD_DEVELOPER ? newDeveloper : selectedDeveloper; 

    return { 
        developerModalFlow: developerModalFlow,
        newDeveloper: state.developerData.newDeveloper,
        showDeveloperModal: state.developerData.showDeveloperModal,
        initialValues: developer
    };
};


const mapDispatchToProps = dispatch => {
    return {
        hideAddDeveloperModal: () => dispatch(hideAddDeveloperModal())
    };
}

DeveloperModal = reduxForm({
    form: 'developerModal',    // unique form name
    enableReinitialize : true
})(DeveloperModal);

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperModal);