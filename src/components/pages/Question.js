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

    close = () => this.setState({open: false})

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
       this.boardData()
    }

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

    detailBoardData = async (boardNo) => {
        try{
            console.log("getDatailBoard")
            const detailInfo = await service.getDetailBoard(boardNo);
            console.log(detailInfo.data)
            this.setState({
               // boardNumber: boardNo,
                detailBoardItems: detailInfo.data,
                open: true,
                closeOnDimmerClick: false
            });
        }catch(e){
            console.log(e)
        }
    }

    inputChange = (e) => {
        this.setState({
            inputData: e.target.value
        })
    }

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
                const replyInfo = await service.postNewReply(data)

            }
        }catch(e){
            console.log(e)
        }
        this.setState({
            inputData: ''
        })
        window.location.reload();
    }

    //새로운 글 서버에 전송
    handleSubmit = async (data) => {
        console.log(data)
        const boardInfo = await service.postNewContent(data);
    }

    handleDelete = async () => {
        try{
            const {no} = this.state.detailBoardItems
            const deleteInfo = await service.deleteContent(no);
        }catch(e){
            console.log(e)
        }
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