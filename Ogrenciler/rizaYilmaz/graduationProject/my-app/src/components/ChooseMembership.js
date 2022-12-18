import "../style/bootstrap-override.scss";
import React from 'react';
import ChooseMembershipCard from "./ChooseMembershipCard";
function ChooseMembership(){
    return(
        <div className="chooseMembershipSection bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <ChooseMembershipCard standard={false} title="BASIC" price="Free"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <ChooseMembershipCard standard={true} title="STANDARD" itstrue={true} price="15$/month"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <ChooseMembershipCard standard={false} title="PREMIUM" price="30$/month"/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default ChooseMembership;