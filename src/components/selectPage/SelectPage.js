//날짜, 지역 선택 페이지
import React, { Component, Fragment } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import * as data from './SelectData';

//https://react.semantic-ui.com/modules/dropdown/#usage-select-on-navigation
class SelectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area1Data: data.area1,
            area2Data: [],
            area3Data: [],
            yearData: data.year,
            monthData: data.month
        };
    }
    // 시/도 선택 후 시/군/구 값 변경
    handleChange1 = (e, { value }) => {
        if(value==="서울시") this.setState({area2Data : data.서울시});
        else {
            this.setState({area2Data: []});
        }
    };

    // 시/군/구 선택 후 읍/면/동 값 변경
    handleChange2 = (e, { value }) => {
        if(value==="종로구") this.setState({area3Data : data.종로구});
        else {
            this.setState({area3Data: []});
        }
    };

    render() {
        return (
            <Fragment>
                <div>
                    <h1>지역, 날짜 선택</h1>
                    <Dropdown placeholder='시/도' clearable search selection options={this.state.area1Data} onChange={this.handleChange1}/>
                    <Dropdown placeholder='시/군/구' clearable search selection options={this.state.area2Data} onChange={this.handleChange2}/>
                    <Dropdown placeholder='읍/면/동' clearable search selection options={this.state.area3Data}  />

                    <Dropdown placeholder='년' clearable selection options={this.state.yearData}  />
                    <Dropdown placeholder='월' clearable selection options={this.state.monthData}  />

                    <Button color="grey">조회</Button>
                </div>
                
            </Fragment>
        );
    }
}

export default SelectPage;