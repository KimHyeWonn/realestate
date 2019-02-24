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
            level: 3 //최대 4
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
            
            let data = nextProps.resultData.buliding;
            
            console.log(data);

            //이미지 마커
            //var position, markerImageSrc, imageSize = new daum.maps.Size(30, 30); 
            
            //텍스트 마커
            var position, content='';

            for(let i=0; i<data.length; i++){
                position = new daum.maps.LatLng(data[i].latitude, data[i].longitude);
                //markerImageSrc = require('../image/police_c.png');

                if(data[i].type === "아파트" && data[i].dealType === "전세"){
                    content = '<span style="color:black;background-color:#B2EBF4;">아파트/전</span>';
                }else if(data[i].type === "아파트" && data[i].dealType === "매매"){
                    content = '<span style="color:black;background-color:#FFB2D9;">아파트/매</span>'; 
                }else if(data[i].type === "아파트" && data[i].dealType === "월세"){
                    content = '<span style="color:black;background-color:#FFE08C;">아파트/월</span>';
                }else if(data[i].type === "오피스텔" && data[i].dealType === "전세"){
                    content = '<span style="color:black;background-color:#B2EBF4;">오피스텔/전</span>';
                }else if(data[i].type === "오피스텔" && data[i].dealType === "매매"){
                    content = '<span style="color:black;background-color:#FFB2D9;">오피스텔/매</span>';
                }else if(data[i].type === "오피스텔" && data[i].dealType === "월세"){
                    content = '<span style="color:black;background-color:#FFE08C;">오피스텔/월</span>';
                }else if(data[i].type === "주택" && data[i].dealType === "전세"){
                    content = '<span style="color:black;background-color:#B2EBF4;">주택/전</span>';
                }else if(data[i].type === "주택" && data[i].dealType === "매매"){
                    content = '<span style="color:black;background-color:#FFB2D9;">주택/매</span>';
                }else if(data[i].type === "주택" && data[i].dealType === "월세"){
                    content = '<span style="color:black;background-color:#FFE08C;">주택/월</span>';
                }

                // 이미지 마커
                // var markerImage = this.createMarkerImage(markerImageSrc, imageSize);   
                // var marker = this.createMarker(position, markerImage);  

                // marker.setMap(map);

                // 텍스트 마커
                var customOverlay = new daum.maps.CustomOverlay({
                    position: position,
                    content: content   
                });
                
                customOverlay.setMap(map);
            }

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

        // 만약 조건이 있으면 호출
        // 카테고리 api 호출
        this.kakaoCategorySearch();
        
        // 조건이 없으면 바로 데이터 셋팅
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

     //kakao 카테고리검색api 호출
    kakaoCategorySearch = async () => {
        var ps = new daum.maps.services.Places(map);
        
        // option 배열 필요! 
        await ps.categorySearch('BK9', this.categorySearchCB, {useMapBounds:true}); 
    }

    //kakao 카테고리검색api 콜백함수
    categorySearchCB = (data, status, pagination) => {
        if (status === daum.maps.services.Status.OK) {
            console.log(data);   
        }
    }

    createMarker = (position, image) => {
        var marker = new daum.maps.Marker({
            position: position,
            image: image
        });
        
        return marker;  
    }  

    createMarkerImage = (src, size) => {
        var markerImage = new daum.maps.MarkerImage(src, size);
        return markerImage;            
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