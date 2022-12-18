import "../style/bootstrap-override.scss";
import ChooseGameCard from "./ChooseGameCard";
import Title from "./Title";
import Button from "./Button";
import game1 from "../img/game-1.png";
import game2 from "../img/game-2.png";
import game3 from "../img/game-3.png";
import game4 from "../img/game-4.png";
import game5 from "../img/game-5.png";
import game6 from "../img/game-6.png";
import game7 from "../img/game-7.png";
import game8 from "../img/game-8.png";
import game9 from "../img/game-9.png";
import game10 from "../img/game-10.png";
import game11 from "../img/game-11.png";
import game12 from "../img/game-12.png";
function ChooseGame(){
    return(
        <div className="chooseGame bg-secondary">
            <div className="container pt-5 pb-5">
                <div className="row pt-3">
                    <Title content="Choose the game you want to play" color="primary"/>
                </div>
                <div className="row pt-3">
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game1}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game2}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game3}/> 
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game4}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game5}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game6}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game7}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game8}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game9}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game10}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game11}/>
                    </div>
                    <div className="col-6 col-md-2">
                        <ChooseGameCard gameImg={game12}/>
                    </div>
                </div>
                
                   <div className="text-center mt-1">
                        <Button content="See All Games"/>
                   </div> 
                        
                    
            </div>
        </div>
    );
}
export default ChooseGame;