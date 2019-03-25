import React from "react";
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Index from "./Index";
import Logined from "./Logined";
import Shop from "./Shop";
import Social from "./Social";
import Active from "./Active";
import './../css/home.css'


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            str:''
        }
    }
    render(){
        return(
            <div >
                <Router>
                    <div className="zhu">
                        <div className="sec">
                        <Switch>
                            <Route path="/home/logined" component={Logined}></Route>
                           
                            <Route path="/home/index" component={Index}></Route>
                            <Route path="/home/shop" component={Shop}></Route>
                            <Route path="/home/social" component={Social}></Route>
                            <Route path="/home/active" component={Active}></Route>
                            

                            {/* <Redirect to="/home/logined"/> */}
                        </Switch>
                        </div>
                        <footer className="foot">
                            <NavLink to="/home/index"><dl><span><i className="iconfont">&#xe60b;</i></span><span>电影</span></dl></NavLink>
                            <NavLink to="/home/active"><dl><dt><i className="iconfont">&#xe649;</i></dt><dd>活动</dd></dl></NavLink>
                            <NavLink to="/home/social"><dl><dt><i className="iconfont">&#xe62a;</i></dt><dd>社区</dd></dl></NavLink>
                            <NavLink to="/home/shop"><dl><dt><i className="iconfont">&#xe654;</i></dt><dd>商店</dd></dl></NavLink>
                            <NavLink to="/home/logined"><dl><dt><i className="iconfont">&#xe603;</i></dt><dd>我的</dd></dl></NavLink>
                        </footer>

                    </div>
                </Router>
            </div>
        )
    }
}
export default Home;