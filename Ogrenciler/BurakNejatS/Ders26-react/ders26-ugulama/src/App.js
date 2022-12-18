
import './App.css';
import List from './List';

function App() {
  const student =["Burak","Gulnaz", "Ömür"]
  const itemList =[
    <li key={1}>1</li>,
    <li key={2}>2</li>,
    <li key={3}>3</li>,
    <li key={4}>4</li>,
  ]

  function handleSubmit(e){
e.preventDefault()

var deger = e.target.value;
  }

  return (
   
    <div className='App'> 


      <ul>{itemList}  </ul> 
     <ul>
      {itemList.map((item,index)=>(
        if(item.filter()==deger){

          return  degere


          
        }
      ))}
     </ul>



      <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input  type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
   </div>
 
  
   
   
  
  );
}

export default App;
