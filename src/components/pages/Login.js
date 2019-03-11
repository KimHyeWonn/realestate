import React, { Component } from 'react';
import LoginPage from '../loginPage/LoginPage';
import * as service from '../../lib/LoginApi';

class Login extends Component {
  state={
    id:'',
    pw:''
  }
  
  usingIdPw = async(data)=>{
    // this.setState({
    //   id:data.id,
    //   pw:data.pw
    // })
    //this.props.setId(data.id)
    try{
      console.log("getsignup",data[0])
      const logininfo = await service.getSignUp(data);
      console.log(logininfo)
    }catch(e){
      console.log(e)
  }
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
