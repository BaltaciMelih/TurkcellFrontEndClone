import './App.css';


function App() {
  const students = ["Varol","Okan","Enes","Kemal","Ali"]
  const itemList=[
    <li key={1}>deneme</li>,
    <li key={2}>deneme</li>,
    <li key={3}>deneme</li>,
    <li key={4}>deneme</li>,
  ]


  return (
      <div className='App'>
        <ul>
          {/* {students.map((student, index) => {
            <ListItem key={index} students={students}></ListItem>
          })} */}
        <div>
          <input></input>
          <button>Getir</button>
        </div>
        </ul>
        <ul>{itemList}</ul>
        <ul>
          {students.map((item, index) => {
            return <li key={index}>
              { item.length > 3 ? item.toUpperCase() : item.toLowerCase() } 
            </li>
          }) }
        </ul>
        <ul>
        {students.filter(students => students.includes('a')).map(filteredstudents => (
        <li>
          {filteredstudents}
        </li>
      ))}
        </ul>
      </div>

  )
    
  
}

export default App;
