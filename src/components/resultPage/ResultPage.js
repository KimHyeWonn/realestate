import React, { Component } from 'react';
import { Button, Popup, Grid,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './ResultPage.css';
import * as data from "./ResultImg"

class ResultPage extends Component {
    
    state={
        checked:true,
        checked1:true,
        checked2:true,
        checked3:true,
        checked4:true,
        unclicked:data.unclicked,
        clicked:data.clicked
    }
    handleCheck=(event)=>{
        var value = {value:event.target.value}
        if(value.value==="pr"){
            this.setState(
                {checked:!this.state.checked}
                
            );
        }else if(value.value==="ca"){
            this.setState(
                {checked1:!this.state.checked1}
            );
        }
        else if(value.value==="sc"){
            this.setState(
                {checked2:!this.state.checked2}
            );
        }else if(value.value==="hs"){
            this.setState(
                {checked3:!this.state.checked3}
            );
        } else if(value.value==="ci"){
            this.setState(
                {checked4:!this.state.checked4}
            );
        }
        console.log("hi",value);
        
    }
    render() {
        const {checked,checked1,checked2,checked3,checked4} = this.state
        const {unclicked,clicked} = this.state
        var img_path = [];
        
        if(this.state.checked2){
            //img_path[2]=clicked[2]    어떻게 해결해야될지 모르겟음
            img_path[2]=require('./school_c.png')
        }else{
            //img_path[2]=unclicked[2].value
            img_path[2]=require("../image/school_un.png")
        }
        return (
            <div>
                {checked ? (<h5>{unclicked[0].text}</h5>) : <h5>{unclicked[0].text}선택 안함</h5>}
                {checked1 ? (<h5>{unclicked[1].text}</h5>) : <h5>{unclicked[1].text}선택 안함</h5>}
                {checked2 ? (<h5>{unclicked[2].text}</h5>) : <h5>{unclicked[2].text}선택 안함</h5>}
                {checked3 ? (<h5>{unclicked[3].text}</h5>) : <h5>{unclicked[3].text}선택 안함</h5>}
                {checked4 ? (<h5>{unclicked[4].text}</h5>) : <h5>{unclicked[4].text}선택 안함</h5>}
                <Popup trigger={<Button>조건 선택</Button>} position='bottom center'on='click' hideOnScroll>
                <div className="popupDiv"></div>
                
                    <Grid centered divided columns={1}>
                        <Grid.Column textAlign='center'>
                             <ul className="imgUl">
                                <li><label className="theme1">
                                        <input type="checkbox" id="pr" value="pr" onChange={this.handleCheck} defaultChecked={checked} />
                                        {checked?(<Image src={clicked[0]} centered/> ):(<Image src={unclicked[0].value}  centered/>)}
                                        <span className="theme_name">버스</span>
                                    </label>
                                </li>
                                <li><label className="theme1">
                                        <input type="checkbox" id="ca" value="ca" onChange={this.handleCheck} defaultChecked={checked1}/>
                                        {checked1?(<Image src={clicked[1]} centered/> ):(<Image src={unclicked[1].value}  centered/>)}
                                        <span className="theme_name">카페</span>
                                    </label>
                                </li>
                                <li><label className="theme1">
                                        <input type="checkbox" id="sc" value="sc" onChange={this.handleCheck} defaultChecked={checked2}/>
                                        <Image src={img_path[2]} size="tiny" centered/> 
                                        <span className="theme_name">학교</span>
                                    </label>
                                </li>
                                <li><label className="theme1">
                                        <input type="checkbox" id="hs" value="hs" onChange={this.handleCheck} defaultChecked={checked3}/>
                                        {checked3?(<Image src={clicked[3]} centered/> ):(<Image src={unclicked[3].value}  centered/>)}
                                        <span className="theme_name">병원</span>
                                    </label>
                                </li>
                                <li><label className="theme1">
                                        <input type="checkbox" id="ci" value="ci" onChange={this.handleCheck} defaultChecked={checked4}/>
                                        {checked4?(<Image src={clicked[4]} centered/> ):(<Image src={unclicked[4].value}  centered/>)}
                                        <span className="theme_name">영화관</span>
                                    </label>
                                </li>
                                
                            </ul> 
                            <Button>선택</Button>
                        </Grid.Column>
                        
                    </Grid>
                </Popup>
                
            </div>
        );
    }
}

export default ResultPage;