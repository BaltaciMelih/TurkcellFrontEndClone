import "../style/bootstrap-override.scss";
import arrowdown from "../img/icons-arrow-large.png"
import arrowup from "../img/icon-mask.png";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import GameCard from "./GameCard";
function GamesMenu(){
    
    fetch('http://localhost:3001/data')

    const [genreOpen, setGenreOpen] = useState(false);
    const [stateOpen, setStateOpen] = useState(false);
    return(
        <div className="container">
            <div className="row">
                <div className="col-3 .d-none .d-md-block .d-lg-none">
                    <div className="stateSection">
                    <Button
                        onClick={() => setStateOpen(!stateOpen)}
                        aria-controls="example-collapse-menu-state"
                        aria-expanded={stateOpen}
                        className="bg-transparent border-0"
                    >
                    State {stateOpen===true ? <img src={arrowup} alt="Arrow Up"/> : <img src={arrowdown} alt="Arrow Down"/> } 
                    </Button>
                    <Collapse in={stateOpen}>
                        <div id="example-collapse-menu-state">
                            <Form.Check 
                                type="checkbox"
                                id="available"
                                label="Available"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={stateOpen}>
                        <div id="example-collapse-menu-state">
                            <Form.Check 
                                type="checkbox"
                                id="patching"
                                label="Patching"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={stateOpen}>
                        <div id="example-collapse-menu-state">
                            <Form.Check 
                                type="checkbox"
                                id="maintenance"
                                label="Maintenance"
                            />
                        </div>
                    </Collapse>
                    </div>
                    <div className="genreFiltersSection">
                    <Button
                        onClick={() => setGenreOpen(!genreOpen)}
                        aria-controls="example-collapse-menu-genre"
                        aria-expanded={genreOpen}
                        className="bg-transparent border-0"
                    >
                    Genre Filters {genreOpen===true ? <img src={arrowup} alt="Arrow Up"/> : <img src={arrowdown} alt="Arrow Down"/> } 
                    </Button>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="shooters"
                                label="Shooters"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="action"
                                label="Action"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="rpg"
                                label="RPG"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="racing"
                                label="Racing"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="mobammo"
                                label="MOBA / MMO"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="simulation"
                                label="Simulation"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="strategy"
                                label="Strategy"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="sports"
                                label="Sports"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="kidsfamily"
                                label="Kids / Family"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="casual"
                                label="Casual"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="demo"
                                label="Demo"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="horror"
                                label="Horror"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="platformer"
                                label="Platformen"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="battleroyale"
                                label="Battle Royale"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="adventure"
                                label="Adventure"
                            />
                        </div>
                    </Collapse>
                    <Collapse in={genreOpen}>
                        <div id="example-collapse-menu-genre">
                            <Form.Check 
                                type="checkbox"
                                id="openworld"
                                label="Open World"
                            />
                        </div>
                    </Collapse>
                    </div>
                    
                </div>
                <div className="col-8">
                    
                </div>
            </div>
        </div>
    )
}
export default GamesMenu;
