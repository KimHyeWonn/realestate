import React, { Component } from 'react';
import ChartDeal from 'highcharts/ChartDeal';
import ChartLease from 'highcharts/ChartLease'
import ChartMonth from 'highcharts/ChartMonth';
import {Grid, Segment, GridColumn} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class chart extends Component {
    render() {
        // 조건 및 결과 데이터
        const {conditionData} = this.props;

        const style = {
            padding:'1rem'
        };
        const op = [15,22,58,65,88,99,100,110];
        
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
                    <br></br>
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
                            <ChartMonth op={op}/>
                        </GridColumn>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default chart;