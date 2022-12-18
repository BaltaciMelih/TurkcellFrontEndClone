import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterGames, getGames } from "../redux/actions/actions";

const mapState = (state) => {
  return {
    games: state.games,
  };
};

const mapDispatch = (dispatch) => {
  return {
    actions: {
      filterGames: bindActionCreators(filterGames, dispatch),
      getGames: bindActionCreators(getGames, dispatch),
    },
  };
};

const GamesFilter = (props) => {
  const handleChange = (input) => {
    let filteredData = props.games.filter((game) =>
      game.title.toLowerCase().includes(input)
    );
    if (input === "") {
      props.actions.getGames();
    } else {
      props.actions.filterGames(filteredData);
    }
  };

  return (
    <div className="search">
      <img className="w-100" src="/assets/games-filter.png" alt="" />
      <div className="search-content">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p className="my-3">
          With the Cloud Gaming, you can join, play, and share games online with
          anyone in the world. Play any game on any device!
        </p>
        <div className="search-content-result input-group">
          <span className="input-group-text bg-white">
            <img src="/assets/combined-shape.png" alt="" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => handleChange(e.target.value.trim().toLowerCase())}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(GamesFilter);
