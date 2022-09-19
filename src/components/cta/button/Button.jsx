import "./button.scss"
import { Link } from "react-router-dom";


function Button(props) {
    return (
        <Link className={"custom_button"} to={props.link}>
            <span>{props.label}</span>
            <div className="effect"></div>
        </Link>
    );
}




export default Button;