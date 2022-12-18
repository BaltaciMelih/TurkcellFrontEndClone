import React from 'react'
import './games.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Search from '../../components/search/Search';
import Sort from '../../components/sort/sort';
import Filter from '../../components/filter/filter';
import CardList from '../../components/cardList/cardList';
import { useEffect,useState } from 'react';


export default function Games() {
  const [allData, setAllData]=useState([]);
  const [option, setOption]= useState("");
  const [search, setSearch]= useState("");
  console.log(option);
  console.log(search);
 
  useEffect(()=>{
    fetch("http://localhost:3001/games")
    .then((res)=> res.json())
    .then((data)=> setAllData(data))
  },[]);

  return (
    <div>
        <Header/>
        <Search setSearch={setSearch}/>
        <div className="gameBody">
          <div className="gameTop">
            <h3 className="col-md-10 col-12">Browse Games</h3>
            <Sort/>
          </div>
          <div className="gameBottom">
            <Filter setOption={setOption}/>
            <CardList/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
