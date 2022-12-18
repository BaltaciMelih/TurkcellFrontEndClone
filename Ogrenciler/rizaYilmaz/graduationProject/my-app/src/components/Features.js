import "../style/bootstrap-override.scss";
import icon1 from "../img/icon-feature-1.png";
import icon2 from "../img/icon-feature-2.png";
import icon3 from "../img/icon-feature-3.png";
import icon4 from "../img/icon-feature-4.png";
function Features(){
    return(
        <div className="features bg-sixth position-absolute top-110 start-50 translate-middle shadow">
            <div className="container">
                <div className="row py-5 justify-content-center">
                    <div className="d-flex justify-content-between">
                    <div className="col-4 py-4">
                        <h1 className="text-eighth fs-3 fw-bold ">Features</h1>
                        <p className="text-eighth mt-2 fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-4 py-4">
                        <ul className="list-unstyled">
                            <li className="text-eighth mb-1"><img src={icon1} alt="Feature Icon 1"/> Lorem ipsum dolor sit amet</li>
                            <li className="text-eighth mt-5"><img src={icon2} alt="Feature Icon 1"/> Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <div className="col-4 py-4">
                        <ul className="list-unstyled">
                            <li className="text-eighth mb-1"><img src={icon3} alt="Feature Icon 1"/> Lorem ipsum dolor sit amet</li>
                            <li className="text-eighth mt-5"><img src={icon4} alt="Feature Icon 1"/> Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Features;