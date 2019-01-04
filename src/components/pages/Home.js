import React,{Component} from 'react';
import SelectPage from '../selectPage/SelectPage';
import ChartsPage from '../chart/Chart';

class Home extends Component{
    render(){
        const style1 = {
            float: 'left',
            width: '20%'
        };
        const style2 ={
            float: 'right',
            width: '80%',
        };
        
        return(
            <div>
                <div style={style1}>
                    <SelectPage/>
                </div>
                <div style={style2}>
                    <ChartsPage/>
                </div>
            </div>
        );
    }
}

export default Home;