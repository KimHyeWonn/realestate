import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Divider, Button, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const houseoptions = [
    { key: 'apart', text: '아파트', value: 'apart' },
    { key: 'officetel', text: '오피스텔', value: 'officetel' },
    { key: 'house', text: '주택', value: 'house' },
]
const dealoptions = [
    { key: 'lease', text: '전세', value: 'lease' },
    { key: 'deal', text: '매매', value: 'deal' },
    { key: 'month', text: '월세', value: 'month' },
]
const renderLabel = label =>({
    color:'blue',
    content :`${label.text}`
})
const renderLabel2 = label =>({
    color:'pink',
    content :`${label.text}`
})
class SearchPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dealTypeData: [],   //지워도 되는데 아직 남겨둔거임!
            housingTypeData: [],
            inputData: '',
            checked1: "false",
            checked2: "false",
            checked3: "false",
            checked4: "false",
            checked5: "false",
            checked6: "false",
            houseoptions,dealoptions,
            houses:'',deals:'',
        };
        this.keyPress = this.keyPress.bind(this);
    }
    keyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
            this.searchClick()
        }
    }
    apartChange = (e, { value, checked }) => {
        const { housingTypeData } = this.state;
        if (checked === true) {
            this.setState({
                housingTypeData: housingTypeData.concat({   //지워도 되는데 아직 남겨둔거임
                    value
                }),
                checked1: "true"
            });

        } else {
            this.setState({
                checked1: "false"
            });
        }
    }
    officetelChange = (e, { value, checked }) => {
        const { housingTypeData } = this.state;

        if (checked === true) {
            this.setState({
                housingTypeData: housingTypeData.concat({
                    value
                }), checked2: "true"
            });

        } else {
            this.setState({
                checked2: "false"
            });
        }
    }
    houseChagne = (e, { value, checked }) => {
        const { housingTypeData } = this.state;
        if (checked === true) {
            this.setState({
                housingTypeData: housingTypeData.concat({
                    value
                }), checked3: "true"
            });

        } else {
            this.setState({
                checked3: "false"
            });
        }
    }
    leaseChagne = (e, { value, checked }) => {
        const { dealTypeData } = this.state;
        if (checked === true) {
            this.setState({
                dealTypeData: dealTypeData.concat({
                    value
                }), checked4: "true"
            });
        } else {
            this.setState({
                checked4: "false"
            });
        }
    }
    dealChagne = (e, { value, checked }) => {
        const { dealTypeData } = this.state;
        if (checked === true) {
            this.setState({
                dealTypeData: dealTypeData.concat({
                    value
                }), checked5: "true"
            });
        } else {
            this.setState({
                checked5: "false"
            });
        }

    }
    monthChagne = (e, { value, checked }) => {
        const { dealTypeData } = this.state;
        if (checked === true) {
            this.setState({
                dealTypeData: dealTypeData.concat({
                    value
                }), checked6: "true"
            });
        } else {
            this.setState({
                checked6: "false"
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
        let { inputData,houses,deals } = this.state;
        // let hou = [], del = [];
        // let { checked1, checked2, checked3, checked4, checked5, checked6 } = this.state;
        // if (checked1 === "true") hou = hou.concat({ value: "apart" });
        // if (checked2 === "true") hou = hou.concat({ value: "officetel" });
        // if (checked3 === "true") hou = hou.concat({ value: "house" });
        // if (checked4 === "true") del = del.concat({ value: "lease" });
        // if (checked5 === "true") del = del.concat({ value: "deal" });
        // if (checked6 === "true") del = del.concat({ value: "month" });
        data.push({
            housingTypeData: houses,
            dealTypeData: deals,
            inputData: inputData
        });
        // 부모 컴포넌트 (Search)로 전달
        this.props.searchDataSet(data);
    };
    handleAddition = (e, { value }) => {
        this.setState({
         houseoptions: [{ text: value, value }, ...this.state.options],
        });
    }
    
    handleChange = (e, { value }) => {
        this.setState({ currentValues: value,houses:value })
    }

    handleAdditionD = (e, { value }) => {
        this.setState({
         dealoptions: [{ text: value, value }, ...this.state.options],
        });
    }
    
    handleChangeD = (e, { value }) => {
        this.setState({ currentValuesD: value,deals:value })
    }
    render() {
        return (
            <div className="topDiv">
                <div className="searchDiv">
                    <Input size="big" icon='search' placeholder='지역이나 역명' onChange={this.searchChange} value={this.state.inputSearch} onKeyDown={this.keyPress} />

                    {/* <div className="radioDiv"><Checkbox label="아파트" onChange={this.apartChange} value="apart" /></div>
                    <div className="radioDiv"><Checkbox label="오피스텔" onChange={this.officetelChange} value="officetel" /></div>
                    <div className="radioDiv"><label className="b"><Checkbox label="주택" onChange={this.houseChagne} value="주택" /></label></div>

                    <div className="radioDiv"><Checkbox label="전세" onChange={this.leaseChagne} value="전세" /></div>
                    <div className="radioDiv"><Checkbox label="월세" onChange={this.monthChagne} value="월세" /></div>
                    <div className="radioDiv"><Checkbox label="매매" onChange={this.dealChagne} value="매매" /></div> */}
                    <Dropdown
                    options={this.state.houseoptions}
                    placeholder="집 타입"
                    search
                    selection
                    multiple
                    allowAdditions
                    onAddItem={this.handleAddition}
                    onChange={this.handleChange}
                    renderLabel={renderLabel}
                />
                <Dropdown
                    options={this.state.dealoptions}
                    placeholder="거래 타입"
                    search
                    selection
                    multiple
                    allowAdditions
                    onAddItem={this.handleAdditionD}
                    onChange={this.handleChangeD}
                    renderLabel={renderLabel2}
                />

                    <Button color="grey" onClick={this.searchClick}>검색</Button>

                </div>
                <Divider clearing />
            </div>
        );
    }
}

export default SearchPage;