import React from "react";
import { Button,NavBar, InputItem  } from 'antd-mobile';
import $ from 'jquery'
import { Toast} from 'antd-mobile';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.Password = this.Password.bind(this);
    }
    changeUsername(value){
        this.setState({username: value});
    }
    Password(value){
        this.setState({password:value});
        
    }
    
    successToast(){
        var _this=this;
        $.ajax({
            type: "post",
            url: "http://101.132.136.49/cgv-2.0/userlogin.do",
            data: {
                name:_this.state.username,
                password:_this.state.password
            },
            dataType: "json",
            success: function (data) {
                // var x=data.data.xl-server_token
                console.log(data.data)
                if(data.code==1){
                    // var data="";
                    // var xl-server_token=''
                    sessionStorage.setItem("data", _this.state.username)
                    sessionStorage.setItem("token",data.data.token)
                    _this.props.history.push({pathname:'/home'})
                }else{
                    Toast.success('用户名或密码错误', 1);
                }
               
                
            }
        });
        
    }
    render(){
        return(
            <div>
                <NavBar mode="dark" style={this.yanga}>登录</NavBar>
                <InputItem clear placeholder="用户名"  onChange={this.changeUsername}>用户名：</InputItem>
                <InputItem clear placeholder="密码" onChange={this.Password}>密码：</InputItem>
                <Button type="primary"  style={this.yanga} onClick={this.successToast.bind(this)}>登录</Button>
            </div>
        )
    }
}

Login.prototype.yanga={
    color:'#fff',
    backgroundColor:'orange'
}
export default Login;