import React from "react";
import img from "./../../image/vip.jpg"
import "./../../css/shipcard.css"
class Shipcard extends React.Component{
    render(){
        return(
            <div>
                <div className="bac">
                    <div className="vip">
                        <div className="left">
                            <img src={img} alt="2"/>
                        </div>
                        <div className="mid">
                            <p>E优卡(年卡)</p>
                            <p>健身中心等场所的会员认证，凡涉及到需要识别身份的地方。</p>
                            <p>45元</p>
                        </div>
                        <div className="rig">
                            <p></p>
                            <p></p>
                            <p>购买</p>
                        </div>
                    </div>
                    <div className="vip">
                        <div className="left">
                            <img src={img} alt="3"/>
                        </div>
                        <div className="mid">
                            <p>E优卡(月卡)</p>
                            <p>会员卡是泛指普通身份识别卡，包括商场、宾馆。</p>
                            <p>30元</p>
                        </div>
                        <div className="rig">
                            <p></p>
                            <p></p>
                            <p>购买</p>
                        </div>
                    </div>
                    <div className="vip">
                        <div className="left">
                            <img src={img} alt="1"/>
                        </div>
                        <div className="mid">
                            <p>E优卡(季卡)</p>
                            <p>会员卡是泛指普通身份识别卡，包括商场、会员认证，凡涉及到需要识别身份的地方。</p>
                            <p>15元</p>
                        </div>
                        <div className="rig">
                            <p></p>
                            <p></p>
                            <p>购买</p>
                        </div>

                    </div>

                </div>
                

            </div>
        )
    }
}
export default Shipcard;