import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Level from "./components/Level";
import Goumai from "./components/Goumai";
import './App.css';
import Detail from './components/Detail';
import Msg from './components/Msg';
import Order from './components/Order';

import Detailgoods from './components/Detailgoods';
class App extends Component {
  render() {
    return (
      <div className="App">

       <Router>
	        <div>
	        		<Switch>
		        		<Route path="/home" component={Home}></Route>
              <Route path="/goumai" component={Goumai}></Route>
		        		<Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/level" component={Level}></Route>
                <Route path="/msg" component={Msg}></Route>
                
                <Route path="/order" component={Order}></Route>
                
                <Route path="/detailgoods" component={Detailgoods}></Route>

		        		{/* <Redirect to="/home"/> */}
	        		</Switch>
	        </div>
        </Router>
      </div>
    );
  }
}

export default App;
