import React, { Component } from 'react';
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { 
    getDeveloperList, 
    showUpdateDeveloperModal, 
    deleteDeveloper 
} from '../redux/action/developer-action';

class DeveloperTable extends Component {

    componentDidMount() {
        this.props.getDeveloperList();
    }

    render() {
        const {deleteDeveloper, showUpdateDeveloperModal} = this.props;

        return (
            <Table striped responsive>
                <thead>
                    <tr className='developer-table-row'>
                        <th className='developer-table-cell'>EMP ID</th>
                        <th className='developer-table-cell'>FIRST NAME</th>
                        <th className='developer-table-cell'>MIDDLE NAME</th>
                        <th className='developer-table-cell'>LAST NAME</th>
                        <th className='developer-table-cell'>POSITION</th>
                        <th className='developer-table-cell'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.developerList.map((developer) =>{
                            return (
                                <tr key={developer.devId} className='developer-table-row'>
                                    <td className='developer-table-cell'>{developer.devId}</td>
                                    <td className='developer-table-cell'>{developer.firstName}</td>
                                    <td className='developer-table-cell'>{developer.middleName}</td>
                                    <td className='developer-table-cell'>{developer.lastName}</td>
                                    <td className='developer-table-cell'>{developer.position}</td>
                                    <td className='developer-table-cell'>
                                        <EditIcon onClick={() => showUpdateDeveloperModal(developer)} />
                                        <DeleteIcon onClick={() => deleteDeveloper(developer.devId)} />
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
        developerList: state.developerData.developerList 
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getDeveloperList: () => dispatch(getDeveloperList()),
        showUpdateDeveloperModal: (developer) => dispatch(showUpdateDeveloperModal(developer)),
        deleteDeveloper: (devId) => dispatch(deleteDeveloper(devId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperTable);