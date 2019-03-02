import React, { Component } from 'react';
import LoginPage from '../loginPage/LoginPage';

class Login extends Component {
  state={
    id:'',
  }
  
  usingIdPw = (data)=>{
    console.log(data.id)
    this.setState({
      id:data.id
    })
    //this.props.setId(data.id)
  }
  render() {
    return (
      <div>
        <LoginPage usingIdPw={this.usingIdPw}></LoginPage>
      </div>
    )
  }
}
export default Login;
