import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {Button}  from 'react-bootstrap';
const Admin = (props) => {
    return (
      <div>
           <div className="container-xl productCard d-flex  flex-wrap"> 
          {props.products.map((object)=>(
           <div className="card  col-md-2  m-3" key={object.id}>
           <img src={object.productImage} className="productImage card-img-top" alt="..." height="150px"/>
           <div className="card-body">
           <span className="productName fs-4">{object.productName}</span>
             <h6 className="category">{object.category}</h6>
             <div className="foodCount ">Stok Adet: {object.count} </div>
             <div className="price d-flex" > {object.price} ₺
             <Button   variant="outline-secondary ms-auto "><AiOutlinePlus/></Button>
             </div>
           </div>
         </div>   
          ))}
    
        </div>
      </div>
    );
  };
  
  export default Admin;