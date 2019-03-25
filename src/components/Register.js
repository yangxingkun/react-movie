import React from "react";
import { Button,NavBar, InputItem,List  } from 'antd-mobile';
import { Toast} from 'antd-mobile';


import $ from 'jquery'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            checkall:'',
            email:'',
            username:'',
            password:'',
            code:'',
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.Password = this.Password.bind(this);
        this.Code = this.Code.bind(this);
    }
    successToast(){
        // console.log(this.state.email)
       
        if(this.state.code==this.state.checkall && this.state.code!=""){
            var _this=this;
            $.ajax({
                type: "post",
                url: "http://101.132.136.49/cgv-2.0/register.do",
                data: {
                    mail:_this.state.email,
                    name:_this.state.username,
                    password:_this.state.password,
                },
                dataType: "json",
                success: function (obj) {
                    if (obj.code ==1){
                        
                        _this.props.history.push('/login')
                    }else{
                        Toast.success('注册失败', 1);
                    }
                }
            });
        }else{
            Toast.success('注册失败', 1);
        }
    }
    changeEmail(value){
        this.setState({email: value});
        
    }
    changeUsername(value){
        this.setState({username: value});
    }
    Password(value){
        this.setState({password:value});
    }
    Code(value){
        this.setState({code:value});
    }
    btn(){
        var email=this.state.email;
        if (email == null || email == ""){
            alert("请输入邮箱")
            return;
        }
        var _this=this;
        $.ajax({
            type: "get",
            url:"http://101.132.136.49/cgv-2.0/getCheckCode.do",
            data:{
                mail:_this.state.email,
            },
            dataType: "json",
            success: function (data) {
                console.log(data)
                _this.state.checkall=data.msg
            }
        });
    }
    render(){
        return(
            <div>
               <NavBar mode="dark" style={this.yanga}>注册</NavBar>
               <List>
               <InputItem  clear placeholder="邮箱" onChange={this.changeEmail}>邮箱：</InputItem>
               <InputItem clear placeholder="用户名"  onChange={this.changeUsername}>用户名：</InputItem>
               <InputItem clear placeholder="密码" onChange={this.Password}>密码：</InputItem>
               <InputItem clear placeholder="邮箱验证码" onChange={this.Code}>邮箱验证码：</InputItem>
               </List>
               <Button type="ghost" size="small" inline onClick={this.btn.bind(this)}>发送验证</Button>
              <Button type="primary"  onClick={this.successToast.bind(this)} style={this.yanga}>注册</Button>
            </div>
        )
    }
}
Register.prototype.yanga={
    color:'#fff',
    backgroundColor:'orange'
}
export default Register;