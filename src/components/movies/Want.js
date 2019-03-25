import React from "react";
import $ from "jquery";

class Want extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
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

        
        var _this=this;
        var token= sessionStorage.getItem('token')
        $.ajax({
            type: "post",
            url: "http://101.132.136.49/cgv-2.0/likeMovie.do",
            data: {
                 token:token,
            },
            dataType: "json",
            success: function (data) {
                console.log(data.data)
                _this.setState({list:data.data})
            },
            error:function(){
                window.location.href="/login"
            }
        }); 
    }
    btn(id,i){
        var _this=this;
        var token= sessionStorage.getItem('token')
        $.ajax({
            type: "post",
            url: "http://101.132.136.49/cgv-2.0/delLike.do",
            data: {
                movieid:id,
                token:token,
            },
            dataType: "json",
            success: function (data) {
               
                if(data.code==1){
                    var arr=_this.state.list;
                    arr.splice(i,1)
                    _this.setState({list:arr})
                }
                
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
        
        return(
            <ul className='Kindex3'>
            {
                this.state.list.map((item,i)=>{
                    return(
                        <li onClick={this.buy.bind(this,i,item.id)} key={i}>
                            <img src={item.image}/>
                            <div className='Kindex4'>
                                <div className='Kindex7'>
                                    <span>{item.name}</span>
                                    <span><i className="iconfont woll"  onClick={this.btn.bind(this,item.id,i)}>&#xe699;</i>{item.many}万</span>
                                </div>     
                                <div className='Kindex5'>
                                    
                                    <p>IMAX 3D</p>

                                </div>
                                <div className='Kindex6'>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <h5>{item.score}</h5>
                                    </div>
                                    <h3 onClick={this.buy1.bind(this,i,item.id)}>
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
export default Want;