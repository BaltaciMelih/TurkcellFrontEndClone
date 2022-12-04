import React from 'react';
const DenemeClass =(props)=> {
 

     function handleClick(e) {
       e.target.parentElement.parentElement.remove();
     }
    return (
      <div className="container-fluid ">
        <div className="container-xxl foodCard d-flex  flex-wrap"> 
        {props.foods.map((object)=>(
         <div className="card  col-sm-4" key={object.id}>
         <img src={object.foodImage} className="foodImage card-img-top" alt="..." height="300px"/>
         <div className="card-body">
         <span className="foodName fs-4">{object.foodName}</span>
           <h6 className="category">{object.category}</h6>
           <p className="foodContent" >{object.foodContent}.....</p>
           <div className="authorName text-end">{object.authorName}</div>
           <div className="date text-end">{object.date}</div>
          <button type='button' onClick={handleClick}  className='bg-dark text-light '>Delete</button>
         </div>
       </div>   
        ))}
  
      </div>
      </div>
    )
  
}
export default DenemeClass;