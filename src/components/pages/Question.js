import React,{Component} from 'react';
import {QuestionList} from 'components/questionPage';
import * as service from '../../lib/boardApi';

class Question extends Component {
    constructor() {
        super();
        this.state = {
            pageNo:1,
            exampleItems: [
                {no: '1', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: "2", title: "질문", author: "Betty", registerDate: "2019-01-15"},
                {no: "3", title: "질문", author: "Charlie", registerDate: "2019-01-10"},
                {no: "4", title: "질문", author: "David", registerDate: "2019-01-05"},
                {no: '5', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '6', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '7', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '8', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '9', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '10', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '11', title: '질문', author: 'Abet', registerDate: '2019-01-17'},
                {no: '12', title: '질문', author: 'Abet', registerDate: '2019-01-17'}
            ],
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
            const responseInfo = await service.getBoard(this.state.pageNo);
            console.log("responseInfo",responseInfo);
            this.setState({
                exampleItems: responseInfo
            });
        }catch(e) {
            console.log(e);
        }
    }

    //새로운 글 서버에 전송
    handleSubmit = (data) => {
       fetch(`http://54.180.87.242:8080/realestate/board`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if(response.status >= 400) {
                throw new Error("Bad response");
            }
            return response.json();
        }).then(function(err){
            console.log(err)
        });
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