import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Divider, Button, Dropdown, Popup, Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as data from "./SearchImg"

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
            inputData: '',
            houseoptions,dealoptions,
            houses:'',deals:'',
            checked : false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false,
            unclicked: data.unclicked,
            clicked: data.clicked,
            sendTheme:[]
        };
        this.keyPress = this.keyPress.bind(this);
    }
    keyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
            this.searchClick()
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
        let { inputData,houses,deals,sendTheme } = this.state;
        data.push({
            housingTypeData: houses,
            dealTypeData: deals,
            inputData: inputData,
            options:sendTheme
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

    //조건 선택 체크박스
    handleCheck = (event) => {
        var value = { value: event.target.value }
        if (value.value === "pr") {
            this.setState(
                { checked: !this.state.checked }
            );
        } else if (value.value === "ca") {
            this.setState(
                { checked1: !this.state.checked1 }
            );
        }
        else if (value.value === "sc") {
            this.setState(
                { checked2: !this.state.checked2 }
            );
        } else if (value.value === "hs") {
            this.setState(
                { checked3: !this.state.checked3 }
            );
        } else if (value.value === "ci") {
            this.setState(
                { checked4: !this.state.checked4 }
            );
        } else if (value.value === "con") {
            this.setState(
                { checked5: !this.state.checked5 }
            );
        } else if (value.value === "po") {
            this.setState(
                { checked6: !this.state.checked6 }
            );
        } else if (value.value === "fr") {
            this.setState(
                { checked7: !this.state.checked7 }
            );
        } else if (value.value === "su") {
            this.setState(
                { checked8: !this.state.checked8 }
            );
        } 
    }

    chooseTheme=()=>{
        const { checked, checked1, checked2, checked3, checked4, checked5, checked6, checked7, checked8 } = this.state
        const {unclicked} = this.state
        var theme=[]
        if(checked===true) theme=theme.concat( unclicked[0].key )
        if(checked1===true)theme=theme.concat(unclicked[1].text )
        if(checked2===true)theme=theme.concat(unclicked[2].text )
        if(checked3===true)theme=theme.concat(unclicked[3].text )
        if(checked4===true)theme=theme.concat(unclicked[4].text )
        if(checked5===true)theme=theme.concat(unclicked[5].text )
        if(checked6===true)theme=theme.concat(unclicked[6].text )
        if(checked7===true)theme=theme.concat(unclicked[7].text )
        if(checked8===true)theme=theme.concat(unclicked[8].text )
            
        this.setState({
            sendTheme:theme
        });
    }
    render() {
        const { checked, checked1, checked2, checked3, checked4, checked5, checked6, checked7, checked8 } = this.state
        const { unclicked, clicked } = this.state

        return (
            <div className="topDiv">
                <div className="searchDiv">
                    <Input size="big" icon='search' placeholder='지역이나 역명' onChange={this.searchChange} value={this.state.inputSearch} onKeyDown={this.keyPress} />

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
                
                <Popup trigger={<Button>조건 선택</Button>} position='bottom center' on='click' hideOnScroll>
                    <div className="popupDiv"></div>
                    <Grid centered divided columns={1}>
                        <Grid.Column textAlign='center'>
                            <ul className="imgUl">
                                <li><label className="theme1">
                                    <input type="checkbox" id="pr" value="pr" onChange={this.handleCheck} defaultChecked={checked} />
                                    {checked ? (<Image src={clicked[0]} size="tiny" centered />) : (<Image src={unclicked[0].value} size="tiny" centered />)}
                                    <span className="theme_name">버스</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="ca" value="ca" onChange={this.handleCheck} defaultChecked={checked1} />
                                    {checked1 ? (<Image src={clicked[1]} centered />) : (<Image src={unclicked[1].value} size="tiny" centered />)}
                                    <span className="theme_name">카페</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="sc" value="sc" onChange={this.handleCheck} defaultChecked={checked2} />
                                    {checked2 ? (<Image src={clicked[2]} size="tiny" centered />) : (<Image src={require("../image/school_un.png")} size="tiny" centered />)}
                                    <span className="theme_name">학교</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="hs" value="hs" onChange={this.handleCheck} defaultChecked={checked3} />
                                    {checked3 ? (<Image src={clicked[3]} size="tiny" centered />) : (<Image src={unclicked[3].value} size="tiny" centered />)}
                                    <span className="theme_name">병원</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="ci" value="ci" onChange={this.handleCheck} defaultChecked={checked4} />
                                    {checked4 ? (<Image src={clicked[4]} size="tiny" centered />) : (<Image src={unclicked[4].value} size="tiny" centered />)}
                                    <span className="theme_name">영화관</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="con" value="con" onChange={this.handleCheck} defaultChecked={checked5} />
                                    {checked5 ? (<Image src={clicked[5]} size="tiny" centered />) : (<Image src={unclicked[5].value} size="tiny" centered />)}
                                    <span className="theme_name">편의점</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="po" value="po" onChange={this.handleCheck} defaultChecked={checked6} />
                                    {checked6 ? (<Image src={clicked[6]} size="tiny" centered />) : (<Image src={unclicked[6].value} size="tiny" centered />)}
                                    <span className="theme_name">경찰서</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="fr" value="fr" onChange={this.handleCheck} defaultChecked={checked7} />
                                    {checked7 ? (<Image src={clicked[7]} size="tiny" centered />) : (<Image src={unclicked[7].value} size="tiny" centered />)}
                                    <span className="theme_name">소방서</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="su" value="su" onChange={this.handleCheck} defaultChecked={checked8} />
                                    <div className="imgDiv">{checked8 ? (<Image src={clicked[8]} size="tiny" centered />) : (<Image src={unclicked[8].value} size="tiny" centered />)}</div>
                                    <span className="theme_name">대형마트</span>
                                </label>
                                </li>
                                {/* <li><label className="theme1">
                                    <input type="checkbox" id="cc" value="cc" onChange={this.handleCheck} defaultChecked={checked9} />
                                    {checked9 ? (<Image src={clicked[9]} size="tiny" centered />) : (<Image src={unclicked[9].value} size="tiny" centered />)}
                                    <span className="theme_name">cctv</span>
                                </label>
                                </li> */}
                            </ul>
                            <Button onClick={this.chooseTheme}>선택</Button>
                        </Grid.Column>
                    </Grid>
                </Popup>

                <Button color="grey" onClick={this.searchClick}>검색</Button>

                </div>
                <Divider clearing />
                {/* <div className="radioDiv"><Checkbox label="아파트" onChange={this.apartChange} value="apart" /></div>
                    <div className="radioDiv"><Checkbox label="오피스텔" onChange={this.officetelChange} value="officetel" /></div>
                    <div className="radioDiv"><label className="b"><Checkbox label="주택" onChange={this.houseChagne} value="주택" /></label></div>

                    <div className="radioDiv"><Checkbox label="전세" onChange={this.leaseChagne} value="전세" /></div>
                    <div className="radioDiv"><Checkbox label="월세" onChange={this.monthChagne} value="월세" /></div>
                    <div className="radioDiv"><Checkbox label="매매" onChange={this.dealChagne} value="매매" /></div>  */}
           
            </div>
        );
    }
}

export default SearchPage;
         
// let hou = [], del = [];
        // let { checked1, checked2, checked3, checked4, checked5, checked6 } = this.state;
        // if (checked1 === "true") hou = hou.concat({ value: "apart" });
        // if (checked2 === "true") hou = hou.concat({ value: "officetel" });
        // if (checked3 === "true") hou = hou.concat({ value: "house" });
        // if (checked4 === "true") del = del.concat({ value: "lease" });
        // if (checked5 === "true") del = del.concat({ value: "deal" });
        // if (checked6 === "true") del = del.concat({ value: "month" });
        
// apartChange = (e, { value, checked }) => {
//     const { housingTypeData } = this.state;
//     if (checked === true) {
//         this.setState({
//             housingTypeData: housingTypeData.concat({   //지워도 되는데 아직 남겨둔거임
//                 value
//             }),
//             checked1: "true"
//         });

//     } else {
//         this.setState({
//             checked1: "false"
//         });
//     }
// }
// officetelChange = (e, { value, checked }) => {
//     const { housingTypeData } = this.state;

//     if (checked === true) {
//         this.setState({
//             housingTypeData: housingTypeData.concat({
//                 value
//             }), checked2: "true"
//         });

//     } else {
//         this.setState({
//             checked2: "false"
//         });
//     }
// }
// houseChagne = (e, { value, checked }) => {
//     const { housingTypeData } = this.state;
//     if (checked === true) {
//         this.setState({
//             housingTypeData: housingTypeData.concat({
//                 value
//             }), checked3: "true"
//         });

//     } else {
//         this.setState({
//             checked3: "false"
//         });
//     }
// }
// leaseChagne = (e, { value, checked }) => {
//     const { dealTypeData } = this.state;
//     if (checked === true) {
//         this.setState({
//             dealTypeData: dealTypeData.concat({
//                 value
//             }), checked4: "true"
//         });
//     } else {
//         this.setState({
//             checked4: "false"
//         });
//     }
// }
// dealChagne = (e, { value, checked }) => {
//     const { dealTypeData } = this.state;
//     if (checked === true) {
//         this.setState({
//             dealTypeData: dealTypeData.concat({
//                 value
//             }), checked5: "true"
//         });
//     } else {
//         this.setState({
//             checked5: "false"
//         });
//     }

// }
// monthChagne = (e, { value, checked }) => {
//     const { dealTypeData } = this.state;
//     if (checked === true) {
//         this.setState({
//             dealTypeData: dealTypeData.concat({
//                 value
//             }), checked6: "true"
//         });
//     } else {
//         this.setState({
//             checked6: "false"
//         });
//     }

// }