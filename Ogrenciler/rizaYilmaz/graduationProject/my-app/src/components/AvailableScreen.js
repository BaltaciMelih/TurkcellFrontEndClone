import "../style/bootstrap-override.scss";
import AvailableScreenCard from "./AvailableScreenCard";
import Pcicon from "../img/icons-pc.svg";
import Macicon from "../img/icons-mac.svg";
import Androidicon from "../img/icons-android.svg";
import Title from "./Title";
import React from 'react';
function AvailableScreen(){
    return(
        <div className="bg-sixth pt-5">
        <div className="container p-5 mt-5">
            <div className="row pt-5 mt-5">
                <Title content="On all your screens at home and on the go" color="eighth"/>
            </div>
            <div className="row p-5">
                <div className="col-12 col-md-4">
                    <AvailableScreenCard image={Pcicon} screenType="Windows"/>
                </div>
                <div className="col-12 col-md-4">
                    <AvailableScreenCard image={Macicon} screenType="Mac"/>
                </div>
                <div className="col-12 col-md-4">
                    <AvailableScreenCard image={Androidicon} screenType="Android"/>
                </div>
            </div>
        </div>
        </div>
    )
}
export default AvailableScreen;