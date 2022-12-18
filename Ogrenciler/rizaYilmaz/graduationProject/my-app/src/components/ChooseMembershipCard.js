import "../style/bootstrap-override.scss";
import React from 'react';
import Button from "./Button";
import stroke1 from "../img/stroke-1.png";
import stroke2 from "../img/stroke-2.png";
import stroke3 from "../img/stroke-3.png";
function ChooseMembershipCard({title,price,itstrue,standard}){
    return(
        <>
        <div className="card rounded-0 text-center border-0">
            <div className={`card-header fs-3 fw-bold text-eighth py-4 rounded-0 ${(itstrue ? 'bg-primary':'bg-ninth')}`}>
                {title}
            </div>
            
            <div className= "card-body border border-primary border-4 bg-tenth" >
                <p className="fs-3 text-eighth fw-regular">{price}</p>
                <hr className="text-eighth"/>
                <ul className="list-unstyled">
                    <li className="text-fourth text-start fs-4 mb-3 fw-regular">{standard===true ? <img src={stroke1} className="me-3" alt=""/> : <img src={stroke2} className="me-3" alt=""/>}Standart Access</li>
                    <li className="text-fourth text-start fs-4 mb-3">{standard===true ? <img src={stroke1} className="me-3" alt=""/> : <img src={stroke2} className="me-3" alt=""/>}1-hr session length</li>
                    <li className="text-fourth text-start fs-4 mb-3">{standard===true ? <img src={stroke1} className="me-3" alt=""/> : <img src={stroke3} className="me-3" alt=""/>}Standart Access</li>
                    <li className="text-fourth text-start fs-4 ">{standard===true ? <img src={stroke1} className="me-3" alt=""/> : <img src={stroke2} className="me-3" alt=""/>}1-hr session length</li>
                </ul>
                <Button content="JOIN NOW"/>
            </div>
        </div>
        </>
    );
}
export default ChooseMembershipCard;