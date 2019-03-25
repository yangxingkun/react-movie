import React from "react";
import $ from "jquery";
import '../../css/saler/sale.css';
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';

import Renqi from './renqi/Renqi'

class Sale extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type: "get",
            url: "http://101.132.136.49/cgv-2.0/goodstype/typeList.do",
            dataType: "json",
            success: function (data) {
                _this.state.list=data.data
                _this.setState({list:data.data})
                
                
            }
        }); 
    }
    // <NavLink to={{pathname:'/renqi', state:{id:item.id}}} key={i}>
    render(){
        var _this=this;
        return(
            <div className='ksale'>
            <Router>
            <div>
            <ul className="ksale1">
                {
                    this.state.list.map(function(item,i){
                        return(
                            <NavLink to={"/renqi/"+item.id} key={i}>
                                <li>
                                    <em className='iconfont'>&#xe61b;</em>
                                    <span>{item.name}</span>
                                </li>
                            </NavLink>
                            
                            
                        )
                    })
                }
             
               </ul>
               <div className="ksale2">
                    <Switch>
                    <Route path='/renqi' component={Renqi}></Route>
                    <Redirect to="/renqi/1"/>
                   
                    </Switch>
               </div>

               </div>
               </Router>

            </div>
           
        )
    }
}
export default Sale;