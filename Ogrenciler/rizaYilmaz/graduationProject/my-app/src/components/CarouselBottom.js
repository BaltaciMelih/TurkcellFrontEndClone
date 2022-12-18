import "../style/bootstrap-override.scss";
import joystick from "../img/joystick.png"
function CarouselBottom(){
    return(
        <div className="carouselBottom bg-sixth">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="row">
                    
                
                <div className="col-1 ">
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                </div>
                <div className="col-8 ">
                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <img src={joystick} className="" alt="..."/>
                        </div>
                        
                    </div> 
                </div>
                <div className="col-1">
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
export default CarouselBottom;