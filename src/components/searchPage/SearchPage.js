import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Radio, Segment, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class SearchPage extends Component {
    state ={
        checked1: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            dealTypeData:[],
            housingTypeData:[],
            inputData:'',
            dealType: '월세',
            housingType: '아파트',
            search: '강남역',
            
            checked2: false
        };
    }
   
    apartChange = (e,{value}) =>{
        const {housingTypeData}=this.state;

        this.setState({housingTypeData:housingTypeData.concat({
            value
        })
    });
    }
    officetelChange = (e,{value}) =>{
        const {housingTypeData}=this.state;

        this.setState({housingTypeData:housingTypeData.concat({
            value
        })
    });
    }
    houseChagne = (e,{value}) =>{
        const {housingTypeData}=this.state;

        this.setState({housingTypeData:housingTypeData.concat({
            value
        })
    });
    }
    leaseChagne = (e,{value}) => {
        const {dealTypeData}=this.state;

        this.setState({dealTypeData:dealTypeData.concat({
            value
        })
    });
    }
    dealChagne = (e,{value}) => {
        const {dealTypeData}=this.state;

        this.setState({dealTypeData:dealTypeData.concat({
            value
        })
    });
    }
    monthChagne = (e,{value}) => {
        const {dealTypeData}=this.state;

        this.setState({dealTypeData:dealTypeData.concat({
            value
        })
    });
    }
    searchChange =(e)=>{
        this.setState({
            inputData:e.target.value
        });
    }
    
    // 검색 버튼 이벤트
    searchClick = () => {
        // SearchPage에 선택한 조건을 부모 컴포넌트에 전달
        let data = [];
        let {housingTypeData,dealTypeData,inputData} = this.state;

        data.push({
            housingTypeData:housingTypeData,
            dealTypeData:dealTypeData,
            inputData:inputData
        });
        
        // 부모 컴포넌트 (Search)로 전달
        this.props.searchData(data);
    };
    
    render() {
        return (
            <div className="topDiv">
                <Segment>
                    <div className="searchDiv">
                    
                        <div className="radioDiv"><Radio  label="아파트" onChange={this.apartChange} value="아파트" checked={this.state.checked1}/></div>
                        <div className="radioDiv"><Radio  label="오피스텔" onChange={this.officetelChange} value="오피스텔" /></div>
                        <div className="radioDiv"><Radio  label="주택" onChange={this.houseChagne} value="주택" /></div>
                        <div className="radioDiv"><Radio  label="전세" onChange={this.leaseChagne} value="전세" /></div>
                        <div className="radioDiv"><Radio  label="월세" onChange={this.monthChagne} value="월세" /></div>
                        <div className="radioDiv"><Radio  label="매매" onChange={this.dealChagne} value="매매" /></div>

                        <Input icon='search' placeholder='지역이나 역명' onChange={this.searchChange}  value={this.state.inputSearch}/>
                        <Button color="grey" onClick={this.searchClick}>검색</Button>
                    </div>
                    
                </Segment>
                
                {/* <Segment>
                    <div className="searchDiv">
                        <Input icon='search' placeholder='Search...' />

                        <div className="radioDiv"><Radio  label="store" /></div>
                        <div className="radioDiv"><Radio  label="security" /></div>
                        <div className="radioDiv"><Radio  label="school" /></div>
                        <div className="radioDiv"><Radio  label="medical" /></div>
                        <div className="radioDiv"><Radio  label="public" /></div>
                    </div>
                </Segment> */}
            </div>
        );
    }
}

export default SearchPage;