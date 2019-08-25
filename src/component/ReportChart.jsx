import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const ReportChart = props => {

    const convertReportData = (report) => {
        
        const convertedData = report.reportList.map((rep) => {

            let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +  (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

            return { 
                title: rep.skillName,
                value: rep.total,
                color: randomColor
            }
        });

        return convertedData
    }

    return (
        <PieChart
            style={{height: '600px', marginBottom: '20px'}}
            data={convertReportData(props)}
    />
    )
}

export default ReportChart;

   

