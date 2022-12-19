import React, {useState, useEffect} from 'react'
import './GamesBanner.scss';
import searchicon from '../../assets/icons/searchicon.svg';


const GamesBanner = () => {

    const [games, setGames] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/data")
          .then((response) => response.json())
          .then((data) => {
            setGames(data);
          });
      }, []);

    

  return (
    <div className='games-banner'>
        <div className='container py-md-5'>
            <div className="row">
                <div className="col-sm-8 text-white text-center mx-auto py-5">
                    <h1 className='mb-4'>Oynamak istediğin oyunu bul. İstediğin yerde oynamaya başla!</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non sapiente aut vero neque dolor.</p>
                   <div className='form-container'>
                        <div className='d-flex bg-white form'>
                            <label htmlFor="search"><img src={searchicon} alt="" /></label>
                            <input type="text" id='search' placeholder='Search Games' className='w-100' 
                            onChange={(e) => setSearch(e.target.value)}
                            />
                            
                            <div className='games-filter bg-white text-black text-start'>
                            {
                                  games.filter((val) => {
                                    return search.toLowerCase() === '' ? val : val.title.toLowerCase().includes(search.toLowerCase())
                                  }).map((game,index) => (
                                    <a href={game.steamUrl} target='_blank' key={index}><p className='ms-5' >{game.title}</p></a>
                                ))
                            }

                        </div>
                        </div>
                       
                   </div>
                </div>
            </div>
  
            
        </div>
    </div>
  )
}

export default GamesBanner