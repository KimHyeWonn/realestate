/*global daum*/
import React, {Component} from 'react';

var map = null;
class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { 
        let el = document.getElementById('map');
        let options = { 
            center: new daum.maps.LatLng(37.615095,127.0109226), //지도의 중심좌표.
            level: 3 
        };
        
        map =  new daum.maps.Map(el, options); //지도 생성 및 객체 리턴
        
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤
        let mapTypeControl = new daum.maps.MapTypeControl();
        map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

        // 줌 컨트롤
        var zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    }

    //props update
    shouldComponentUpdate(nextProps) {
        const {center} = nextProps.searchData.location;

        // 이동할 위도 경도 위치를 생성
        var moveLatLon = new daum.maps.LatLng(center.latitude, center.longitude);
    
        // 지도 중심을 이동
        map.setCenter(moveLatLon);

        var bounds = map.getBounds();
        var lbLatLng = bounds.getSouthWest();// 남서(left bottom)
        var rtLatLng = bounds.getNorthEast();//북동(right top)
        var latBottom = lbLatLng.getLat(); // 남
        var latTop = rtLatLng.getLat(); // 북
        var lngLeft = lbLatLng.getLng(); // 서
        var lngRight = rtLatLng.getLng(); // 동
        console.log("shouldComponentUpdate: " + map.getBounds());
        
        return true;
    }

    render() {
        const mapStyle = {
            width: "100%",
            height: "450px"
        }

        let Loading;
        const loadingHide = {
            display: "none",
        }
        const loadingShow = {
            display: "inline",
            position: "absolute",
            zIndex: "100",
            left: "50%",
            top: "50%"
        }

        const {mapData, location, searchLoading} = this.props.searchData;
        var housing=[], deal=[];
        console.log(searchLoading);
        if(searchLoading) {
            Loading = <img src="//s.zigbang.com/v1/web/search/loading2.gif" alt="" style={loadingShow}></img>
        } else {
            Loading = <img src="//s.zigbang.com/v1/web/search/loading2.gif" alt="" style={loadingHide}></img>
            console.log("mappage housing : ",mapData.housingTypeData);
            console.log("mappage deal: ",mapData.dealTypeData);
            console.log("mappage input:",mapData.inputData);
            console.log("mappage l:",location.center.latitude);

            for(var i=0;i<mapData.housingTypeData.length;i++){
                housing[i] = mapData.housingTypeData[i].value;
            }

            for(var j=0;j<mapData.dealTypeData.length;j++){
                deal[j] = mapData.dealTypeData[j].value;
            }
        }

        return(
            <div>
                <div id="map" style={mapStyle}>
                {Loading}
                </div>
                <div>
                <h3>집 종류</h3>
                {
                    housing.map((type,i)=>{
                        return(<p key={i}>{type}</p>)
                    })
                }
                </div>
                <div>
                <h3>거래 방법</h3>
                {
                    deal.map((type,i)=>{
                        return(<p key={i}>{type}</p>)
                    })
                }
                </div>
                <div>
                <h3>지역 명</h3>
                <p>{mapData.inputData}</p>
                </div>
            </div>
        )
    }
}

export default MapPage;