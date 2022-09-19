import "./burgerBtn.scss"
import {Component} from "react";

class BurgerBtn extends Component {
    render() {
        return (
            <div className={"btn_burger"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}


export default BurgerBtn;