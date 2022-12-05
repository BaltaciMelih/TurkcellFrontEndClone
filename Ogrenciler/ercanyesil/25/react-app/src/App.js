import './App.css';

function App() {
  // const students = ["Varol", "Halil", "Şafak", "Mustafa", "EnesSöl"];
  // const itemList = [
  //   <li key={1}>Deneme 1</li>,
  //   <li key={2}>Deneme 2</li>,
  //   <li key={3}>Deneme 3</li>,
  //   <li key={4}>Deneme 4</li>,
  // ];

  const data = [
    {
      id: 1,
      name: "Beşiktaş",
      color1: "Black",
      color2: "White",
      w: 300,
    },
    {
      id: 2,
      name: "Galatasaray",
      color1: "Red",
      color2: "Yellow",
      w: 300,
    },
    {
      id: 3,
      name: "Fenerbahçe",
      color1: "Blue",
      color2: "Yellow",
      w: 300,
    },
  ];

  return (
    <div className="App">
      {/* <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student}></ListItem>
        ))}
      </ul>
      <ul>{itemList}</ul>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={index}>
              {item.length > 5 ? item.toUpperCase() : item.toLowerCase()}
            </li>
          );
        })}
      </ul>
      <ul>
        {students.map((item, index) => {
          if (item.includes("Varol")) {
            return null;
          } else {
            return item;
          }
        })}
      </ul> */}
      <ul>
        {data.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                background: item.color1,
                color: item.color2,
                width: `${item.w}px`,
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
