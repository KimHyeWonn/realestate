//날짜, 지역 선택 페이지
import React, { Component } from 'react';
import { Dropdown, Button, Segment } from 'semantic-ui-react'
import * as data from './SelectData';
import './SelectPage.css';

class SelectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityData: data.area1,
            districtData: [],
            neighborhoodData: [],
            yearData: data.year,
            monthData: data.month,
            city: '',
            district: '',
            neighborhood: '',
            year: '',
            month: ''
        };
    }
    // 시/도
    cityChange = (e, { value }) => {
        if(value==="서울시") this.setState({districtData : data.서울시});
        else {
            this.setState({districtData: []});
        }

        this.setState({city : value});
    };

    // 시/군/구
    districtChange = (e, { value }) => {
        if(value==="종로구") this.setState({neighborhoodData : data.종로구});
        else {
            this.setState({neighborhoodData: []});
        }

        this.setState({district : value});
    };

    // 읍/면/동
    neighborhoodChange = (e, { value }) => {
        this.setState({neighborhood : value});
    };

    // 년
    yearChange = (e, { value }) => {
        this.setState({year : value});
    };

    // 월
    monthChange = (e, { value }) => {
        this.setState({month : value});
    };

    // 조회 버튼 이벤트
    searchClick = () => {
        let data = [];
        let {city, district, neighborhood, year, month} = this.state;

        data.push({
            city: city,
            district: district,
            neighborhood: neighborhood,
            year: year,
            month: month 
        });
        this.props.changeConditionData(data);
    };

    render() {
        const {
            cityData,
            districtData,
            neighborhoodData,
            yearData,
            monthData
        } = this.state;

        return (
            <div className="div">
                <Segment>
                    <span className="dropdown"><Dropdown placeholder='시/도' clearable search selection options={cityData} onChange={this.cityChange}/></span>
                    <span className="dropdown"><Dropdown placeholder='시/군/구' clearable search selection options={districtData} onChange={this.districtChange}/></span>
                    <span className="dropdown"><Dropdown placeholder='읍/면/동' clearable search selection options={neighborhoodData} onChange={this.neighborhoodChange}/></span>
                    <span className="dropdown"><Dropdown placeholder='년' clearable selection options={yearData} onChange={this.yearChange}/></span>
                    <span className="dropdown"><Dropdown placeholder='월' clearable selection options={monthData}  onChange={this.monthChange}/></span>
                   
                    <span className="searchBtn"><Button color="grey" onClick={this.searchClick}>조회</Button></span>

                    {/* <Dropdown placeholder='시/도' clearable search selection options={cityData} onChange={this.cityChange}/>
                    <Dropdown placeholder='시/군/구' clearable search selection options={districtData} onChange={this.districtChange}/>
                    <Dropdown placeholder='읍/면/동' clearable search selection options={neighborhoodData} onChange={this.neighborhoodChange}/>
                    <Dropdown placeholder='년' clearable selection options={yearData} onChange={this.yearChange}/>
                    <Dropdown placeholder='월' clearable selection options={monthData}  onChange={this.monthChange}/>

                    <Button color="grey" onClick={this.searchClick}>조회</Button> */}
                </Segment>
            </div>
        );
    }
}

export default SelectPage;