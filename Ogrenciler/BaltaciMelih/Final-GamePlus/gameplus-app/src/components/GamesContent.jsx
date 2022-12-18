import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGames } from "../redux/actions/actions";
import GamesCard from "./GamesCard";

const mapState = (state) => {
  return {
    games: state.games,
  };
};

const mapDispatch = (dispatch) => {
  return {
    actions: {
      getGames: bindActionCreators(getGames, dispatch),
    },
  };
};

const GamesContent = (props) => {
  const firstLetter = props.games.map((game) => game.title[0]);
  const unique = firstLetter.filter((v, i, a) => a.indexOf(v) === i);
  let sortUnique = unique.sort();

  useEffect(() => {
    props.actions.getGames();
  }, []);

  return (
    <div className="games-list-content d-flex flex-column">
      <div>
        <select className="form-select">
          <option value="az">Title A-Z</option>
          <option value="za">Title Z-A</option>
        </select>
      </div>
      {sortUnique.map((letter, index) => {
        return <GamesCard key={index} letter={letter} games={props.games} />;
      })}
    </div>
  );
};

export default connect(mapState, mapDispatch)(GamesContent);
