import React from "react";
import $ from "jquery"


class Offline extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        var _this=this
        $.ajax({
            type: "get",
            url: "http://101.132.136.49/cgv-2.0/localActivity.do",
            data: {
               
            },
            dataType: "json",
            success: function (data) {
                console.log(data)
                _this.setState({list:data.data})
            }
        }); 
    }
    render(){
        return(
            <div>
                {
                    this.state.list.map(function(item,i){
                        return(
                            <div className="bot" key={i}>
                               <p style={{margin:'0.1rem',}}>{item.title}</p>
                               <div><img src={"http://101.132.136.49"+item.image} style={{width:"100vw",height:'4.5rem'}}/></div>
                               <p>{item.time}</p>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}
export default Offline;