import React, { Component } from "react";
import GameCard from "./GameCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gameActions from "../../redux/actions/gameActions";

class GameList extends Component {
  componentDidMount() { //componentler yüklendikten sonra oyunları çeker
    this.props.actions.getGames();
  }

  render() { //games'i gameCard componentine gönderir ve oyunların ekrana yazdırılmasını sağlar
    return (
      <div>
        <GameCard gamelist={this.props.games} /> 
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
