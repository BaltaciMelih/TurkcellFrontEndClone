import { useEffect, useState } from 'react';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardComp() {
  const [allData, setAllData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/games")
    .then((res)=> res.json())
    .then((data)=> setAllData(data))
  },[]);
  console.log( allData)
  return (
    <div className="cardBox">
    </div>
  )
}
