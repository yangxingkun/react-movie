import React from "react";
import $ from "jquery";
import str from '../image/p.jpg'
import history from 'history/createBrowserHistory' 

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }

    back(){
        this.props.history.goBack()
        // window.location.href="/"
    }
    
// <img src={"http://101.132.136.49"+item.movie.image}/>
    btn(){
        
    }
    componentDidMount(){
        var _this=this
        console.log(this.props.location.pathname.split("/")[2])
        $.ajax({
            type: "get",
            url: "http://101.132.136.49/cgv-2.0/intro/movieintro.do",
            data: {
               mid:this.props.location.pathname.split("/")[2],
            },
            dataType: "json",
            success: function (data) {
                console.log(data.data.data[0])
               
                _this.setState({list:data.data.data[0]})
            }
        }); 
    }
    buy1(id){
        window.location.href="/level/"+id
    }
    render(){
        return(
            <div onClick={this.btn.bind(this)} className='kdetail'>
                <header>
                    <em className='iconfont' onClick={this.back.bind(this)}>&#xe62f;</em>
                    <h2>电影详情</h2>
                    <em className='iconfont'>&#xe602;</em>
                </header>
                <ul className='Kdetailtop'>
                            <li>
                                <img src={this.state.list.image}/>
                                <div className='Kdetailtop4'>
                                        <div className='Kdetailtop7'>
                                            <span>{this.state.list.name}</span>
                                            <span className='iconfont' ref='tit'>&#xe6b3;2893人</span>
                                        </div>
                                        <div className='Kdetailtop5'>
                                         <p>iMId 3D</p>
                                         <p>iMId 3D</p>
                                         <p>iMId 3D</p>

                                        </div>
                                        <div className='Kdetailtop6'>
                                            <div>
                                                <h5>/中文.英文</h5>
                                                <h4>{this.state.list.title}</h4>
                                                <h5>2019-09-08上映.124分钟.美国科幻</h5>
                                            </div>
                                            
                                        </div>
                                </div>
                            </li>
                        </ul>
                        <div className='kdetail2'>
                            <div className='kdetail3'>
                            <div>
                                <span>
                                    <em className='iconfont '>
                                    &#xe65f;&#xe65f;&#xe65f;&#xe65f;&#xe65f;
                                    </em>
                                    &nbsp;
                                    评分：{ this.state.list.score}
                                </span>
                            </div>
                                <h5>{ this.state.list.many}万人购买/2，860人想看</h5>

                            </div>
                            <div className='kdetail4'>
                                <div className='kdetail5'>
                                    <h3>导演：</h3>
                                    <span>{ this.state.list.actors}</span>
                                </div>
                                <div className='kdetail5'>
                                    <h3>主演：</h3>
                                    <span>{ this.state.list.director}</span>
                                </div>
                                <div className='kdetail5'>
                                    <h3 className='kteshu1'>剧情: </h3>
                                    <span>{this.state.list.story}
                                    </span>
                                </div>
                            
                        
                            </div>

                        </div>
                        <footer className='kdetailfoo'>
                            <div onClick={this.buy1.bind(this,this.state.list.id)}>
                            购票
                            </div>
                        </footer>
            </div>
        )
    }
}
export default Detail;