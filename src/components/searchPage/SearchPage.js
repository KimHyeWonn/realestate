import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Segment, Button, Checkbox,Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class SearchPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dealTypeData: [],   //지워도 되는데 아직 남겨둔거임!
            housingTypeData: [],
            inputData: '',
            checked1:"false",
            checked2:"false",
            checked3:"false",
            checked4:"false",
            checked5:"false",
            checked6:"false"
        };
    }

    apartChange = (e, { value ,checked}) => {
        const { housingTypeData } = this.state;
        var {checked1} = this.state;
        console.log("checked : ",{checked1});
        if(checked === true){
            this.setState({
                housingTypeData: housingTypeData.concat({   //지워도 되는데 아직 남겨둔거임
                    value
                }),checked1:"true"
            });
            
        }else {
            this.setState({
                checked1:"false"
            });
        }
    }
    officetelChange = (e, { value, checked}) => {
        const { housingTypeData } = this.state;
        
        if(checked === true){
            this.setState({
                housingTypeData: housingTypeData.concat({
                    value
                }),checked2:"true"
            });
            
        }else {
            this.setState({
                checked2:"false"
            });
        }
    }
    houseChagne = (e, { value,checked }) => {
        const { housingTypeData } = this.state;
        if(checked === true){
            this.setState({
                housingTypeData: housingTypeData.concat({
                    value
                }),checked3:"true"
            });
            
        }else {
            this.setState({
                checked3:"false"
            });
        }
    }
    leaseChagne = (e, { value,checked }) => {
        const { dealTypeData } = this.state;
        if(checked===true){
            this.setState({
                dealTypeData: dealTypeData.concat({
                    value
                }),checked4:"true"
            });
        }else{
            this.setState({
                checked4:"false"
            });
        }
    }
    dealChagne = (e, { value,checked }) => {
        const { dealTypeData } = this.state;
        if(checked===true){
            this.setState({
                dealTypeData: dealTypeData.concat({
                    value
                }),checked5:"true"
            });
        }else{
            this.setState({
                checked5:"false"
            });
        }
        
    }
    monthChagne = (e, { value,checked }) => {
        const { dealTypeData } = this.state;
        if(checked===true){
            this.setState({
                dealTypeData: dealTypeData.concat({
                    value
                }),checked6:"true"
            });
        }else{
            this.setState({
                checked6:"false"
            });
        }
        
    }
    searchChange = (e) => {
        this.setState({
            inputData: e.target.value
        });
    }

    // 검색 버튼 이벤트
    searchClick = () => {
        // SearchPage에 선택한 조건을 부모 컴포넌트에 전달
        let data = [];
        let {inputData } = this.state;
        let hou=[],del=[];
        let {checked1,checked2,checked3,checked4,checked5,checked6} = this.state;
        if(checked1==="true")hou=hou.concat({value:"아파트"});
        if(checked2==="true")hou=hou.concat({value:"오피스텔"});
        if(checked3==="true")hou=hou.concat({value:"주택"});
        if(checked4==="true")del=del.concat({value:"전세"});
        if(checked5==="true")del=del.concat({value:"매매"});
        if(checked6==="true")del=del.concat({value:"월세"});
        console.log("array check : ",hou);
        console.log("array check2 : ",del);
        data.push({
            housingTypeData: hou,
            dealTypeData: del,
            inputData: inputData
        });

        // 부모 컴포넌트 (Search)로 전달
        this.props.searchData(data);
    };
    
    render() {
        return (
            <div className="topDiv">
                <Segment>
                    <div className="searchDiv">

                        <div className="radioDiv"><Checkbox  onChange={this.apartChange} value="아파트" /><Label basic color='red' pointing='left'>에효시발</Label></div>
                        <div className="radioDiv"><Checkbox  onChange={this.officetelChange} value="오피스텔" /><Label basic color='orange' pointing='left'>어케 보여주지</Label></div>
                        <div className="radioDiv"><Checkbox label="주택" onChange={this.houseChagne} value="주택" /></div>
                        <div className="radioDiv"><Checkbox label="전세" onChange={this.leaseChagne} value="전세" /></div>
                        <div className="radioDiv"><Checkbox label="월세" onChange={this.monthChagne} value="월세" /></div>
                        <div className="radioDiv"><Checkbox label="매매" onChange={this.dealChagne} value="매매" /></div>

                        <Input icon='search' placeholder='지역이나 역명' onChange={this.searchChange} value={this.state.inputSearch} />
                        <Button color="grey" onClick={this.searchClick}>검색</Button>
                    </div>

                </Segment>
            </div>
        );
    }
}

export default SearchPage;