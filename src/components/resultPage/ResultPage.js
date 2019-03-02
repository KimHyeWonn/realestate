import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './ResultPage.css';
import ResultList from './ResultList';

class ResultPage extends Component {
    static defaultProps={
        list:[]
    }
    state = {
        checked : false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        theme:''
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
        } else if (value.value === "cc") {
            this.setState(
                { checked9: !this.state.checked9 }
            );
        }
    }

    
    render() {
        const {buliding} = this.props.resultData;
        const list = buliding.map(
            info=>(
                <ResultList key={info.no} info={info} />
            )
        );
        return (
            <div>                
                {/* 매물보여주는 div */}
                <div className="dealTypeDiv">
                    {list}
                </div>
                
            </div>
        );
    }
}

export default ResultPage;