import React, { Component } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReportTable from './ReportTable';
import ReportChart from './ReportChart';
import { generateReport } from '../redux/action/report-action';

class Report extends Component {

    componentDidMount() {
        const {generateReport} = this.props;
        generateReport();
    }

    render() {
        const {reportList} = this.props;

        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <ReportChart reportList={reportList}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReportTable reportList={reportList} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        reportList: state.reportData.reportList
    };
};


const mapDispatchToProps = dispatch => {
    return {
        generateReport: () => dispatch(generateReport()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Report);