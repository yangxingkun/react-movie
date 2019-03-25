import React from "react";
import './../css/social.css'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import $ from 'jquery'

import { WingBlank, WhiteSpace ,Grid } from 'antd-mobile';
const pname={
    width:"30px",
    whiteSpace:"nowrap",
    overflow: 'hidden',
    textOverflow:"ellipsis"
}
class Social extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            list:[],
            divarr:[]
        }
    }
    
    componentWillMount(){
   
        // const data = Array.from(new Array(9)).map((_val, i) => ({
        //     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        //     text: `name${i}`,
        //   }))
    }
    tap(){

        console.log("djdjjdj")
    }

    render(){
        return(
            <div className="ksocial">
                 <header className="khead1 
                 ">
                   <span>社区</span>
                </header>
                <div className="ksoc">

   

                 <Grid data={this.state.divarr} columnNum={4} itemStyle={pname} isCarousel onClick={_el => console.log(_el)}  />

          
                    {
                        this.state.list.map(function(item,i){
                            return(
                                
                            <div className="row" key={i}>
                            
                            <WingBlank size="md" style={{background:'#fff',display:'flex'}}>
                                <div ><img src= {item.pimg} /></div>

                                <div className="ksoc1">
                                    <div >￥{item.pprice}</div>
                                    <div className="ksoc2"><NavLink to={{pathname:"/detailgoods",state:{id:item.pid}}}>{item.pname}</NavLink></div>
                                </div>
                            </WingBlank>
                          
                            </div>
                            )
                        })
                        }
                </div>
            </div>
        )
    }
    componentDidMount(){
        var _this=this
        $.ajax({
          type:'get',
          url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
          dataType:'json',
          data:{uid:"1148"},
          async:'false',
          success:function(data){
            //console.log(data)
            _this.setState({list:data.data})
            let newarr=[];
            data.data.map(item=>{
                newarr.push({
                    "icon":item.pimg,
                    "text":item.pname,
                    "pid":item.pid
                })
            })
            _this.setState({
                divarr:newarr
            })
          }
        })
      }
}
export default Social;
