import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Radio, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class SearchPage extends Component {
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