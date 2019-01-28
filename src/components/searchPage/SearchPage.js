import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Radio, Segment, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dealType: '월세',
            housingType: '아파트',
            search: '강남역'
        };
    }

    // 검색 버튼 이벤트
    searchClick = () => {
        // SearchPage에 선택한 조건을 부모 컴포넌트에 전달

        // 부모 컴포넌트 (Search)로 전달
        this.props.searchData(this.state);
    };

    render() {
        return (
            <div className="topDiv">
                <Segment>
                    <div className="searchDiv">
                        <Input icon='search' placeholder='Search...' />

                        <div className="radioDiv"><Radio toggle label="store" /></div>
                        <div className="radioDiv"><Radio toggle label="security" /></div>
                        <div className="radioDiv"><Radio toggle label="school" /></div>
                        <div className="radioDiv"><Radio toggle label="medical" /></div>
                        <div className="radioDiv"><Radio toggle label="public" /></div>
                    </div>
                    <Button color="grey" onClick={this.searchClick}>검색</Button>
                </Segment>
                <Segment>
                    <div className="searchDiv">
                        <Input icon='search' placeholder='Search...' />

                        <div className="radioDiv"><Radio  label="store" /></div>
                        <div className="radioDiv"><Radio  label="security" /></div>
                        <div className="radioDiv"><Radio  label="school" /></div>
                        <div className="radioDiv"><Radio  label="medical" /></div>
                        <div className="radioDiv"><Radio  label="public" /></div>
                    </div>
                </Segment>
            </div>
        );
    }
}

export default SearchPage;