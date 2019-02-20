import React, {Component} from 'react';
import { Form,Button } from 'semantic-ui-react'
//import {Validation} from 'react-validation';

class NewPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            contents: '',
            msg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDafault()
        var data = {
            title: this.state.title,
            contents: this.state.contents
        }
        console.log(data)
        fetch("http://54.180.87.242:8080/realestate/question", {
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
    
    logChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return(
            // <div>
            //     <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
            //         <label>Title</label>
            //             <Validation.components.Input onChange={this.logChange} className="title-control" value='' placeholder='제목' name='title' validation={['required']}/>
            //         <label>Contents</label>
            //             <Validation.components.Input onChange={this.logChange} className="content-control" value='' placeholder='내용' name='contents' validation={['required']}/>
            //         <div className="submit-control">
            //             <Validation.components.Button className="btn">등록</Validation.components.Button>
            //         </div>
            //     </Validation.components.Form>
            // </div>
            <div className='Form-control'>
                <Form> 
                    <Form.Field>
                        <input onChange={this.logChange} name='title' value='' placeholder='Title'/>
                    </Form.Field>
                    <Form.TextArea onChange={this.logChange} name='contens' value='' placeholder='Contents'/>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    } 
}
export default NewPage;