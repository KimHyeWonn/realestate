import React, { Component } from 'react';
import { QuestionList } from 'components/questionPage';
import * as service from '../../lib/boardApi';
import { Modal, Button, Comment, Header, Form, Divider } from 'semantic-ui-react';

class Question extends Component {
    constructor() {
        super();
        this.state = {
            exampleItems: [],
            pageOfItems: [],
            detailBoardItems: {
                title: '',
                content: '',
                author: '',
                no: 0,
                answers: [],
                registerDate: ''
            },
            open: false,
            closeOnDimmerClick: true,
            inputData: '',
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    // 모달 닫기
    close = () => this.setState({open: false})

    onChangePage(pageOfItems) {
        // Pagination 페이지 이동 시 데이터 셋팅
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
       this.boardData()
    }

    // 게시판 데이터 get
    boardData = async () => {
        try{
            console.log("getBoard");
            const responseInfo = await service.getBoard();
            console.log("responseInfo", responseInfo);
            this.setState({
                exampleItems: responseInfo.data.reverse(),
            });
        }catch (e) {
            console.log(e);
        }
    }

    // 게시글 세부 내용 데이터 get
    detailBoardData = async (boardNo) => {
        try{
            console.log("getDatailBoard")
            const detailInfo = await service.getDetailBoard(boardNo);
            console.log(detailInfo.data)
            this.setState({
                detailBoardItems: detailInfo.data,
                open: true,
                closeOnDimmerClick: false
            });
        }catch(e){
            console.log(e)
        }
    }

    // 댓글 내용 입력 시
    inputChange = (e) => {
        this.setState({
            inputData: e.target.value
        })
    }

    // 댓글 post
    replySubmit = async () => {
        try{
            const {no} = this.state.detailBoardItems
            const data = []
            const {inputData} = this.state
            if(inputData !== ''){
                data.push({
                    author: '작성자',
                    boardNo: no,
                    content: inputData
                });
                await service.postNewReply(data)
                //모달 리로팅 
                //this.detailBoardData();
            }
        }catch(e){
            console.log(e)
        }
        this.setState({
            inputData: ''
        })
        window.location.reload();
    }

    //새로운 게시글 post
    handleSubmit = async (data) => {
        console.log(data)
        await service.postNewContent(data);
    }

    // 게시글 삭제 post
    handleDelete = async () => {
        try{
            const {no} = this.state.detailBoardItems
            await service.deleteContent(no);
        }catch(e){
            console.log(e)
        }
        // 게시글 삭제 후 리로딩
       // this.close
        window.location.reload();
    }
 
    render() {
        const style1 = {
            margin: '5rem 16rem 16rem'
        };
        const {title, content, answers} = this.state.detailBoardItems
        const {open, closeOnDimmerClick} = this.state
        return (
            <div style={style1}>
                <QuestionList
                    handleSubmit={this.handleSubmit}
                    boardData={this.state}
                    items={this.state.exampleItems}
                    onChangePage={this.onChangePage}
                    detailBoardData={this.detailBoardData}
                />
                <Modal
                    open={open}
                    closeOnDimmerClick={closeOnDimmerClick}
                    onClose={this.close}
                >
                    <Modal.Header>
                        {title}
                    </Modal.Header>
                    <Modal.Content>
                        {content}
                    </Modal.Content>
                    <Modal.Content>
                        <Divider/>
                        <Comment.Group>
                            <Header> Comments </Header>
                                {
                                    answers.map( (contact,i) => {
                                        return (
                                            <Comment key={i}>
                                                <Comment.Content>
                                                    <Comment.Author as='a'>{contact.author}</Comment.Author>
                                                    <Comment.Metadata>{contact.registerDate}</Comment.Metadata>
                                                    <Comment.Text>{contact.content}</Comment.Text>
                                                </Comment.Content>
                                                <Comment.Actions>
                                                    delete
                                                </Comment.Actions>
                                            </Comment> 
                                        );
                                    })
                                }
                            <Form reply>
                                <Form.TextArea onChange={this.inputChange} 
                                                value={this.state.inputData}/>
                                <Button 
                                    content='Add Reply' 
                                    labelPosition='left' 
                                    icon='edit' 
                                    primary 
                                    onClick={this.replySubmit}
                                />
                            </Form>
                        </Comment.Group>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button icon='trash' negative onClick={this.handleDelete} />
                        <Button onClick={ this.close } primary>뒤로가기</Button>
                    </Modal.Actions>
                </Modal>
            </div> 
        )
    }
}

export default Question; 