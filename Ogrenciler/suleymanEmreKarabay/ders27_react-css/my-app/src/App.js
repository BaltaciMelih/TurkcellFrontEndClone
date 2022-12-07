import "./App.scss";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Emre",
      not: 45,
    },
    {
      id: 2,
      name: "Halil",
      not: 60,
    },
    {
      id: 3,
      name: "Egehan",
      not: 80,
    },
    {
      id: 4,
      name: "Süleyman",
      not: 20,
    },
  ]);

  // user.map((item, index) => {

  //   const [item.not] = item;

  //   console.log(item.not);
  //   item.not.sort(function (a, b) {
  //     if (a > b) return 1;
  //     if (a < b) return -1;
  //     return 0;
  //   });
  //   setUser(user);
  // });
  // user.map((item, index) => {
  //   item.sort(function (a, b) {
  //     return b.not - a.not;
  //   });
  //   setUser(user);
  // });
  var newArray = [];
  var tempArray = [];
  for (var index = 0; index < user.length; index++) {
    tempArray.push({
      param: index + 1,
      value: user[index].not,
      id: user[index].id,
      name: user[index].name,
    });
  }
  tempArray.sort(function (a, b) {
    return b.value - a.value;
  });
  for (var i = 0; i < tempArray.length; i++) {
    newArray.push({
      id: tempArray[i].id,
      name: tempArray[i].name,
      not: tempArray[i].value,
    });
  }
  setUser(newArray);
  console.log(newArray);

  const notKontrol = (item) => {
    if (item.not <= 50) {
      return "kaldi";
    }
    if (item.not > 50) {
      return "gecti";
    }
  };
  return (
    <div className="App">
      {user.map((item, index) => {
        return (
          <div key={index} className={`riskStatus ${notKontrol(item)}`}>
            <p>
              {notKontrol(item)} - Not: {item.not}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
