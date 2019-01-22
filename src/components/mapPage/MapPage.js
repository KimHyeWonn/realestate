// /*global daum*/
import React, {Component} from 'react';

class MapPage extends Component {
    // componentDidMount() {
    //     var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    //     var options = { //지도를 생성할 때 필요한 기본 옵션
    //         center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    //         level: 3 //지도의 레벨(확대, 축소 정도)
    //     };

    //     var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    // }

    // componentDidMount() {                                                    
    //     let el = document.getElementById('map');
    //     let map = new daum.maps.Map(el, {
    //       center: new daum.maps.LatLng(33.450701, 126.570667)
    //     });
    // }

    render() {
        const style1 = {
            width: "500px",
            height: "400px"
        }
        return(
            <div>
                {/* b3bb79f6e0b91ae48a7ab501a1db6290 */}
                <div id="map" style={style1}></div>
            </div>
        )
    }
}

export default MapPage;