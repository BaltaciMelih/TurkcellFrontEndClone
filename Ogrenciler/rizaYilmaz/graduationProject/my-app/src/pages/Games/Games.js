import React from 'react'
import "../../style/bootstrap-override.scss";
import Menu from "../../components/Menu";
import GamesMenu from '../../components/GamesMenu';
import GamesInput from '../../components/GamesInput';
function Games() {
  return (
    <div>
      <Menu button={true}/>
      <GamesInput/>
      <GamesMenu/>
    </div>
  )
}

export default Games;