/*global daum*/
import React, {Component} from 'react';

var map = null;
class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // location: {
            //     rightTop: {
            //         latitude: '', //위도 y
            //         longitude: '' //경도 x
            //     },
            //     leftBottom: {
            //         latitude: '',
            //         longitude: ''
            //     },
            //     center: {
            //         latitude: '', //위도 y
            //         longitude: '' //경도 x
            //     }
            // }
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

        // 드래그가 끝날 때 발생
        daum.maps.event.addListener(map, 'dragend', this.mapDrag);
        // 확대 수준이 변경되면 발생
        daum.maps.event.addListener(map, 'zoom_changed', this.mapZoom);
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
        console.log("shouldComponentUpdate: 남서=>" + latBottom+", "+lngLeft+"\n북동=>"+latTop+", "+lngRight);
        
        return true;
    }

    // 지도 드래그 이동
    mapDrag = () => {
        // 지도 영역정보를 얻어옵니다 
        var bounds = map.getBounds();
        var latlng = map.getCenter(); 

        // 영역정보의 남서쪽 정보를 얻어옵니다 
        var swLatlng = bounds.getSouthWest();
        
        // 영역정보의 북동쪽 정보를 얻어옵니다 
        var neLatlng = bounds.getNorthEast();
        
        var message = 'mapDrag 영역좌표는 남서쪽 위도, 경도는  ' + swLatlng.toString() + '이고'; 
        message += '북동쪽 위도, 경도는  ' + neLatlng.toString() + '입니다'; 
        message += '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        
        console.log(message);
        //loading true로 변경
    }

    // 지도 줌 변경
    mapZoom = () => {
        // 지도 영역정보를 얻어옵니다 
        var bounds = map.getBounds();
        var latlng = map.getCenter(); 

        // 영역정보의 남서쪽 정보를 얻어옵니다 
        var swLatlng = bounds.getSouthWest();
        
        // 영역정보의 북동쪽 정보를 얻어옵니다 
        var neLatlng = bounds.getNorthEast();
        
        var message = 'mapZoom 영역좌표는 남서쪽 위도, 경도는  ' + swLatlng.toString() + '이고'; 
        message += '북동쪽 위도, 경도는  ' + neLatlng.toString() + '입니다'; 
        message += '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        
        console.log(message);
        //loading true로 변경
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
        //var housing=[], deal=[];
        console.log(searchLoading);
        if(searchLoading) {
            Loading = <img src="//s.zigbang.com/v1/web/search/loading2.gif" alt="" style={loadingShow}></img>
        } else {
            Loading = <img src="//s.zigbang.com/v1/web/search/loading2.gif" alt="" style={loadingHide}></img>
            console.log("mappage housing : ",mapData.housingTypeData);
            console.log("mappage deal: ",mapData.dealTypeData);
            console.log("mappage input:",mapData.inputData);
            console.log("mappage l:",location.center.latitude);

            // for(var i=0;i<mapData.housingTypeData.length;i++){
            //     housing[i] = mapData.housingTypeData[i].value;
            // }

            // for(var j=0;j<mapData.dealTypeData.length;j++){
            //     deal[j] = mapData.dealTypeData[j].value;
            // }
        }

        return(
            <div>
                <div id="map" style={mapStyle}>
                {Loading}
                </div>
                <div>
                <h3>집 종류</h3>
                {/* {
                    housing.map((type,i)=>{
                        return(<p key={i}>{type}</p>)
                    })
                } */}
                {mapData.housingTypeData}
                </div>
                <div>
                <h3>거래 방법</h3>
                {/* {
                    deal.map((type,i)=>{
                        return(<p key={i}>{type}</p>)
                    })
                } */}
                {mapData.dealTypeData}
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