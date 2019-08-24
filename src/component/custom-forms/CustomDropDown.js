import React, { Component } from 'react';

class CustomDropDown extends Component  {

    renderSelectOptions = (choices) => {
        return <option key={choices.skillName} value={choices.skillName}>{choices.skillName}</option>
    }

    render() {
        return (
            <div>
                <select {...this.props} {...this.props.input}>
                <option value="">Select</option>
                {this.props.choices.map(this.renderSelectOptions)}
                </select>
            </div>
        );
    }
}

export default CustomDropDown;