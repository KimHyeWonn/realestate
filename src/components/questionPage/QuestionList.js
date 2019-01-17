import React,{Component} from 'react';
import { Table, Menu , Icon} from 'semantic-ui-react'

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {seq: "1", title: "질문", id: "Abet", date: "2019-01-17"},
                {seq: "2", title: "질문", id: "Betty", date: "2019-01-15"},
                {seq: "3", title: "질문", id: "Charlie", date: "2019-01-10"},
                {seq: "4", title: "질문", id: "David", date: "2019-01-05"}
            ]
        };
    };

    render() {
        return(
            <div>
                <Table>
                    <Table.Header>
                    <Table.Row textAlign='center'>
                        <Table.HeaderCell width="{10}">제목</Table.HeaderCell>
                        <Table.HeaderCell width="{6}">작성자</Table.HeaderCell>
                        <Table.HeaderCell width="{6}">작성일</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {this.state.contactData.map((contact, i) => {
                        return (
                            <Table.Row textAlign='center'>
                                <Table.Cell>{contact.title}</Table.Cell>
                                <Table.Cell>{contact.id}</Table.Cell>
                                <Table.Cell>{contact.date}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                    </Table.Body>

                    <Table.Footer>
                    <Table.Row textAlign='center'>
                        <Table.HeaderCell colSpan='3'>
                        <Menu pagination borderless>
                            <Menu.Item as='a' icon>
                            <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                            <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>    
            </div>
        )
    }
}

export default QuestionList;