import "../style/bootstrap-override.scss";
import bgImg from "../img/bgimg.png";
import searchImage from "../img/search-menu.png"
function GamesInput(){
    return(
        <div className="gamesInput" style={{backgroundImage:`url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-8 py-5 mx-auto">
                        <p className="fs-1 fw-bold text-eighth text-center">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="fs-5 text-eighth text-center">With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
                        <div className="input-group mb-3">
                            <button className="btn btn-eighth rounded-0" type="button" id="searchGame"><img src={searchImage} alt=""/></button>
                            <input type="text" className="form-control rounded-0" placeholder="Search" aria-describedby="searchGame"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GamesInput;