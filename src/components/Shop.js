import React from "react";
import '../css/shop.css'

import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Sale from './saler/Sale'
import Shipcard from './saler/Shipcard'

class Shop extends React.Component{
    render(){
        return(
            <div className='kshop'>
                <header>
                   <span>商店</span>
                   <h5>郑州正弘城</h5>
                </header>
                

                <Router>
                    <div>
                        
                        <div className='kshopnav'>
                                <NavLink to="/sale">卖品</NavLink>
                                <span>|</span>
                                <NavLink to="/shipcard">会员卡</NavLink> 
                        </div>
                        <Switch>
                            <Route path="/sale" component={Sale}></Route>
                            <Route path="/shipcard" component={Shipcard}></Route>
                            <Redirect to="/sale"/>
                        </Switch>
                    </div>
                </Router>


            </div>
        )
    }
}
export default Shop;