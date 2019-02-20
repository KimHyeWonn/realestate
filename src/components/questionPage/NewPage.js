import React, {Component} from 'react';
import { Table, Menu , Icon, Button} from 'semantic-ui-react'

class NewPage extends Component {
    render() {
        return(
            <div>
                <Table>
                    <Table.Header>
                        <div> 제목 </div>
                    </Table.Header>
                    <Table.Body>
                        <div> 내용 </div>
                    </Table.Body>
                    <Table.Footer>
                        <Button> 작성 </Button>
                    </Table.Footer>
                </Table>
            </div>
        )
    }
}
