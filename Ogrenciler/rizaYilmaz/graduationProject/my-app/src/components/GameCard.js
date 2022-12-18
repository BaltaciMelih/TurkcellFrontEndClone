import polygon from "../img/polygon.png";
function GameCard(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={polygon} className="" alt="..."/>
                            <div className="card-body">
                                <p className="card-text"></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameCard;