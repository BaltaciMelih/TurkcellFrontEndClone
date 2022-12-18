import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGames, filterCategory } from "../redux/actions/actions";

const mapState = (state) => {
  return {
    games: state.games,
  };
};

const mapDispatch = (dispatch) => {
  return {
    actions: {
      filterCategory: bindActionCreators(filterCategory, dispatch),
      getGames: bindActionCreators(getGames, dispatch),
    },
  };
};

const GamesCategory = (props) => {
  const handleChange = (e, category) => {
    let filteredCategory = props.games.filter((game) =>
      game.genres.includes(category)
    );
    if (e.target.checked) {
      props.actions.filterCategory(filteredCategory);
    } else {
      props.actions.getGames();
    }
  };
  return (
    <div className="aside-category">
      <h2 className="bg-black text-white">Browse Games</h2>
      <div className="aside-category-content bg-secondary ">
        <button
          className="filter-button"
          data-bs-toggle="collapse"
          data-bs-target="#category-content"
        >
          Filter
        </button>
        <div className="collapse show" id="category-content">
          <div className="state">
            <button
              className="category-filter"
              data-bs-toggle="collapse"
              data-bs-target="#state-content"
            >
              State
            </button>
            <div className="state-content collapse show" id="state-content">
              <div className="category-group">
                <input type="checkbox" id="available" />
                <label htmlFor="available">Available</label>
              </div>
              <div className="category-group">
                <input type="checkbox" id="patching" />
                <label htmlFor="patching">Patching</label>
              </div>
              <div className="category-group">
                <input type="checkbox" id="maintenance" />
                <label htmlFor="maintenance">Maintenance</label>
              </div>
            </div>
          </div>
          <div className="state">
            <button
              className="category-filter"
              data-bs-toggle="collapse"
              data-bs-target="#genre-content"
            >
              Genre Filters
            </button>
            <div className="genre-content collapse show" id="genre-content">
              <div className="category-group">
                <input
                  type="checkbox"
                  id="shooters"
                  onChange={(e) =>
                    handleChange(
                      e,
                      "Kahramanın gözünden oynanan ateş etme oyunu"
                    )
                  }
                />
                <label htmlFor="shooters">Shooters</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="action"
                  onChange={(e) => handleChange(e, "Aksiyon")}
                />
                <label htmlFor="action">Action</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="rpg"
                  onChange={(e) => handleChange(e, "Canlandırma")}
                />
                <label htmlFor="rpg">RPG</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="racing"
                  onChange={(e) => handleChange(e, "Yarış")}
                />
                <label htmlFor="racing">Racing</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="moba/mmo"
                  onChange={(e) =>
                    handleChange(e, "Devasa Çok Oyunculu Çevrimiçi")
                  }
                />
                <label htmlFor="moba/mmo">MOBA / MMO</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="simulation"
                  onChange={(e) => handleChange(e, "Simülasyon")}
                />
                <label htmlFor="simulation">Simulation</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="strategy"
                  onChange={(e) => handleChange(e, "Strateji")}
                />
                <label htmlFor="strategy">Strategy</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="sports"
                  onChange={(e) => handleChange(e, "Spor")}
                />
                <label htmlFor="sports">Sports</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="kids/family"
                  onChange={(e) => handleChange(e, "Aile Dostu")}
                />
                <label htmlFor="kids/family">Kids / Family</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="casual"
                  onChange={(e) => handleChange(e, "Basit Eğlence")}
                />
                <label htmlFor="casual">Casual</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="demo"
                  onChange={(e) => handleChange(e, "Demo")}
                />
                <label htmlFor="demo">Demo</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="horror"
                  onChange={(e) => handleChange(e, "Oynaması Ücretsiz")}
                />
                <label htmlFor="horror">Horror</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="platformer"
                  onChange={(e) => handleChange(e, "Platform")}
                />
                <label htmlFor="platformer">Platformer</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="battleroyale"
                  onChange={(e) =>
                    handleChange(e, "Çok Oyunculu Çevrimiçi Çarpışma Arenası")
                  }
                />
                <label htmlFor="battleroyale">Battleroyale</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="adventure"
                  onChange={(e) => handleChange(e, "Macera")}
                />
                <label htmlFor="adventure">Adventure</label>
              </div>
              <div className="category-group">
                <input
                  type="checkbox"
                  id="openworld"
                  onChange={(e) => handleChange(e, "Bağımsız")}
                />
                <label htmlFor="openworld">Openworld</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(GamesCategory);
