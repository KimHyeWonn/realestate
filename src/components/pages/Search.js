/*global daum*/
import React, {Component} from 'react';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../mapPage/MapPage';
import ResultPage from '../resultPage/ResultPage';
import './Page.css';
import * as service from '../../lib/bulidingInfoApi'

class Search extends Component {
    state = {
        loading: true,
        pageOfItems:[],
        searchData:{
            dealTypeData:["MONTH"], //"LEASE", "DEAL", "MONTH",
            housingTypeData:["OFFICETEL"], //"APART", "OFFICETEL", "HOUSE",
            inputData:"서경대",
            options:[]
        },
        mapData: {
            rightTop: {
                latitude: 0, //위도 y
                longitude: 0 //경도 x
            },
            leftBottom: {
                latitude: 0,
                longitude: 0
            },
            center: {
                latitude: 0,
                longitude: 0
            }
        },
        optionData: [],
        resultData: {
            date: '',

            // 백엔드 api 호출 후 얻는 결과값(위경도->mapPage에서 처리 , 건물설명->resultPage에서 처리) 
            buliding:[
                //mapDataSet에서 값 셋팅
            ]
        },
        
    };
    
    // default값으로 지도 보여주기
    componentDidMount() {
        console.log("Search>componentDidMount");
        const {inputData} = this.state.searchData;
        this.kakaoPlacesSearch(inputData);
    }

    //SearchPage에서 검색
    searchDataSet = (data) => {
        console.log("Search>searchDataSet");
        const {housingTypeData,dealTypeData,inputData,options} = data[0];

        this.setState({
            searchData:{
                housingTypeData: housingTypeData,
                dealTypeData: dealTypeData,
                inputData: inputData,
                options:options
            },
            optionData:options,
            loading: true
        });
        
        if(inputData !== ''){
            this.kakaoPlacesSearch(inputData);
        }else {
            this.setState({
                loading: false
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
            console.log("Search>placesSearchCB");
            this.setState({
                mapData: {
                    center: {
                        latitude: data[0].y,
                        longitude: data[0].x
                    }
                }
            });
            return true;
        } else if (status === daum.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
            return false;
        } else if (status === daum.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
            return false;
        }
    }

    // MapPage에서 지정한 지도 좌표 (RightTop, LeftBottom)
    mapDataSet = async(mapData, optionsData) => {
        console.log("Search>mapDataSet");
        //data -> set State -> api 호출
        console.log(mapData);
        console.log(optionsData);
        if(optionsData.length===0) optionsData = null;


        // body
        const data = [];

        data.push({
            dealType: this.state.searchData.dealTypeData,
            housingType: this.state.searchData.housingTypeData,
            mapLocation: {
                leftBottom: {
                    latitude: mapData[0].leftBottom.latitude,
                    longitude: mapData[0].leftBottom.longitude
                },
                rightTop: {
                    latitude: mapData[0].rightTop.latitude,
                    longitude: mapData[0].rightTop.longitude
                }
            },
            options: optionsData
        });

        console.log(data[0]);
        //미완성
        try{
            console.log("getbuildingDataSet")
            var bulidinginfo = await service.getbuliding(data[0])
            console.log(bulidinginfo)
        }catch(e){

        }

        //api 호출 후 결과값 set State
        let date = new Date();
        this.setState({
            loading: false,
            optionData: optionsData,
            resultData: {
                date: date,
                
                // 백엔드 api 호출 후 얻는 결과값(위경도->mapPage에서 처리,설명->resultPage에서 처리)     
                buliding:[
                    {
                        no:'1',
                        city: '서울시',
                        groop: '성북구',
                        dong: '정릉1동',
                        name: '서경대학교',
                        area: '4,735.14',
                        floor: '10',
                        type: '오피스텔',
                        constructorYear: '1947',
                        price:'100',
                        deposit: '',
                        dealType: '매매',
                        latitude:'37.615095',
                        longitude: '127.0109226'
        
                    },{
                        no:'2',
                        city: '서울시1',
                        groop: '성북구1',
                        dong: '정릉1동1',
                        name: '서경대학교1',
                        area: '4,735.14',
                        floor: '10',
                        type: '오피스텔',
                        constructorYear: '1947',
                        price:'100',
                        deposit: '100',
                        dealType: '월세',
                        latitude:'37.613750',
                        longitude: '127.011041'
                    },{
                        no:'3',
                        city: '서울시',
                        groop: '강북구',
                        dong: '미아동 131',
                        name: 'SK 북한산시티아파트',
                        area: '59',
                        floor: '18',
                        type: '아파트',
                        constructorYear: '1947',
                        price:'100',
                        deposit: '7000',
                        dealType: '전세',
                        latitude:'37.616418',
                        longitude: '127.013854'
                    },{
                        no:'4',
                        city: '서울시',
                        groop: '강북구',
                        dong: '미아동 108',
                        name: '삼각산 아이원아파트',
                        area: '114',
                        floor: '20',
                        type: '아파트',
                        constructorYear: '1947',
                        price:'90',
                        deposit: '8000',
                        dealType: '전세',
                        latitude:'37.6159452',
                        longitude: '127.0166303'
                    },{
                        no:'5',
                        city: '서울시',
                        groop: '성북구',
                        dong: '정릉4동',
                        name: '정릉대림E편한세상아파트',
                        area: '114',
                        floor: '20',
                        type: '주택',
                        constructorYear: '1947',
                        price:'9000',
                        deposit: '',
                        dealType: '매매',
                        latitude:'37.614996',
                        longitude: '127.010105'
                    }
                    
                ]
            }        
        });
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }


    render() {
        return(
            <div>
                <div className="SearchDiv1">
                    <SearchPage searchDataSet={this.searchDataSet}/>
                </div>
                <div className="SearchDiv1">
                    <div className="SearchDivL">
                        <MapPage mapData={this.state.mapData.center} 
                                 mapDataSet={this.mapDataSet} 
                                 resultData={this.state.resultData} 
                                 loading={this.state.loading} 
                                 optionData={this.state.optionData}/>
                    </div>
                    <div className="SearchDivR">
                        <ResultPage resultData={this.state} 
                                    items={this.state.resultData.buliding}
                                    onChangePage={this.onChangePage}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;