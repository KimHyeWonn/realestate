/*global daum*/
import React, {Component} from 'react';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../mapPage/MapPage';
import ResultPage from '../resultPage/ResultPage';
import './Page.css';

class Search extends Component {
    state = {
        loading: true,
        searchData:{
            dealTypeData:[{value:"month"}], //"lease", "deal", "month",
            housingTypeData:[{value:"officetel"}], //"apart", "officetel", "house",
            inputData:"서경대"
        },
        mapData: {
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
        optionData: [],
        resultData: {
            // 백엔드 api 호출 후 얻는 결과값(위경도->mapPage에서 처리,설명->resultPage에서 처리) 
            apiData: [],

            buliding:[
                {
                    no:'1',
                    city: '서울시',
                    groop: '성북구',
                    dong: '정릉1동',
                    name: '서경대학교',
                    area: '4,735.14',
                    floor: '10',
                    type: '오피스텔 숫자 옴',
                    constructorYear: '1947',
                    price:'100',
                    deposit: '',
                    dealType: '매매',
                },{
                    no:'2',
                    city: '서울시1',
                    groop: '성북구1',
                    dong: '정릉1동1',
                    name: '서경대학교1',
                    area: '4,735.14',
                    floor: '10',
                    type: '오피스텔 숫자 옴',
                    constructorYear: '1947',
                    price:'100',
                    deposit: '100',
                    dealType: '월세',
                }
            ]
        },
        
    };

    // default값으로 지도 보여주기
    componentDidMount() {
        const {inputData} = this.state.searchData;
        if(inputData !== '') this.kakaoPlacesSearch(inputData);

        console.log("->searchCom(default) housing : ", this.state.searchData.housingTypeData);
        console.log("->searchCom(default) deal: ", this.state.searchData.dealTypeData);
        console.log("->searchCom(default) input:", this.state.searchData.inputData);
    }

    //SearchPage에서 검색
    searchDataSet = (data) => {
        const {housingTypeData,dealTypeData,inputData} = data[0];

        this.setState({
            searchData:{
                housingTypeData: housingTypeData,
                dealTypeData: dealTypeData,
                inputData: inputData
            },
            loading: true
        });

        if(inputData !== ''){
            this.kakaoPlacesSearch(inputData);
        }else {
            this.setState({
                loading: false
            });
        }

        console.log("->searchCom housing : ",housingTypeData);
        console.log("->searchCom deal: ",dealTypeData);
        console.log("->searchCom input:",inputData);
    }

    //kakao 장소검색api 호출
    kakaoPlacesSearch = async (input) => {
        var ps = new daum.maps.services.Places();  
        await ps.keywordSearch( input, this.placesSearchCB); 
    }

    //kakao 장소검색api 콜백함수
    placesSearchCB = (data, status, pagination) => {
        if (status === daum.maps.services.Status.OK) {
            this.setState({
                mapData: {
                    center: {
                        latitude: data[0].y,
                        longitude: data[0].x
                    }
                },
                loading: false
            });
            // let result = [];

            // result.push({
            //     placeName: data[0].place_name,
            //     latitude: data[0].y,
            //     longitude: data[0].x
            // });

            return true;
        } else if (status === daum.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
            return false;
        } else if (status === daum.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
            return false;
        }
    }

    //ResultPage에서 옵션선택
    optionDataSet = (data) => {
        // this.setState({
        //     optionData:[],
        //     loading: true
        // });
    }

    //kakao 카테고리검색api 호출

    //kakao 카테고리검색api 콜백함수

    // MapPage에서 지정한 지도 좌표 (RightTop, LeftBottom)


    render() {
        return(
            <div>
                <div className="SearchDiv1">
                    <SearchPage searchDataSet={this.searchDataSet}/>
                </div>
                <div className="SearchDiv1">
                    <div className="SearchDivL">
                        <MapPage mapData={this.state.mapData.center} resultData={this.state.resultData} loading={this.state.loading}/>
                    </div>
                    <div className="SearchDivR">
                        <ResultPage resultData={this.state.resultData} optionDataSet={this.optionDataSet}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;