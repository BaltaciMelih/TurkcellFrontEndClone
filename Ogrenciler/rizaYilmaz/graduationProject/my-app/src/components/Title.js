import "../style/bootstrap-override.scss";
function Title(props){
    return(
        
        <p className={`text-${props.color} fs-2 fw-bold text-center`}>{props.content}</p>
    )
}
export default Title;