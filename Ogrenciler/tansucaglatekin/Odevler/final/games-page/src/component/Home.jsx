import React, {useEffect, useState} from 'react';


const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data")
        .then(response => response.json())
        .then(response => setMovies(response));
    }, []);

    return (
        <div className="hero">
            <div className="search-card">
                <img src="https://gameplus.com.tr/static/media/foot-banner.46c1fc4c.png" alt="bg-game"/>
                <div className="card-1">
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
                    <div className="search-bar p-1">
                        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/A66690CB-EE5E-42C1-8E82-87DBAE4A8486.svg"/>
                        <input className="search" type="text" />
                    </div>
                </div>
            </div>
            <div className="container card-2">
                <h5 className="mt-5 text-white"> Browse Games</h5>
                <div className="row mt-5">
                    <div className="col-sm-3 bg-secondary p-3 filter-list">
                        <h6>State</h6>
                        <ul>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Available</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Patching</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Maintenance</label>
                            </li>
                        </ul>
                        <h6 className='mt-5'>Genre Filters</h6>
                        <ul>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Shooters</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Action</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">RPG</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Racing</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">MOBA/MMO</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Simulation</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Strategy</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Sports</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Kids/Family</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Casual</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Demo</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Horror</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Platformer</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Battle Royale</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Adventure</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Open World</label>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-sm-7 ms-auto me-auto bg-secondary p-3">
                        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/6E265F85-28D3-45A0-9275-9619B406BE7A.svg"/>
                        {movies
                        .sort((a,b) => a.title.charAt(0) > b.title.charAt(0) ? 1 : -1)
                        .map(movie => {
                            return (
                                <li key={movie.id}>{movie.title}</li>
                            )
                        })}
                    </div>
                </div>
            </div>


            {/* <div className="card text-bg-dark">
                <img src="https://gameplus.com.tr/static/media/foot-banner.46c1fc4c.png" className="card-img"/>
                <div className="card-img-overlay">
                    <h1 className="card-title">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className="card-text">With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/A66690CB-EE5E-42C1-8E82-87DBAE4A8486.svg"/></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
            </div> */}

            {/* <div className="bg-dark">
                <div className="container">
                    <h3>Browse Games</h3>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Oyun Türü</h3>
                            <ul>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" className="checkbox-input" name="Bulmaca" value= "Bulmaca"/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-8"></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;