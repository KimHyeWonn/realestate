/*global daum*/
import React, {Component} from 'react';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../mapPage/MapPage';
import ResultPage from '../resultPage/ResultPage';
import './Page.css';

class Search extends Component {
    state = {
        mapData:{
            dealTypeData:[{value:"month"}], //"lease", "deal", "month",
            housingTypeData:[{value:"officetel"}], //"apart", "officetel", "house",
            inputData:"서경대"
        },
        location: {
            rightTop: {
                latitude: '', //위도 y
                longitude: '' //경도 x
            },
            leftBottom: {
                latitude: '',
                longitude: ''
            },
            center: {
                latitude: '',
                longitude: ''
            }
        },
        searchLoading: true
    };

    // default값으로 지도 보여주기
    componentDidMount() {
        const {inputData} = this.state.mapData;
        if(inputData !== '') this.kakaoPlacesSearch(inputData);
    }

    //SearchPage에서 검색
    searchData = (data) => {
        const {housingTypeData,dealTypeData,inputData} = data[0];

        this.setState({
            mapData:{
                housingTypeData: housingTypeData,
                dealTypeData: dealTypeData,
                inputData: inputData
            },
            searchLoading: true
        });

        if(inputData !== ''){
            this.kakaoPlacesSearch(inputData);
        }else {
            this.setState({
                searchLoading: false
            });
        }
    }

    //kakao 장소검색api 호출
    kakaoPlacesSearch = async (input) => {
        var ps = new daum.maps.services.Places();  
        await ps.keywordSearch( input, this.placesSearchCB); 
    }

    //kakao 장소검색api 콜백함수
    placesSearchCB = (data, status, pagination) => {
        if (status === daum.maps.services.Status.OK) {
            console.log(data[0].place_name+" "+data[0].x+" "+data[0].y);

            this.setState({
                location: {
                    rightTop: {
                        latitude: '', //위도 y
                        longitude: '' //경도 x
                    },
                    leftBottom: {
                        latitude: '',
                        longitude: ''
                    },
                    center: {
                        latitude: data[0].y,
                        longitude: data[0].x
                    }
                },
                searchLoading: false
            });

            let result = [];

            result.push({
                placeName: data[0].place_name,
                latitude: data[0].y,
                longitude: data[0].x
            });

            return result;
        } else if (status === daum.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
            return null;
        } else if (status === daum.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
            return null;
        }
    }

    //ResultPage에서 옵션선택
    optionData = (data) => {


    }

    //kakao 카테고리검색api 호출

    //kakao 카테고리검색api 콜백함수

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
                        <ResultPage />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;