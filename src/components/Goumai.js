import React from "react";
import $ from "jquery";
import { Button,NavBar, InputItem  } from 'antd-mobile';

class Goumai extends React.Component{
    // /MovieDetail/find.do
    constructor(props){
        super(props)
        this.state={
            username:'',
        }
        this.Password = this.Password.bind(this);
    }
    Password(value){
        this.setState({password:value});
    }
    back(){
     window.location.href="/logined"
    }
    btn(){
        var _this=this;
        $.ajax({
            type: "post",
            url: "http://101.132.136.49/cgv-2.0/update.do",
            data: {
                id:sessionStorage.getItem('token'),
                password:_this.state.password
            },
            dataType: "json",
            success: function (data) {
                
                
               
                
            }
        });
        
    }
    render(){
        return(
            <div>
                <header style={{height:"0.8rem",width:"100vw",display:"flex",justifyContent:"space-around",alignItems:"center",background:"#303636",color:'white'}}>
                <em className='iconfont' onClick={this.back.bind(this)}>&#xe62f;</em><span></span><span></span><span></span><span>设置</span><span></span><span></span><span></span><span></span><span></span>
                </header>
                  <InputItem clear placeholder="密码" onChange={this.Password}>密码：</InputItem>
                  <Button type="primary"  style={this.yanga} onClick={this.btn.bind(this)}>修改密码</Button>
            </div>
        )
    }
}
export default Goumai;