import React, {Component} from 'react'
import { Link } from "react-router-dom";

import "./nav.scss"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        let pages = [
            {
                "id" : 0,
                "label" : "Accueil",
                "link"  : "/"
            },
            {
                "id" : 1,
                "label" : "Services",
                "link"  : "/services"
            },
            {
                "id" : 2,
                "label" : "Devis",
                "link"  : "/devis"
            },
            {
                "id" : 3,
                "label" : "Contact",
                "link"  : "/contact"
            }
        ]
        this.pages = pages.map((page, index) =>
            <li key={page["id"]}><Link onClick={this.props.linkClicked} to={page["link"]} >0{index + 1} - {page["label"]}</Link></li>
        );
    }

    render() {
        return(
            <div className={"nav_content container"}>
                <nav>
                    <ul>
                        {this.pages}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;