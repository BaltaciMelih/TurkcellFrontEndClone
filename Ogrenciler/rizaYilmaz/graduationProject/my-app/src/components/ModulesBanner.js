import "../style/bootstrap-override.scss";
import modulesBannerImg from "../img/modules-banner-5-logo.png"
function ModulesBanner(){
    return(
        <>
        <img src={modulesBannerImg} alt="Modules Banner Logo" style={{width:"100%"}}/>
        </>
    );
}
export default ModulesBanner;