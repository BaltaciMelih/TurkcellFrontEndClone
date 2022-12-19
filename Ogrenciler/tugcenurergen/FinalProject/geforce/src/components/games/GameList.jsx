import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gameActions from "../../redux/actions/gameActions";
import { Row, Col } from "react-bootstrap";
import polygon from "../../assets/polygon.svg";
import ReactDOM from "react-dom";
import "./GameList.css";

class GameList extends Component {
  componentDidMount() { //componentler yüklendikten sonra oyunları çeker
    this.props.actions.getGames();
  }
  
  alphabet =[];
 
  render() { //games'i gameCard componentine gönderir ve oyunların ekrana yazdırılmasını sağlar
    return (
      <div className="mt-2">
        {this.props.games.map((game) => {
          this.alphabet.push(game.title[0]);
        })}
        <div className="d-none">
          {this.props.order === "az"
            ? (this.alphabet = [...new Set(this.alphabet.sort())])
            : (this.alphabet = [...new Set(this.alphabet.sort().reverse())])}
        </div>
        {this.alphabet.map((letter, index) => (
          <div className="cont bg-primary m-auto mb-5 p-4 pt-3 ps-1">
            <Row className="w-100 m-auto" key={index}>
              <Col className="p-4 ps-4 polygon-col ">
                <img src={polygon} alt="polygon" className="polygon" />
                <span className="polygon-letter">{letter}</span>
              </Col>
            </Row>
            <Row className="w-100 m-auto ">
              {this.props.games.map((game, index) => {
                if (game.title[0] === letter) {
                  return (
                    <Col
                      key={index}
                      className="col-12 col-md-6  ps-4  text-light ">
                      {game.title}
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        ))}
        <div className="d-none">{(this.alphabet = [])}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {  //reduxdaki stateleri componentin propsuna dönüştürür
  return {
    currentCategory: state.changeCategoryReducer,
    games: state.gameListReducer,  //oyunların olduğu array
  };
}

function mapDispatchToProps(dispatch) {  //reduxdaki  actionları componentte kullanmayı sağlar
  return {
    actions: {
      getGames: bindActionCreators(gameActions.getGames, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList); //redux ile bağlantı
