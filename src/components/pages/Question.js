import React, { Component } from 'react';
import { QuestionList } from 'components/questionPage';
import * as service from '../../lib/boardApi';

class Question extends Component {
    constructor() {
        super();
        this.state = {
            exampleItems: [],
            pageOfItems: [],
            detailBoardItems: []
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
        try {
            console.log("getBoard");
            const responseInfo = await service.getBoard();
            //const responseInfo = await service.getBoard();
            console.log("responseInfo", responseInfo);
            this.setState({
                exampleItems: responseInfo.data.reverse()
            });
        } catch (e) {
            console.log(e);
        }
    }

    detailBoardData = async (boardNo) => {
        try{
            console.log("getDatailBoard")
            const detailInfo = await service.getDetailBoard(boardNo);
            console.log("detailInfo",detailInfo)
            this.setState({
                detailBoardData: detailInfo.data
            });
        }catch(e){
            console.log(e)
        }
    }

    //새로운 글 서버에 전송
    handleSubmit = async (data) => {
        console.log(data)

        const boardInfo = await service.postNewContent(data);
        // const postData = JSON.stringify(data)

        //    fetch(`http://54.180.87.242:8080/realestate/board`, {
        //         method: 'POST',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(data)
        //     }).then(function(response) {
        //         if(response.status >= 400) {
        //             throw new Error("Bad response");
        //         }
        //         return response.json();
        //     }).then(function(err){
        //         console.log(err)
        //     });
    }
    render() {
        const style1 = {
            margin: '5rem 16rem 16rem'
        };

        return (
            <div style={style1}>
                <QuestionList
                    handleSubmit={this.handleSubmit}
                    boardData={this.state}
                    items={this.state.exampleItems}
                    onChangePage={this.onChangePage}
                   // detailBoardData={this.detailBoardData}
                />
               {/* <detailPage detailBoardData={this.state.detailBoardItems}/> */}
            </div>
        )
    }
}

export default Question;