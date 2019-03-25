import React from "react";
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';

import Online from './Online'
import Offline from './Offline'
import "./../css/active.css"
class Active extends React.Component{
    render(){
        return(
            <div className="tan">
                <header className="head">
                    <span>活动</span>
                </header>
                <Router>
                    <div className="navs"> 
                        
                        <div className="navv">
                            <NavLink to="/online">线上活动</NavLink>
                            <NavLink to="/offline">线下活动</NavLink>
                            <Redirect to="/online"/>
                        </div>
                        <div className="act">
                        <Switch>
                           
                                <Route path="/online" component={Online}></Route>
                                <Route path="/offline" component={Offline}></Route>
                            
                        </Switch>
                        </div>
                    </div>

                </Router>
            </div>
        )
    }
}
export default Active;