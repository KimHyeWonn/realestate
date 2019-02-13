/*global daum*/
import React, {Component} from 'react';

class MapPage extends Component {
    
    componentDidMount() {
        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            //center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            center: new daum.maps.LatLng(37.615095,127.0109226),
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        let map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤
        let mapTypeControl = new daum.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시
        map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

        // 줌 컨트롤
        var zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    }

    //props update
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        
        return true;
    }

    render() {
        const mapStyle = {
            width: "100%",
            height: "450px"
        }
        const {searchData} = this.props;
        console.log("mappage housing : ",searchData.housingTypeData);
        console.log("mappage deal: ",searchData.dealTypeData);
        console.log("mappage input:",searchData.inputData);

        var housing=[];
        for(var i=0;i<searchData.housingTypeData.length;i++){
            housing[i] = searchData.housingTypeData[i].value;
        }

        var deal=[];
        for(var j=0;j<searchData.dealTypeData.length;j++){
            deal[j] = searchData.dealTypeData[j].value;
        }

        return(
            <div>
                <div id="map" style={mapStyle}></div>
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
                <p>{searchData.inputData}</p>
                </div>
            </div>
        )
    }
}

export default MapPage;