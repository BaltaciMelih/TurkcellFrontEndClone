import React from 'react'
import './GameFilterCategory.scss';


const GameFilterCategory = ({setFilter, unique, filter}) => {

// unique kategorilerimi çekiyor
const updateStateList = (e, value ) => {
  console.log(e.target.checked)
  if (e.target.checked){
    //append to array
    setFilter(filter.concat([value])) // concat arrayleri birleştirir.
    
  } else {
    //remove from array
    setFilter(filter.filter(f => f !==value))
   
 }
}
  return (
    <div className='game-filter-category bg-dark  p-md-4'>

      

                        {/* accordion */}
      <div className="accordion smash accordion-flush" id="accordionFlushExample">
        <div className="accordion-item  ">
          <h2 className="accordion-header " id="flush-headingOne">
            <button className="accordion-button collapsed text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              State
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <ul className=" w-100 text-white bg-transparent">

              <li className='wrapper '>
                <input type="checkbox" id='check1' />
                <label htmlFor="check1">Available</label>
              </li>

              <li className='wrapper '> 
                <input type="checkbox" id='check2' />
                <label htmlFor="check2">Patching</label>
              </li>

              <li className='wrapper '>
                <input type="checkbox" id='check3' />
                <label htmlFor="check3">Maintenance</label>
              </li>
              
              {/* <li className='wrapper '>
               <span onClick={() => setFilter(console.log("Aksiyon"))}>Heads Will Roll: Downfall (Steam)</span>
              </li>
              */}
              
            </ul>
          </div>
        </div>


        <div className="accordion-item  ">
          <h2 className="accordion-header " id="flush-headingTwo">
            <button className="accordion-button collapsed text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Genre
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <ul className=" w-100 text-white bg-transparent">

                {unique.map((item, index) => (
                <li className='wrapper '   key={index}>
                  <input type="checkbox" id={`${item}`}  onClick={(e)=>updateStateList(e,item)}
                  />
                  <label >{item}</label>
               </li>
              ))}
            </ul>
          </div>
        </div>


     


      </div>


     
    </div>
  )
}

export default GameFilterCategory