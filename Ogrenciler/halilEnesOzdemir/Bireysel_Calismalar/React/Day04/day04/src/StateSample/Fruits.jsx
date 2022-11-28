import { useState } from 'react';
import { fruitsInfo } from '../data/fruitsInfo';

function Fruits() {
  const [fruits, setFruits] = useState(fruitsInfo);

  const removeItem = (id) => {
    let newFruitList = fruits.filter((fruit) => fruit.id !== id);
    setFruits(newFruitList);
  };

  const searchFruits = (data) => {
    let filteredData = data.toLowerCase().trim();
    let newFruitList = fruitsInfo.filter((fruit) => fruit.name.toLowerCase().includes(filteredData));
    setFruits(newFruitList);
  };

  const orderByAsc = () => {
    let sortedList = fruits.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setFruits([...sortedList]);
  };

  const orderByDesc = () => {
    let sortedList = fruits.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
    setFruits([...sortedList]);
  };

  const loadData = () => {
    setFruits(fruitsInfo);
  };

  const removeAll = () => {
    setFruits([]);
  };

  return (
    <>
      <div>
        <input type='text' onChange={(e) => searchFruits(e.target.value)} placeholder='Search by name' />
      </div>

      <div>
        <button onClick={() => orderByAsc()}>Order By Asc</button>
        <button onClick={() => orderByDesc()}>Order By Desc</button>
        <button onClick={() => loadData()}>Load Data</button>
      </div>

      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Family</td>
          <td>Calories</td>
        </tr>

        {fruits &&
          fruits.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.family}</td>
                <td>{item.nutritions.calories}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Remove Item</button>
                </td>
              </tr>
            );
          })}
      </table>
      <div>
        <button onClick={() => removeAll()}>Remove All</button>
      </div>
    </>
  );
}

export default Fruits;
