import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDeveloperList } from '../redux/action/developer-action';
import Table from 'react-bootstrap/Table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class DeveloperTable extends Component {

    componentDidMount() {
        this.props.getDeveloperList();
    }

    render() {
        return (
            <Table striped responsive>
                <thead>
                    <tr className='developer-table-row'>
                        <th className='developer-table-cell'>FIRST NAME</th>
                        <th className='developer-table-cell'>MIDDLE NAME</th>
                        <th className='developer-table-cell'>LAST NAME</th>
                        <th className='developer-table-cell'>BIRTH DATE</th>
                        <th className='developer-table-cell'>POSITION</th>
                        <th className='developer-table-cell'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.developerList.map((developer, index) =>{
                            return (
                                <tr key={index} className='developer-table-row'>
                                    <td className='developer-table-cell'>{developer.firstName}</td>
                                    <td className='developer-table-cell'>{developer.middleName}</td>
                                    <td className='developer-table-cell'>{developer.lastName}</td>
                                    <td className='developer-table-cell'>{developer.birthDate}</td>
                                    <td className='developer-table-cell'>{developer.position}</td>
                                    <td className='developer-table-cell'>
                                        <EditIcon onClick={this.clickEdit} />
                                        <DeleteIcon onClick={this.clickDelete} />
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
        developerList: state.developerReducer.developerList 
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getDeveloperList: () => dispatch(getDeveloperList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperTable);