import React,{Component} from 'react';
import {QuestionList} from 'components/questionPage';
import * as service from '../../lib/boardApi';
//import axios from 'axios';
class Question extends Component {
    constructor() {
        super();
        this.state = {
            exampleItems: [],
            pageOfItems: [],
        };
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
        this.boardData();
    }
    
    boardData = async () => {
        try{
            console.log("getBoard");
            const responseInfo = await service.getBoard();
            //const responseInfo = await service.getBoard();
            console.log("responseInfo",responseInfo);
            this.setState({
                exampleItems: responseInfo.data
            });
        }catch(e) {
            console.log(e);
        }
    }

    //새로운 글 서버에 전송
    handleSubmit = async (data) => {
        try {
            const info = await service.postNewContent(data);
            console.log(info);
        }catch(e) {
            console.log("Catch: " +e);
        }    
    }

    render() {
        const style1 = {
            margin: '5rem 16rem 16rem'
        };
            
        return(
            <div style={style1}>
                <QuestionList 
                    handleSubmit={this.handleSubmit} 
                    boardData={this.state}
                    items={this.state.exampleItems}
                    onChangePage={this.onChangePage}
                />
                {/* <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/> */}
            </div>
        )
    }
}

export default Question;