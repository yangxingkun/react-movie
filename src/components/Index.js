import React from "react";

import "./../css/index.css"

import $ from 'jquery'
import { Carousel, WingBlank,PullToRefresh, ListView, Button } from 'antd-mobile';
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Comingplaying from './movies/Comingplaying'
import Nowplaying from './movies/Nowplaying'
import Want from './movies/Want'

// import IScroll from "iscroll/build/iscroll-probe";


class Index extends React.Component{

//   componentWillMount(){
//      window.PointerEvent = void(0)


//   }
    componentDidMount(){
     
  
        // var myIscroll=new IScroll("section",{

        // })
      //console.log(myIscroll.y)
    //   $(document).on('touchend',function(){
    //     if(myIscroll.y>50){
    //             //请求最新版的接口替换数据
    //             console.log('下拉成功刷新')
    //     }
    //     if(myIscroll.y<myIscroll.maxScrollY-50){
    //             //请求最新版的接口push新的数据
    //             console.log('上拉成功')
    //     }

    // })

    }
    state = {
        data: [ "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=178339431,3551923999&fm=27&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=824841670,1660722425&fm=27&gp=0.jpg","https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=491882382,808899565&fm=202&mola=new&crop=v1"],
        imgHeight: 200,
    }
    render(){
        return(
            <div className="Kindex">
                <header className="heads">
                    <span>CGV*影城</span>
                    <h5>郑州正弘城</h5>
                </header>
                <div className='Kindex1'>
                    <WingBlank>
                        <Carousel
                        autoplay={true}
                        infinite
                        >
                                {this.state.data.map(val => (
                                    <a key={val} href="http://m.maoyan.com/movie/341139?_v_=yes" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                    <img
                                        src={val}  style={{ width: '100%', verticalAlign: 'top' }} title='电影'
                                        onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                    </a>
                                ))}
                        </Carousel>
                    </WingBlank>

                        <Router>
                            <div>
                        <div className='Kindex2'>
                            <NavLink to="/nowplaying">热映</NavLink>
                            <NavLink to="/comingplaying">即映</NavLink>
                            <NavLink to="/want">想看</NavLink>
                        </div>

                        <div>
                        <div id="loader"></div>
                                <Switch>
                                        <Route path="/nowplaying" component={Nowplaying}></Route>
                                        <Route path="/comingplaying" component={Comingplaying}></Route>
                                        <Route path="/want" component={Want}></Route>
                                        <Redirect to="/nowplaying"/>
                                </Switch>

                        </div>
                        </div>
                        </Router>
                        
                                            
                        
                 </div>
            </div>
        )
    }
}
export default Index;

