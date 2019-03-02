import React, { Component } from 'react';
import { Modal, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class LoginPage extends Component {
  state = {
    id: '',
    pw: '',
    open: false
  }
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }
  close = () => this.setState({ open: false })

  handlechange = (input) => {
    this.setState({
      [input.target.name]: input.target.value
    })
  }
  loginBtn = () => {
    this.props.usingIdPw(this.state)

    this.setState({
      id: '',
      pw: '',
    })
  }
  signUP=()=>{
    console.log("회원가입 완료")
    this.close()
  }
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state
    return (
      <div>
        <div className='login-form'>
          <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                height: 90%;}`}
          </style>
          <Grid textAlign='center' style={{ margin: '1rem', height: '100%' }} verticalAlign='top'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                로그인
                  </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                    name="id" value={this.state.id} onChange={this.handlechange} />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name="pw"
                    value={this.state.pw} onChange={this.handlechange}
                  />
                  <Button color='teal' fluid size='large' onClick={this.loginBtn}>
                    로그인
                      </Button>
                </Segment>
              </Form>
              <Message>
                <Button onClick={this.closeConfigShow(true, false)}>가입하기</Button>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
        
        <Modal
          size="tiny"
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>회원가입</Modal.Header>
          <Modal.Content>
            <p>가입하세여t</p>
            <Form>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                    name="id" value={this.state.id} onChange={this.handlechange} />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name="pw"
                    value={this.state.pw} onChange={this.handlechange}
                  />
                  <Button color='teal' fluid size='large' onClick={this.signUP}>
                   아주 간단한 회원가입
                  </Button>
                </Segment>
              </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              안해
            </Button>
          </Modal.Actions>
        </Modal>
        </div>
    )
  }
}
export default LoginPage;