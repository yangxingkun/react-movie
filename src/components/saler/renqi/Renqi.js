import React from "react";
import $ from "jquery";
import str from '../../../image/p.jpg'

class Renqi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            id:""

        }
    }
    componentDidMount(){

       
        
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type: "get",
            url: "http://101.132.136.49/cgv-2.0/goods/goodsByType.do",
            data:{type:this.props.location.pathname.split("/")[2]},
            dataType: "json",
            success: function (data) {
                console.log(data.data)
                _this.setState({list:data.data})
            }
        }); 
    }
    componentWillReceiveProps(a){
       //data:{type:_this.props.location.state.id},
        
        var _this=this;
        $.ajax({
            type:"get",
            url: "http://101.132.136.49/cgv-2.0/goods/goodsByType.do",
            async:false,
            dataType:"json",
            data:{type:this.props.location.pathname.split("/")[2]},
            success: function (data) {
                console.log(data.data)
                _this.setState({list:data.data})
            }
        }); 
    }

    render(){
        return(
            <div>
             
                <h2><em></em>&nbsp;&nbsp;人气套餐和单品</h2>
                <ul>
                {
                    this.state.list.map((item,i)=>{
                         return(
                            <li key={i}>
                              <img src={"http://101.132.136.49"+item.image} />
                                <div  className='krenqi'>
                                    <p>{item.name}</p>
                                    <h3>促销价：{item.oldprice}元</h3>
                                    <em>{item.price}元</em>
                                </div>
                            </li>
                         )
                     })
                }
                
                
                    


                </ul>
                
            </div>
        )
    }
}
export default Renqi;