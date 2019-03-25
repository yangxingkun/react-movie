import React from "react";
import $ from "jquery";
import b from '../../image/p.jpg'
class Nowplaying extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
        }
    }
    componentDidMount(){


        function loadingEffect(){
            var loading=$("#loader")
            loading.hide();
            $(document).ajaxStart(function(){
                loading.show();
            }).ajaxSuccess(function(){
                loading.hide()
            })
        }
        loadingEffect();
        
        var _this=this
        $.ajax({
            type: "get",
            url: "http://101.132.136.49/cgv-2.0/movies.do",
            dataType: "json",
            success: function (data) {
                console.log(data.data)
                _this.setState({list:data.data})
               
            }
        }); 
    }
    buy(i,id,e){
        console.log(e.target.nodeName.toLowerCase()=="h3")
        if(e.target.nodeName.toLowerCase()!="h3"){
            window.location.href="/detail/"+id
        }
    }
    buy1(i,id){
        window.location.href="/level/"+id
    }
    render(){
        return(
            <ul className='Kindex3'>
            {
                this.state.list.map((item,i)=>{
                    return(
                        <li onClick={this.buy.bind(this,i,item.movie.id)} key={i}>
                            <img src={item.movie.image}/>
                           <div className='Kindex4'>
                                        <div className='Kindex7'>
                                            <span>{item.movie.name}</span>
                                            <span>{item.movie.many}万人购票</span>
                                        </div>
                                        <div className='Kindex5'>
                                         
                                         
                                         <p>iMId 3D</p>

                                        </div>
                                        <div className='Kindex6'>
                                            <div>
                                                <h4>{item.movie.title}</h4>
                                                <h5>{item.movie.score}</h5>
                                            </div>
                                            <h3 onClick={this.buy1.bind(this,i,item.movie.id)}>
                                                购票
                                            </h3>
                                        </div>
                                </div>
                        </li>
                    )
                })

            }
  
            </ul>
        )
    }
}
export default Nowplaying;