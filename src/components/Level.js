import React from "react";
import $ from "jquery";
import './../css/chang.css'
class Level extends React.Component{
    // /MovieDetail/find.do
    constructor(props){
        super(props)
        this.state={
           list:[]
        }
        var date = new Date();
        var year = date.getFullYear(); //获取年 
        var month = date.getMonth()+1;//获取月  
        var day = date.getDate(); //获取当日
        var time1=month+"-"+day; 
    }
    back(){
        this.props.history.goBack()
    }
    componentDidMount(){
        var _this=this;
        var date = new Date();
        var year = date.getFullYear(); //获取年 
        var month = date.getMonth()+1;//获取月  
        var day = date.getDate(); //获取当日
        var time=year+"-"+month+"-"+day;
        console.log(time)
        $.ajax({
            type: "post",
            url: "http://101.132.136.49/cgv-2.0/MovieDetail/find.do",
            data: {
               mid:this.props.location.pathname.split("/")[2],
               daytime: time,
            },
            dataType: "json",
            success: function (data) {
                console.log(data.data[0])
                _this.setState({list:data.data[0]})
            }
        });
        
    }
    render(){
        return(
            <div className='kdetail'>

                 <header>
                    <em className='iconfont' onClick={this.back.bind(this)}>&#xe62f;</em>
                    <h2>选择场次</h2>
                    <em className='iconfont'></em>
                </header>
                <img src={this.state.list.image}/>
                <h2 style={{fontSize:"0.38rem",height:'0.8rem',lineHeight:"0.8rem",width:"96%",background:"#fff",margin:"0 auto",textAlign:"center",}}>
                   03-23(周六)
                </h2>
                <div style={{display:"flex",justifyContent:'space-around',width:"96%",background:"#fff",margin:"0 auto",textAlign:"center",}}>
                    <div>
                        <p>{this.state.list.starttime}</p>
                        <p>{this.state.list.overtime}结束</p>
                    </div>
                    <div>
                        <p>{this.state.list.language}</p>
                        <p>2d</p>
                    </div>
                    <div>
                        <p>{this.state.list.address}</p>
                    </div>
                    <div>
                        <p className="spe">142元</p>
                        <p>{this.state.list.price}元</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Level;