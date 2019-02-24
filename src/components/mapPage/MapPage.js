/*global daum*/
import React, {Component} from 'react';

var map = null;
class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() { 
        console.log("MapPage>componentDidMount");
        //let {center} = this.state;
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
        if(nextProps.resultData.date !== this.props.resultData.date) { //resultData 변경 -> 렌더링
            console.log("MapPage>shouldComponentUpdate>true");
            return true;
        }

        if(nextProps.mapData === this.props.mapData) { //mapData 변경x
            console.log("MapPage>shouldComponentUpdate>false");
            return false;
        }

        console.log("MapPage>shouldComponentUpdate>false>mapData change");

        const center = nextProps.mapData;

        // 이동할 위도 경도 위치를 생성
        var moveLatLon = new daum.maps.LatLng(center.latitude, center.longitude);
    
        // 지도 중심을 이동
        map.setCenter(moveLatLon);

        var bounds = map.getBounds();
        var cLatlng = map.getCenter(); // 가운데(center)
        var rtLatLng = bounds.getNorthEast(); //북동(right top)
        var lbLatLng = bounds.getSouthWest(); // 남서(left bottom)
                
        this.setBounds(cLatlng, rtLatLng, lbLatLng, "shouldComponentUpdate");

        return false;
    }

    // 지도 드래그 이동
    mapDrag = () => {
        var bounds = map.getBounds();
        var cLatlng = map.getCenter(); 
        var rtLatLng = bounds.getNorthEast(); //북동(right top)
        var lbLatLng = bounds.getSouthWest(); // 남서(left bottom)

        this.setBounds(cLatlng, rtLatLng, lbLatLng, "mapDrag");
    }

    // 지도 줌 변경
    mapZoom = () => {
        var bounds = map.getBounds();
        var cLatlng = map.getCenter(); 
        var rtLatLng = bounds.getNorthEast(); //북동(right top)
        var lbLatLng = bounds.getSouthWest(); // 남서(left bottom)

        this.setBounds(cLatlng, rtLatLng, lbLatLng, "mapZoom");
    }

    setBounds = (cLatlng, rtLatLng, lbLatLng, method) => {
        // var str = 'setBounds: 중심=>'+cLatlng.getLat()+', '+cLatlng.getLng()+'\n';
        // str += 'rightTop=>'+rtLatLng.getLat()+', '+rtLatLng.getLng()+'\n';
        // str += 'leftBottom=>'+lbLatLng.getLat()+', '+lbLatLng.getLng();
        var str = "MapPage>setBounds>"+method;
        console.log(str);

        let data = [];

        data.push({
            rightTop: {
                latitude: rtLatLng.getLat(), //위도 y t
                longitude: rtLatLng.getLng() //경도 x r
            },
            leftBottom: {
                latitude: lbLatLng.getLat(), //위도 y b
                longitude: lbLatLng.getLng() //경도 x l
            },
            center: {
                latitude: cLatlng.getLat(), //위도 y 
                longitude: cLatlng.getLng() //경도 x 
            }
        });

        // 부모 컴포넌트로 전달
        this.props.mapDataSet(data);
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

        const loading = this.props.loading;
        
        console.log(loading);
        //var {loading} = this.state;
        if(loading) {
            Loading = <img src="//s.zigbang.com/v1/web/search/loading2.gif" alt="" style={loadingShow}></img>
        } else {
            Loading = <img src="//s.zigbang.com/v1/web/search/loading2.gif" alt="" style={loadingHide}></img>
        }

        return(
            <div>
                <div id="map" style={mapStyle}>
                {Loading}
                </div>
            </div>
        )
    }
}

export default MapPage;

//var housing=[], deal=[];

// for(var i=0;i<mapData.housingTypeData.length;i++){
//     housing[i] = mapData.housingTypeData[i].value;
// }

// for(var j=0;j<mapData.dealTypeData.length;j++){
//     deal[j] = mapData.dealTypeData[j].value;
// }

/* <div>
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
</div> */