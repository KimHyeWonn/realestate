import React, { Component } from 'react';
import Highchart from '../../highcharts/HighCharts';

class chart extends Component {
    render() {
        return (
            <div>
                <Highchart/>
                <Highchart/>
                <Highchart/>
            </div>
        );
    }
}

export default chart;