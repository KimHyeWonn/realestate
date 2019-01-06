import React,{Component} from 'react';
import SelectPage from '../selectPage/SelectPage';
import ChartsPage from '../chart/Chart';

class Home extends Component{
    state = {
        condition: {
            city: '',
            district: '',
            neighborhood: '',
            year: '',
            month: '' 
        }
    };

    // SelectPage 컴포넌트에서 받은 데이터 state에 저장
    changeConditionData = (data) => {
        this.setState(
            {condition: {
                city: data[0].city,
                district: data[0].district,
                neighborhood: data[0].neighborhood,
                year: data[0].year,
                month: data[0].month
            }}
        )
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