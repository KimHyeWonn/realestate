import React, { Component } from 'react';
import ChartDeal from 'highcharts/ChartDeal';
import ChartLease from 'highcharts/ChartLease'
import ChartMonth from 'highcharts/ChartMonth';
import {Grid, Segment, GridColumn} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class chart extends Component {
    componentDidUpdate() {
        console.log(this.props.conditionData.result);
        console.log("average",this.props.conditionData.result[0].average);
    }

    render() {
        // 조건 및 결과 데이터
        const {conditionData} = this.props;

        const style = {
            padding:'1rem'
        };
        const op = conditionData.result[0].average;
        //console.log("average1234",conditionData.result[0].average);
        //const op = [90,80,77,99,88,97,88,78,54];
        const ho = [90,80,77,99,88,97,88,78];
        const ap = [45,34,44,75,77,65,34,67];
        
        return (
            <div style={style}>
                <h1>그래프</h1>
                
                {/* 조건 및 결과 데이터 출력 */}
                <div>
                    조건 : 
                    {conditionData.city}-
                    {conditionData.district}-
                    {conditionData.neighborhood}-
                    {conditionData.year}-
                    {conditionData.month}
                </div>
                
                <Segment>
                    <Grid columns={3} relaxed='very'>
                        <GridColumn>
                            <ChartDeal />
                        </GridColumn>
                        <GridColumn>
                            <ChartLease/>
                        </GridColumn>
                        <GridColumn>
                            <ChartMonth op={op} ho={ho} ap={ap} />
                        </GridColumn>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default chart;