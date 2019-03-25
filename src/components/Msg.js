import React from "react";
import $ from 'jquery';
class Msg extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    tap(){
        this.props.history.push('/logined')
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type:'get',
            url:"http://101.132.136.49/cgv-2.0/messageTypeList.do", 
            dataType:'json',
            success:function(data){
                console.log(data.data)
                _this.setState({
                    list:data.data
                })

            }

        })

    }
    render(){
        return(
            <div className="kmsg">
                <header className="kmsg1">
                    <em className='iconfont' onClick={this.tap.bind(this)}>&#xe62f;</em>
                    <h2>消息中心</h2>
                    <em></em>
                </header>
                <ul className="kmsg2">
                    {
                        this.state.list.map((item,i)=>{
                            return(
                                <li key={i}>
                                <h6 className="iconfont">&#xe62b;</h6>
                                <h4>{item.name}</h4>
                                <h6 className="iconfont">&#xe62e;</h6>
                                 </li>

                            )
                        })

                    }
                </ul>
            
            </div>
        )
    }
    
}
export default Msg;