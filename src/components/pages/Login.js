import React, { Component } from 'react';
import LoginPage from '../loginPage/LoginPage';
import * as service from '../../lib/LoginApi';

class Login extends Component {
  state={
    id:'',
  }
  
  usingIdPw = (data)=>{
    console.log(data)
    this.setState({
      id:data.id
    })
    //this.props.setId(data.id)
    
  }
  
  signUp = async (data) => {
    try{
        console.log("postSingUpClient",data)
        await service.postSingUpClient(data);
    }catch(e){
        console.log(e)
    }
}
  render() {
    return (
      <div>
        <LoginPage usingIdPw={this.usingIdPw} signUp={this.signUp}></LoginPage>
      </div>
    )
  }
}
export default Login;
