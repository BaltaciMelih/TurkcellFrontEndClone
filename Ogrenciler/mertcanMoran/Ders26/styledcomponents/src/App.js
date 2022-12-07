import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "mertcan",
      grade: 45,
    },
    {
      id: 2,
      name: "burak",
      grade: 30,
    },
    {
      id: 3,
      name: "berat",
      grade: 90,
    },
    {
      id: 4,
      name: "fatma",
      grade: 70,
    },
  ]);

  const sorted = data.sort((a, b) => (a.grade < b.grade ? -1 : 1));

  // console.log(sorted);
  const getGrades = (item) => {
    if (item.grade <= 40) {
      return "dd";
    }
    if (item.grade <= 50) {
      return "cc";
    }
    if (item.grade <= 70) {
      return "bb";
    }
    if (item.grade > 80) {
      return "aa";
    }
  };
  return (
    <div className="App">
      {sorted.map((item, index) => {
        return (
          <div key={index} className={`gradeStatus ${getGrades(item)}`}>
            <p>
              Sınav sonucuna göre harf notu: {getGrades(item)} - Name:
              {item.name} - Grade: {item.grade}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
