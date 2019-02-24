import React,{Component} from 'react';
import { Table, Button, Modal, Input, Form} from 'semantic-ui-react';
import {Pagination} from './';
class QuestionList extends Component {
    state = { 
        open: false,
        title: '',
        contents: '' 
    }
    //팝업 창 닫기 설정
    closeConfigShow = ( closeOnDimmerClick ) => () => {
        this.setState({ closeOnDimmerClick, open: true })
    }
    close = () => this.setState({ open: false }) 
    //데이터 처리
    inputChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    inputChangeContents = (e) => {
        this.setState({
            contents: e.target.value
        });
    }
    //submit 버튼 클릭 시 Question으로 전달
    submitClick = () => {
        const {title, contents} = this.state
        const data = [];
        data.push({
            title: title,
            contents: contents
        });
        if(title !== '' && contents !== ''){
            this.props.handleSubmit(data);
            this.setState({open:false})
        }
    }

    render() {
        const {open,closeOnDimmerClick} = this.state
        //부모 컴포넌트에서 게시판 데이터 받아옴
        const {pageOfItems} = this.props.boardData
        const {items,onChangePage} = this.props
        return(
            <div>
            {/* 새로운 글 팝업 */}
                <Button color='olive' onClick={this.closeConfigShow(false)}>글쓰기</Button>
                <Modal 
                    size='tiny'
                    open={open}
                    closeOnDimmerClick={closeOnDimmerClick}
                    onClose={this.close}
                >
                    <Modal.Content>
                        <Input onChange={this.inputChangeTitle} fluid placeholder='Title'/>
                        <Form size='massive'><Form.TextArea onChange={this.inputChangeContents} placeholder='Contents'/></Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.submitClick} positive>Submit</Button>
                        <Button onClick={this.close} negative>Cancle</Button>
                    </Modal.Actions>
                </Modal> 

            {/* 게시글 */}
                <Table selectable>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell width="2">no</Table.HeaderCell>
                            <Table.HeaderCell width="6">제목</Table.HeaderCell>
                            <Table.HeaderCell width="5">작성자</Table.HeaderCell>
                            <Table.HeaderCell width="5">작성일</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    { 
                        pageOfItems.map( (contact) => {
                        return (
                            <Table.Row textAlign='center' key={contact.no}>
                                <Table.Cell>{contact.no}</Table.Cell>
                                <Table.Cell>{contact.title}</Table.Cell>
                                <Table.Cell>{contact.author}</Table.Cell>
                                <Table.Cell>{contact.registerDate}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell colSpan='4'>
                               <Pagination items={items} onChangePage={onChangePage}/>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>    
            </div>
        )
    }
}

export default QuestionList;