<<<<<<< HEAD
import React,{Component} from 'react';
import SelectPage from '../selectPage/SelectPage';
import ChartsPage from '../chart/Chart';
import * as service from '../../lib/chartDataApi';
import './Page.css';

class Home extends Component{
    state = {
        condition: {
            city: '',
            district: '',
            neighborhood: '',
            year: '',
            month: '',
            result: '',
        }
    };

    componentDidMount() {
        let data = [];
        data.push({
            city: '서울특별시',
            district: '',
            neighborhood: '',
            year: '',
            month: '' 
        });
        this.changeConditionData(data);
    }

    // SelectPage 컴포넌트에서 받은 데이터 state에 저장
    changeConditionData = async (data) => {
        try {
            const {city, district, neighborhood, year, month} = data[0];
            var date = "";

            if(month!=="") {
                date = year+"-"+month;
            }else {
                date = year;
            }

            var info = null;
      
            if(city !== "" && district !== "" && neighborhood !== "" && date !== ""){
                console.log("getCityAndDistrictAndNeighborhoodAndDate");
                info = await service.getCityAndDistrictAndNeighborhoodAndDate(city, district, neighborhood, date);
            }
            else if (city !== "" && district !== "" && neighborhood !== "") {
                console.log("getCityAndDistrictAndNeighborhood");
                info = await service.getCityAndDistrictAndNeighborhood(city, district, neighborhood);
            }
            else if (city !== "" && district !== "" && date !== "") {
                console.log("getCityAndDistrictAndDate");
                info = await service.getCityAndDistrictAndDate(city, district, date);
            }
            else if (city !== "" && district !== "") {
                console.log("getCityAndDistrict");
                info = await service.getCityAndDistrict(city, district);
            }
            else if (city !== "" && date !== "") {
                console.log("getCityAndDate");
                info = await service.getCityAndDate(city, date);
            }
            else if (city !== "") {
                console.log("getOnlyCity");
                info = await service.getOnlyCity(city);
            }
            
            // 세종시는 시/도  읍/면/동만 있는데 이때는 어떻게 보내야 하는지 물어보기
            //const info = await service.getOnlyCity(city);
            console.log("aa "+info.data);

            this.setState({
                condition: {
                    city: city,
                    district: district,
                    neighborhood: neighborhood,
                    year: year,
                    month: month,
                    result: info.data
                }
            });
            
        }catch(e) {
            console.log(e);
        }
    }

    render(){
        return(
            <div>
                <div className="HomeStyle1">
                    <SelectPage changeConditionData={this.changeConditionData}/>
                </div>
                <div className="HomeStyle2">
                    <ChartsPage conditionData={this.state.condition}/>
                </div>
            </div>
        );
    }
}

=======
import React,{Component} from 'react';
import SelectPage from '../selectPage/SelectPage';
import ChartsPage from '../chart/Chart';
import * as service from '../../lib/chartDataApi';
import './Page.css';

class Home extends Component{
    state = {
        condition: {
            city: '',
            district: '',
            neighborhood: '',
            year: '',
            month: '',
            result: '',
        }
    };

    componentDidMount() {
        let data = [];
        data.push({
            city: '서울특별시',
            district: '',
            neighborhood: '',
            year: '',
            month: '' 
        });
        this.changeConditionData(data);
    }

    // SelectPage 컴포넌트에서 받은 데이터 state에 저장
    changeConditionData = async (data) => {
        try {
            const {city, district, neighborhood, year, month} = data[0];
            var date = "";

            if(month!=="") {
                date = year+"-"+month;
            }else {
                date = year;
            }

            var info = null;
      
            if(city === "세종특별자치시" && neighborhood !== "" && date !== ""){
                console.log("세종getCityAndNeighborhoodAndDate");
                info = await service.getCityAndNeighborhoodAndDate(city, neighborhood, date);
            }
            else if(city === "세종특별자치시" && neighborhood !== "" ){
                console.log("세종getCityAndNeighborhood");
                info = await service.getCityAndNeighborhood(city, neighborhood);
            }
            else if(city !== "" && district !== "" && neighborhood !== "" && date !== ""){
                console.log("getCityAndDistrictAndNeighborhoodAndDate");
                info = await service.getCityAndDistrictAndNeighborhoodAndDate(city, district, neighborhood, date);
            }
            else if (city !== "" && district !== "" && neighborhood !== "") {
                console.log("getCityAndDistrictAndNeighborhood");
                info = await service.getCityAndDistrictAndNeighborhood(city, district, neighborhood);
            }
            else if (city !== "" && district !== "" && date !== "") {
                console.log("getCityAndDistrictAndDate");
                info = await service.getCityAndDistrictAndDate(city, district, date);
            }
            else if (city !== "" && district !== "") {
                console.log("getCityAndDistrict");
                info = await service.getCityAndDistrict(city, district);
            }
            else if (city !== "" && date !== "") {
                console.log("getCityAndDate");
                info = await service.getCityAndDate(city, date);
            }
            else if (city !== "") {
                console.log("getOnlyCity");
                info = await service.getOnlyCity(city);
            }
            
            this.setState({
                condition: {
                    city: city,
                    district: district,
                    neighborhood: neighborhood,
                    year: year,
                    month: month,
                    result: info.data
                }
            });
            
        }catch(e) {
            console.log(e);
        }
    }

    render(){
        return(
            <div>
                <div className="HomeStyle1">
                    <SelectPage changeConditionData={this.changeConditionData}/>
                </div>
                <div className="HomeStyle2">
                    <ChartsPage conditionData={this.state.condition}/>
                </div>
            </div>
        );
    }
}

>>>>>>> 560347a992719b63c0cc08357e99b422873be7b8
export default Home;