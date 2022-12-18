import { useState, useEffect } from "react";

const Utility = () => {
  let [readState, setState] = useState([]);

  const getData = () => {
    fetch("http://localhost:3002/data", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const mapped = myJson.map((item) => {
          return {
            title: item.title,
            url: item.steamUrl,
            firstLatter: item.title.split("")[0].toUpperCase(),
          };
        });

        let group = "firstLatter";
        const sortedData = mapped.reduce((acc, value) => {
          let key = value[group];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(value);
          return acc;
        }, {});
        setState(Object.entries(sortedData).sort());
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return readState;
};

export default Utility;
