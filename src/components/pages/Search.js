import React, {Component} from 'react';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../mapPage/MapPage';
import ResultPage from '../resultPage/ResultPage';
import './Page.css';

class Search extends Component {
    state = {
        mapData:{
            dealTypeData:[],
            housingTypeData:[],
            inputData:[],
        }
        // dealType: '',
        // housingType: '',
        // search: ''
    };
    componentDidMount() {
        let data = [];
        data.push({
            dealTypeData:[],
            housingTypeData:[],
            inputData:[],
        });
        this.searchData(data);
    }
    //SearchPage에서 검색
    searchData = (data) => {
        const {housingTypeData,dealTypeData,inputData} = data[0];
        
        console.log("cccc111",housingTypeData);
        console.log("cccc222",dealTypeData);
        this.setState({
            mapData:{
                housingTypeData:housingTypeData,
                dealTypeData:dealTypeData,
                inputData:inputData,
            },
            // dealType: data.dealType,
            // housingType: data.housingType,
            // search: data.search
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
                        <MapPage searchData={this.state.mapData}/>
                    </div>
                    <div className="SearchDivR">
                        <ResultPage />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;