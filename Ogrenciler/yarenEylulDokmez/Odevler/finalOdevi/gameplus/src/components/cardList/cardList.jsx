import React from 'react'
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';

export default function cardList() {
  //   const [sort, setSort] = useState("none");
  //   const sortMethods = {
  //   none: { method: (a, b) => null },
  //   ascending: { method: (a, b) => (a > b ? 1 : -1) },
  //   descending: { method: (a, b) => (a > b ? -1 : 1) },
  // };
  return (
    <div>
      <Card/>
    </div>
  )
}
