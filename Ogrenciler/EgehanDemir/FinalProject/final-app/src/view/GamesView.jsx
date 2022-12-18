import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../sass/_games.scss'
import ClickBox from '../components/ClickBox/ClickboxComponent'
import Card from '../components/Cards/Cards'
import FilterComponent from '../components/filterInput/FilterComponent'
import { getGames, getFilter, selectGames, selectGroupedGames, selectFilteredGames } from '../redux/Games'

const Games = () => {
  const dispatch = useDispatch();
  let gourupedGames = useSelector(selectGroupedGames);

  useEffect(() => {
    dispatch(getGames())
  }, []);

  return (
    <React.Fragment>
      <section>
        <div className="container-fluid" id='searchSection'>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center">
              <h2>Oynamak istediğin oyunu bul. İstediğin yerde oynamaya başla!</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center">
              <p>GeForce NOW'ın sürekli yeni oyunlarla güncellenen kütüphanesindeki yüzlerce oyun arasından istediğine tek tıkla erişebilirsin. Unutma GeForce NOW birçok dijital oyun mağazasıyla entegre olarak çalışır. Bu mağazalardaki kütüphanende bulunan oyunları rahatça oynayabilirsin!</p>
            </div>
          </div>
          <FilterComponent />
        </div>
      </section>
      <div className="container-fluid" id='filterAndGameList'>
        <div className="row">
          <div className="col-12 col-sm-2 col-md-2" id='filterColumn'>
            <div className="dropDownDiv" id='web'>
              <div className="row">
                <div className="col-12 col-sm-12">
                  <h4 id='header'>State</h4>
                </div>
              </div>
              <ClickBox buttonClickName="Available" />
              <ClickBox buttonClickName="Patching" />
              <ClickBox buttonClickName="Maintance" />
              <div className="col-12 col-sm-12">
                <h4 id='header'>Genre Filters</h4>
              </div>
              <ClickBox buttonClickName="Shooters" />
              <ClickBox buttonClickName="Action" />
              <ClickBox buttonClickName="RPG" />
              <ClickBox buttonClickName="Racing" />
              <ClickBox buttonClickName="MOBA/MMO" />
              <ClickBox buttonClickName="Simulation" />
              <ClickBox buttonClickName="Strategy" />
              <ClickBox buttonClickName="Sports" />
              <ClickBox buttonClickName="Kids/Family" />
              <ClickBox buttonClickName="Casual" />
              <ClickBox buttonClickName="Demo" />
              <ClickBox buttonClickName="Horroe" />
              <ClickBox buttonClickName="Platformer" />
              <ClickBox buttonClickName="Battle Royale" />
              <ClickBox buttonClickName="Open World" />
            </div>
            <div className="dropDownDivMobile" id='mobile'>
              <div className="row">
                <div className="col-12 col-sm-12">
                  <h4 id='header'>State</h4>
                </div>
                <hr />
              </div>
              <ClickBox buttonClickName="Available" />
              <ClickBox buttonClickName="Patching" />
              <ClickBox buttonClickName="Maintance" />
              <div className="col-12 col-sm-12 mt-5">
                <h4 id='header'>Genre Filters</h4>
              </div>
              <hr />
              <ClickBox buttonClickName="Shooters" />
              <ClickBox buttonClickName="Action" />
              <ClickBox buttonClickName="RPG" />
              <ClickBox buttonClickName="Racing" />
              <ClickBox buttonClickName="MOBA/MMO" />
              <ClickBox buttonClickName="Simulation" />
              <ClickBox buttonClickName="Strategy" />
              <ClickBox buttonClickName="Sports" />
              <ClickBox buttonClickName="Kids/Family" />
              <ClickBox buttonClickName="Casual" />
              <ClickBox buttonClickName="Demo" />
              <ClickBox buttonClickName="Horroe" />
              <ClickBox buttonClickName="Platformer" />
              <ClickBox buttonClickName="Battle Royale" />
              <ClickBox buttonClickName="Open World" />
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-10 d-flex align-items-end flex-column mt-5 me-auto ms-auto" id='gamesColumn'>
            {    
              gourupedGames.map(game => {
                return <Card title={game.firstletter} elements={game.elements}></Card>
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};
export default Games;