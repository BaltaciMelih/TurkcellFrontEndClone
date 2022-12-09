import React,{useState} from "react";
import { Slider,Navbars,Footer} from "../../components";
import { AiOutlinePlus } from "react-icons/ai";
import {ListGroup,Button}  from 'react-bootstrap';

const Home = (props) => {
     const [count,setCount]=useState(0);
    // const [filterProducts,SetFilterProducts]=useState("");
    // function filter(e){
    //    SetFilterProducts(props.products.filter(
    //     (product)=>{
    //       return product.category.toLowerCase().indexOf(e.target.textContent.toLowerCase())!==-1
    //     }
    //   ))
    //   console.log(filterProducts);

    // } 
    function xxx(count)
    {
      console.log(count);
     return setCount(count);
    }
    
  return (
    <div>
      <Navbars></Navbars>
      <Slider></Slider>
       <ListGroup as="ol"  className="listgroup col-md-4 m-3">
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Temel Gıda
        </div>
        {/* <Badge bg="primary" pill>3 </Badge> */}
      </ListGroup.Item>
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Meyve-Sebze
        </div>
        {/* <Badge bg="primary" pill>2</Badge> */}
      </ListGroup.Item>
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Atıştırmalık
        </div>
        {/* <Badge bg="primary" pill>0</Badge> */}
      </ListGroup.Item>
    </ListGroup> 
{count}
    <div className="container-xl productCard d-flex  flex-wrap"> 
        {props.products.map((object)=>(
         <div className="card  col-md-2  m-3" key={object.id}>
         <img src={object.productImage} className="productImage card-img-top" alt="..." height="150px"/>
         <div className="card-body">
         <span className="productName fs-4">{object.productName}</span>
           <h6 className="category">{object.category}</h6>
           <div className="foodCount ">Stok Adet: {object.count} </div>
           <div className="price d-flex" > {object.price} ₺
           <Button onClick={(e)=>xxx(object.count-1)}   variant="outline-secondary ms-auto "><AiOutlinePlus/></Button>
            </div>
         </div>
       </div>   
        ))}
  
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
