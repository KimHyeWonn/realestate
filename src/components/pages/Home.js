import React,{Component} from 'react';
import Select_page from '../select_page/select_page';
import Charts_page from '../chart/Chart';
class Home extends Component{
    render(){
        const style1 = {
            float: 'left',
            width: '30%'
        };
        const style2 ={
            float: 'right',
            width: '70%',
        };
        
        return(
            <div>
                <div style={style1}>
                    <Select_page/>
                </div>
                <div style={style2}>
                    <Charts_page/>
                </div>
            </div>
        );
    }
}

export default Home;