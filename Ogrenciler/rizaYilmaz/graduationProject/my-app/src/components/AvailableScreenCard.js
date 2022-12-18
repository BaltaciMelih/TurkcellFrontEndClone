import "../style/bootstrap-override.scss";
import React from 'react';
function AvailableScreenCard(props){
    return(
        <div className="card mb-3 bg-secondary" style={{maxWidth: "540px"}}>
            <div className="row g-0 py-4">
                <div className="col-3 col-md-4 ">
                    <img src={props.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-9 col-md-8">
                    <div className="card-body">
                        <p className="card-text text-eighth fw-regular">Available on {props.screenType}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AvailableScreenCard;