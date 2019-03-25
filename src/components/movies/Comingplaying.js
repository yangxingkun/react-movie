import React from "react";
import $ from "jquery";
import { Toast} from 'antd-mobile';
class Comingplaying extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            show:false,
            xyl:''
        }
    }
   
    successToast(i){
       
       
        console.log(i)
        var _this=this;
        var token= sessionStorage.getItem('token')
        $.ajax({
            type: "post",
            url: "http://101.132.136.49/cgv-2.0/addLike.do",
            data: {
                 movieid:i,
                 token:token
            },
            dataType: "json",
            success: function (data) {
                Toast.success('添加成功', 1);
                console.log(data)
            },
            error:function(){
                window.location.href="/login"
            }
        }); 
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


        var _this=this;
        $.ajax({
            type: "get",
            url: "http://101.132.136.49/cgv-2.0/moviesBystatus.do",
            data: {
               
            },
            dataType: "json",
            success: function (data) {
                console.log(data.data)
                _this.setState({list:data.data})

            }
        }); 
    }
    buy(i,id,e){
        console.log(e.target.nodeName.toLowerCase()!="i&&h3")
        if(e.target.nodeName.toLowerCase()!="i" && e.target.nodeName.toLowerCase()!="h3"){
            console.log(8)
             window.location.href="/detail/"+id
        }
       
    }
    buy1(i,id){
        window.location.href="/level/"+id
    }
    render(){
        var _this=this
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
                                            <span><i className="iconfont will"  onClick={this.successToast.bind(this,item.movie.id)}>&#xe6b3;</i>{item.movie.many}万</span>

                                        </div>
                                        <div className='Kindex5'>
                                         
                                         
                                         <p>IMAX 3D</p>

                                        </div>
                                        <div className='Kindex6'>
                                            <div>
                                                <h4>{item.movie.title}</h4>
                                                <h5>{item.movie.score}</h5>
                                            </div>
                                            <h3 onClick={this.buy1.bind(this,i,item.movie.id)}>
                                                预售
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
export default Comingplaying;