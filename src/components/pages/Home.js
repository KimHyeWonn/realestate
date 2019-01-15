import React,{Component} from 'react';
import SelectPage from '../selectPage/SelectPage';
import ChartsPage from '../chart/Chart';
import * as service from '../../lib/chartDataApi';

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
            const info = await service.getOnlyCity(data[0].city);
            console.log(info.data);

            this.setState({
                condition: {
                    city: data[0].city,
                    district: data[0].district,
                    neighborhood: data[0].neighborhood,
                    year: data[0].year,
                    month: data[0].month,
                    result: info.data
                }
            });

            //const info = [{"dealType":"매매","housingType":"apart","average":[369326.6667,929492.0,372825.5,850750.0,758908.5,400267.5,521820.0,416754.0,806941.0,508775.3333,566119.0,382082.0,549401.0,713643.0,391225.5]},{"dealType":"매매","housingType":"housing","average":[609872.0,476269.6667,513994.5,456549.5,319689.5,646952.5,630071.0,573987.3333,568697.0,434106.5,418666.0,605672.0,314310.5,670058.0,274482.3333]},{"dealType":"매매","housingType":"opistel","average":[289217.0,576176.6667,168006.2,290841.3333,85891.0,329486.5,455998.3333,557123.25,540134.5,579436.6,547356.6667,745809.3333,524897.3333,442470.6667,177629.75,340140.3333]},{"dealType":"전세","housingType":"apart","average":[39498.8,47179.3333,44503.0,62324.0,46040.6667,53813.6667,31499.0,9940.0,33847.0,10694.0,43055.0]},{"dealType":"전세","housingType":"housing","average":[97838.0,84403.0,74168.5,72279.0,56377.6667,58584.5,48374.0,4814.0,37473.0,54098.6667,23833.0,56619.0,71938.6667,92793.3333]},{"dealType":"전세","housingType":"opistel","average":[88288.5,8971.0,52035.6667,55012.0,97122.0,76174.0,64360.5,48684.3333,49055.3333,49753.0,54177.0,11805.0,90311.0]},{"dealType":"월세","housingType":"apart","average":[64.9091,56.2,67.1,52.0,67.75,61.25,67.1429,55.8,50.0,50.4,52.125,51.8,52.625,71.6667,72.6667,48.6667]},{"dealType":"월세","housingType":"housing","average":[68.0,60.4,62.3333,66.0,66.8,65.8,61.5,64.8,30.75,63.8571,55.5714,50.75,45.875,35.6667,60.1667,59.0,60.75]},{"dealType":"월세","housingType":"opistel","average":[50.0,52.4444,59.375,59.2,50.5,65.0,74.4,67.8571,93.0,44.3333,64.2857,45.0,78.7143,3919.6667,257.1667,38.2]}];
        
            // this.setState({
            //     condition: {
            //         city: data[0].city,
            //         district: data[0].district,
            //         neighborhood: data[0].neighborhood,
            //         year: data[0].year,
            //         month: data[0].month,
            //         result: info
            //     }
            // });
            
        }catch(e) {
            console.log(e);
        }
    }

    render(){
        const style1 = {
            width: '100%'
        };
        const style2 ={
            width: '100%',
        };
        return(
            <div>
                <div style={style1}>
                    <SelectPage changeConditionData={this.changeConditionData}/>
                </div>
                <div style={style2}>
                    <ChartsPage conditionData={this.state.condition}/>
                </div>
            </div>
        );
    }
}

export default Home;