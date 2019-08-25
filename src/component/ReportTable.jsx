import React from 'react';
import Table from 'react-bootstrap/Table';

const ReportTable = props => (
        <Table striped responsive>
            <thead>
                <tr className='report-table-row'>
                    <th className='report-table-cell'>SKILL NAME</th>
                    <th className='report-table-cell'>TRAINED</th>
                    <th className='report-table-cell'>NOVICE</th>
                    <th className='report-table-cell'>PROFICIENT</th>
                    <th className='report-table-cell'>ADVANCED</th>
                    <th className='report-table-cell'>EXPERT</th>
                    <th className='report-table-cell'>LEADER</th>
                    <th className='report-table-cell'>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.reportList.map((report) =>{
                        return (
                            <tr key={report.skillName} className='report-table-row'>
                                <td className='report-table-cell'>{report.skillName}</td>
                                <td className='report-table-cell'>{report.trained}</td>
                                <td className='report-table-cell'>{report.novice}</td>
                                <td className='report-table-cell'>{report.proficient}</td>
                                <td className='report-table-cell'>{report.advanced}</td>
                                <td className='report-table-cell'>{report.expert}</td>
                                <td className='report-table-cell'>{report.leader}</td>
                                <td className='report-table-cell'>{report.total}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
)

export default ReportTable;