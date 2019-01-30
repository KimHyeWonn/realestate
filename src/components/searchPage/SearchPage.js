import React, { Component } from 'react';
import './SearchPage.css';
import { Input, Radio, Segment, Button, ButtonGroup,Label,Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class SearchPage extends Component {
    state = {}
    handleClickA = () => this.setState({ active: !this.state.active1 })
    handleClickH = () => this.setState({ active: !this.state.active2 })
    handleClickH = () => this.setState({ active: !this.state.active3 })
    render() {
        const { active1 } = this.state
        const { active2 } = this.state
        const { active3 } = this.state
        return (
            <div className="topDiv">
                <Segment>
                    <div className='searchDiv'>
                    <ButtonGroup>
                        <Button active={active1} onClick={this.handleClickA}>아파트</Button>
                        <Button active={active2} onClick={this.handleClickH}>주택</Button>
                        <Button active={active3} onClick={this.handleClickH}>오피스텔</Button>
                    </ButtonGroup>
                    </div>
                    
                    <div className='searchDiv'>
                        <div className="radioDiv"><Radio/><Label color="red">매매</Label></div>
                        <div className="radioDiv"><Radio /><Label color="olive">전세</Label></div>
                        <div className="radioDiv"><Radio /><Label color="teal">월세</Label></div>
                    </div>
                    
                    <div className='searchDiv'>
                        <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
                    </div>
                    

                </Segment>

            </div>
        );
    }
}

export default SearchPage;