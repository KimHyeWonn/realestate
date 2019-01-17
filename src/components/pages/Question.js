import React,{Component} from 'react';
import {QuestionList} from 'components/questionPage';
import { Button } from 'semantic-ui-react';

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
                    <Button color="olive">글쓰기</Button>
                </div>
                <QuestionList></QuestionList>
            </div>
        )
    }
}

export default Question;