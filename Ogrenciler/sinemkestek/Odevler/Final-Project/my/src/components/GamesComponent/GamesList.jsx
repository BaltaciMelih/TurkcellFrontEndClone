import Polygon from "../../assets/images/polygon.svg";
import "./GameList.scss";
const GamesList = ({ letter, games }) => {
  return (
    <div className="game-list  px-4 ">
      <div className="polygon mb-4 mt-3 pt-2">
        <img src={Polygon} alt="" />
        <span className="letter">{letter}</span>
      </div>
      <div className="games ">
        <div className="row">
          {games.map((game) => {
            if (game.title.substring(0, 1).toUpperCase() === letter) {
              return <p className="col-6">{game.title}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default GamesList;
