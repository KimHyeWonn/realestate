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
            result: 'aaa' 
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
            console.log(info);
            // const {title, body} = info.data;
            // this.setState({
            //     data : {
            //         postId : id,
            //         title : title,
            //         content : body
            //     }
            // });

            this.setState({
                condition: {
                    city: data[0].city,
                    district: data[0].district,
                    neighborhood: data[0].neighborhood,
                    year: data[0].year,
                    month: data[0].month,
                    result: data[0].city+'bbbb'
                }
            });
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