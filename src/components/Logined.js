import React from "react";
import '../css/logined.css'
import a from '../image/p.jpg'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom';



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            xyl:""
        }
    }
    btn(){
        sessionStorage.clear()
        this.props.history.push({pathname:'/home'})
    }
    klogin(){
      
        window.location.href='/login'
    }
    krigster(){
  
        window.location.href='/register'    
    }
    bound(){
        window.location.href='/msg'    
    }
   componentDidMount(){
       this.setState({xyl:sessionStorage.getItem('data')})
   }
   btn1(){
    window.location.href='/goumai'   
   }

    render(){
        return(
            <div className="bod">
               <header>
                   <span>我的</span>
                </header>
               <section>
                   <div className="knav">
                        <div className="knav1">
                            <img src={a} />
                            <span>&nbsp;</span>
                            {
                                this.state.xyl==null?<div>
                                <span onClick={this.klogin.bind(this)}>登录/</span><span onClick={this.krigster.bind(this)}>注册</span> </div>:<div>
                                
                                <span>
                                {this.state.xyl}
                                </span>
                            </div>

                            }
                            
                        </div>
                   </div>
                   <div className="knav2">
                            <ul>
                           
                                <li>
                                <a href="/order?id=1">
                                    <em className='iconfont ling'>&#xe641;</em>
                                    <span>待付款</span>
                                </a>
                                </li>
                               
                               
                                <li>
                                <a href="/order?id=2">
                                <em className='iconfont ling'>&#xe693;</em>
                                    <span>待发货</span>
                                    </a>
                                </li>
                                
                                <li>
                                <a href="/order?id=3">
                                <em className='iconfont ling'>&#xe62b;</em>
                                    <span>待收货</span>
                                    </a>

                                </li>
                              

                                <a href="/order?id=4">
                                <li className="kteshu">
                                <em className='iconfont ling'>&#xe60a;</em>
                                    <span>待评价</span>
                                </li>
                                </a>
                            </ul>
                    </div>
                    <div className="knav3" onClick={this.bound.bind(this)}>
                        <em className='iconfont'>&#xe600;</em>
                        <span>我的消息</span>
                        <i className='iconfont'>&#xe62e;</i>
                    </div>
                    <div className="knav4">
                    <ul>
                        <li>
                        <em className='iconfont'>&#xe617;</em>
                        <span>我的评论</span>
                        <i className='iconfont'>&#xe62e;</i>


                        </li>
                        <li>
                        <em className='iconfont'>&#xe646;</em>
                        <span>我的二维码</span>
                        <i className='iconfont'>&#xe62e;</i>


                        </li>
                        <li>
                        <em className='iconfont'>&#xe630;</em>
                        <span>邀请好友送礼</span>
                        <i className='iconfont'>&#xe62e;</i>
                        </li>
                    </ul>
                    </div>


                    <div className="knav5">
                    <ul>
                        <li >
                        <em className='iconfont'>&#xe62c;</em>
                        <span>关于CGV</span>
                        <i className='iconfont'>&#xe62e;</i>
                        </li>
                        <li onClick={this.btn1.bind(this)}>
                        <em className='iconfont'>&#xe604;</em>
                        <span>设置</span>
                        <i className='iconfont'>&#xe62e;</i>
                        </li>
                    </ul>


                    </div>

                    <Button  type="primary" style={{width:"96vw",height:"0.9rem",lineHeight:"0.9rem",marginLeft:'2vw',background:'#fff',color:'red',border:'0',marginTop:'0.2rem',}} onClick={this.btn.bind(this)}>退出登录</Button> 
                    
               </section>
            </div>
        )
    }
}
export default Login;