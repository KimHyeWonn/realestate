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
        this.keyPress=this.keyPress.bind(this);
    }
    keyPress= (e) => {
        if (e.key === 'Enter') {
          console.log('do validate');
          this.searchClick()
        }
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
        if(checked1==="true")hou=hou.concat({value:"apart"});
        if(checked2==="true")hou=hou.concat({value:"officetel"});
        if(checked3==="true")hou=hou.concat({value:"house"});
        if(checked4==="true")del=del.concat({value:"lease"});
        if(checked5==="true")del=del.concat({value:"deal"});
        if(checked6==="true")del=del.concat({value:"month"});
        data.push({
            housingTypeData: hou,
            dealTypeData: del,
            inputData: inputData
        });
        // 부모 컴포넌트 (Search)로 전달
        this.props.searchDataSet(data);
    };
    
    render() {
        return (
            <div className="topDiv">
            
                <Segment>
                    <div className="searchDiv">
                        <div className="radioDiv"><Label color='teal' ><Checkbox label="아파트" onChange={this.apartChange} value="apart" /></Label></div>
                        <div className="radioDiv"><Checkbox  onChange={this.officetelChange} value="officetel" /><Label circular color='orange' >오피스텔</Label></div>
                        <div className="radioDiv"><label className="b"><Checkbox label="주택" onChange={this.houseChagne} value="주택" /></label></div>
                        <div className="radioDiv"><Checkbox label="전세" onChange={this.leaseChagne} value="전세" /></div>
                        <div className="radioDiv"><Checkbox label="월세" onChange={this.monthChagne} value="월세" /></div>
                        <div className="radioDiv"><Checkbox label="매매" onChange={this.dealChagne} value="매매" /></div>

                        <Input icon='search' placeholder='지역이나 역명' onChange={this.searchChange} value={this.state.inputSearch} onKeyDown={this.keyPress}/>
                        <Button color="grey" onClick={this.searchClick}>검색</Button>
                    </div>

                </Segment>
                
            </div>
        );
    }
}

export default SearchPage;