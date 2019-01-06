import React,{Component} from 'react';
import SelectPage from '../selectPage/SelectPage';
import ChartsPage from '../chart/Chart';

class Home extends Component{
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