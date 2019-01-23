import React, {Component} from 'react';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../mapPage/MapPage';
import './Page.css';

class Search extends Component {
    render() {
        return(
            <div>
                <div className="SearchDiv1">
                    <SearchPage />
                </div>
                <div className="SearchDiv1">
                    <div className="SearchDivL">
                        <h1>맵1</h1>
                        <MapPage/>
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