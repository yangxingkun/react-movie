import React from "react";
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';

import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
import { StickyContainer, Sticky } from 'react-sticky';



const tabs = [
    { title: '待付款' },
    { title: '待发货' },
    { title: '待收货' },
    { title: '待评价' },
    { title: '退款与售后' },
  ];

  
  function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }

  
  const TabExample = () => (
    <div>
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={tabs}
          initalPage={'t2'}
      
          renderTabBar={renderTabBar}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of 4 tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of 5 tab
          </div>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  );







class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            str:''
        }
    }




  
    render(){
      console.log(this.props.location.search.split("=")[1]) 
        return(
            <div className="tan">
                <header className="head">
                    <span>订单</span>
                </header>

                <TabExample/>

             
            </div>
        )
    }
}
export default Order;