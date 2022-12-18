import "../style/bootstrap-override.scss";
function ChooseGameCard({gameImg}){
    return(
        <div class="card mb-3 rounded-0 border-0" style={{width: "18rem;"}}>
            <img src={gameImg} class="card-img-top rounded-0" alt=""/>
        </div>
    );
}
export default ChooseGameCard;