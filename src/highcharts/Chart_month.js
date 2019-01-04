import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart_month extends Component {
    render() {
        const style ={
            minwidth: '310px',
	        maxwidth: '800px',
	        height: '400px',
	        margin: '0 auto'
        };
        const op = this.props.op; 
        const ho = [51,55,56,59,60,42,33,45];
        const ap = [60,62,65,67,69,55,76,79];
        const cate = ['2011년','2012년','2013년','2014년','2015년','2016년','2017년','2018년'];
        
        const config = {
            title: {
                text: '월세'
            },
            xAxis:{
                categories:cate
            },
            yAxis: {
                title: {
                    text: '가격'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series:[{
                name:'오피스텔',
                data:op
            },{
                name:'주택',
                data:ho
            },{
                name:'아파트',
                data:ap
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        };
        return (
            <div sytle={style}>
                <ReactHighcharts config ={config}></ReactHighcharts>
            </div>
        );
    }
}

export default Chart_month;