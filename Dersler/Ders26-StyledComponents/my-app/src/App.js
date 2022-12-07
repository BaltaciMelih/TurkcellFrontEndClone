import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      age: 65,
    },
    {
      id: 2,
      age: 30,
    },
    {
      id: 3,
      age: 50,
    },
    {
      id: 4,
      age: 40,
    },
  ]);
  const getStatus = (item) => {
    if (item.age <= 40) {
      return "minimal";
    }
    if (item.age <= 50) {
      return "medium";
    }
    if (item.age > 50) {
      return "high";
    }
  };
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className={`riskStatus ${getStatus(item)}`}>
            <p>
              Yaş Durumuna Göre Risk: {getStatus(item)} - Yaş: {item.age}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
