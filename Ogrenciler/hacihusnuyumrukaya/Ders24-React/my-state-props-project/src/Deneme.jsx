import React from "react";
export default function Deneme() {
    const changeButton = () => {
 
    const baseUrl="http://localhost:3002/foods/";
    fetch(baseUrl)
      .then((response) => response.json())
       .then((data) => console.log(data))
       .catch((err) => console.log(err));
    }
    
    return (
        
      <div> 
        <button onClick={changeButton}>Tıkla</button>
        <div  className="card col-md-4" >
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
       </div>
       <div className="card col-md-4" >
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
       </div>
      </div>
    );
}
