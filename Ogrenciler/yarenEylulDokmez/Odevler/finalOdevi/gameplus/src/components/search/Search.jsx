import React, {useState,useEffect} from 'react'
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../pics/combined-shape.png'

export default function Search(props) {
  const [data, setData] = useState('');
  const handleChange=(e)=>{
    setData(document.getElementById("searced").value)
  }
  // console.log(data)
  useEffect(() => {
    props.setSearch(data);
  });
  return (
    <div className="search">
        <h1 className="searchH1">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="searchP">With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
        <div className="searchbar">
        <img src={logo} alt="searchLogo" />
        <input className="w-100" type="text" id="searced" placeholder="Search Games" onChange={handleChange}/></div>
    </div>
  )
}
