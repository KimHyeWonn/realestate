import React, { Component } from 'react';
import * as service from '../lib/post';
import HighCharts from '../highcharts/HighCharts';

class ChartContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            city: [],
            fetching: false,
            date: [],
            dealType:{
                housingType: {
                    data: []
                }
            }
        };
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async (city,date) => {
        this.setState({
            fetching: true
        });

        const info = await Promise.all([
            service.getChartData(city,date)
        ]);

        const {dealType,housingType,data} = info[0].data;

        this.setState({
            city,
            date,
            dealType: {
                housingType: {
                    data
                }
            },
            fetching: false
        });
    }

    render() {
        const {city,date,dealType} = this.state;
        return (
            <div>
                <HighCharts
                    city={city}
                    date={date}
                    dealType={dealType}
                    housingType={dealType.housingType}
                    data={dealType.housingType.data}
                />
            </div>
        );
    }
}

export default ChartContainer;