import React,{Component} from 'react';
import {QuestionList} from 'components/questionPage';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Question extends Component {
    render() {
        const style1 = {
            margin: '5rem 16rem 16rem'
        };
        const style2 = {
            float: 'right',
            marginBottom: '1rem'
        };
        
        return(
            <div style={style1}>
                <div style={style2}>
                    <NavLink exact to = "/new">
                        <Button color="olive">글쓰기</Button>
                    </NavLink>
                </div>
                <QuestionList></QuestionList>
            </div>
        )
    }
}

export default Question;