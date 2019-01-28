import React, {Component} from 'react';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../mapPage/MapPage';
import './Page.css';

class Search extends Component {
    state = {
        dealType: '',
        housingType: '',
        search: ''
    };

    //SearchPage에서 검색
    searchData = (data) => {
        this.setState({
            dealType: data.dealType,
            housingType: data.housingType,
            search: data.search
        });
    }

    render() {
        return(
            <div>
                <div className="SearchDiv1">
                    <SearchPage searchData={this.searchData}/>
                </div>
                <div className="SearchDiv1">
                    <div className="SearchDivL">
                        <MapPage searchData={this.state}/>
                    </div>
                    <div className="SearchDivR">
                        <h1>조건</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;