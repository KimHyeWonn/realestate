//날짜, 지역 선택 페이지
import React, { Component, Fragment } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import * as data from './SelectData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//https://react.semantic-ui.com/modules/dropdown/#usage-select-on-navigation
class SelectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area1Data: data.area1,
            area2Data: [],
            area3Data: [],
            startDate: new Date(),
            endDate: new Date()
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

    dateStartHandleChange = (date) => {
        this.setState({startDate: date});
    }

    dateEndHandleChange = (date) => {
        this.setState({endDate: date});
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>지역, 날짜 선택</h1>
                    <Dropdown placeholder='시/도' clearable fluid selection options={this.state.area1Data} onChange={this.handleChange1}/>
                    <Dropdown placeholder='시/군/구' clearable fluid selection options={this.state.area2Data} onChange={this.handleChange2}/>
                    <Dropdown placeholder='읍/면/동' clearable fluid selection options={this.state.area3Data}  />
                </div>
                <div>
                    {/* <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={this.state.startDate}
                        onChange={this.dateStartHandleChange}
                    /> */}

                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.dateStartHandleChange}
                        maxDate={new Date()}
                    />
                    
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.dateEndHandleChange}
                        maxDate={new Date()}
                    />
                </div>
                <Button color="gray">조회</Button>
            </Fragment>
        );
    }
}

export default SelectPage;