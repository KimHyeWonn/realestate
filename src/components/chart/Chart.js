import React, { Component } from 'react';
import Highcharts from "../../highcharts/HighCharts";

class chart extends Component {
    render() {
        return (
            <div>
                <h1>그래프</h1>
                <Highcharts />
            </div>
        );
    }
}

export default chart;