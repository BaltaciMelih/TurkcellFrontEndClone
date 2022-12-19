import React from 'react'
import "./GamesPage.css"
import Navbar from '../01navbar/Nav'
import Footer from '../06footer/Footer'
import GameApi from "../../dbjson/db.json"
import { useState, useEffect } from 'react'
import Gamesbanner from "../../assets/img/gamespage/gamesbanner.png"





const GamesPage = () => {
    const [searchTerm, setSearchTherm] = useState("")
    console.log(GameApi.data);
    const [games, setGames] = useState([])
    const [catagory,setCatagory] = useState([])
    useEffect(() => {

        setGames([...GameApi.data])
        GameApi.data.map((dt) => {
            setCatagory((prev)=>[...prev, ...dt.genres])
        } )
        
    }, []);
    function filter(e){
        setSearchTherm(e.target.value)
    }
    console.log("games", games)
console.log("catagory", catagory);
        const uniqueCatagory = [...new Set(catagory)]




    return (
        <div className='GamesPage'>
            <Navbar />
           
          
            <div className="container-fluid gamesbanner m-0 p-0 justify-content-center">
           <div className='allsearch text-white'>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, explicabo autem necessitatibus iusto tempore doloremque?</p>
            <div className='search-container'>
            <input className='search' type="text" placeholder='Search Games'
            onChange={filter}
            />

            <div className="dataContainer justify-content-center">
            {
                games
                .filter((name)=>{
                    if(searchTerm==""){
                        return name;
                    }else if(name.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return name
                    }
                }).map((game, index)=>{
                    
                    return <p className='text-dark' key={index}>{game.title}</p>
                })
            }
        </div>
        </div>
        </div>
        </div>
        


            <div className="container-fluid  bg-dark">
                <div className="row justify-content-around">
                    <div className="col-4 bg-dark searchbar text-white">
                        {
                            uniqueCatagory.map((item, index) => (
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault" key={index}>
                                        {item}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-6">
                        <div className="container bg-dark text-white">

                            <div className="row">
                                {
                                    GameApi.data.map((item, index) => (
                                        <ul className='col-6' key={index}>
                                            <li> {item.title} </li>
                                        </ul>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            <Footer />
        </div>
    )
}

export default GamesPage