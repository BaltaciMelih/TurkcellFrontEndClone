import React from 'react'
import { NavLink } from 'react-router-dom';
import './Cards.scss'


const Cards = ({ title, elements }) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="row g-0">
                            <div className="card-body">
                                <div className="gamesContent">
                                <h5 className="card-title">
                                    <NavLink className="link-dark text-decoration-none" to="" target="_blank">{title}</NavLink>
                                </h5>
                                {elements.map(el => {
                                    return <p>{el.title}</p>
                                })}
                                <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cards;