import React, { Component } from 'react';
import Chart_deal from '../../highcharts/Chart_deal';
import Chart_lease from '../../highcharts/Chart_lease'
import Chart_month from '../../highcharts/Chart_month';
import {Grid,Segment, GridColumn} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class chart extends Component {
    
    render() {
        const style = {
            padding:'1rem'
        };
        const op = [15,22,58,65,88,99,100,110];
        
        return (
            <div style={style}>
                <h1>그래프</h1>
                <Segment>
                    <Grid columns={3} relaxed='very'>
                        <GridColumn>
                            <Chart_deal />
                        </GridColumn>
                        <GridColumn>
                            <Chart_lease/>
                        </GridColumn>
                        <GridColumn>
                            <Chart_month op={op}/>
                        </GridColumn>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default chart;