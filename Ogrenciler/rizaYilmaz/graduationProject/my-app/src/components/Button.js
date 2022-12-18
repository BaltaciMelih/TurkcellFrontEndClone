import "../style/bootstrap-override.scss";
function Button(props){
    return(
        <button type="submit" style={{minWidth:"185px"}} className="btn btn-primary btn-lg text-eighth rounded-0">{props.content}</button>
    )
}
export default Button;