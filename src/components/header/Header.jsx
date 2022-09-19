import "./header.scss";
import BurgerBtn from "./burgerBtn/BurgerBtn";
import Nav from "./nav/Nav"
import Logo from "./logoWebsite/Logo"
import React, {Component, Fragment} from 'react'
import gsap, {Power2} from 'gsap'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.tl = gsap.timeline({paused: true});
        window.addEventListener('scroll', this.listenScroll)
    }
    toggleClass = () => {

        this.setState(({ open }) => ({ open: !open }))
        this.animNav();

    }
    animNav = () => {

        this.tl.to('.nav_container', {
            xPercent: -100,
            opacity: 1,
            duration: 0.2,
            backgroundColor: "#0FFF95",
            ease: Power2.easeInOut,
        })
        this.tl.to('nav', {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: Power2.easeInOut,
        })
        this.tl.to('nav li', {
            x: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.2,
            ease: Power2.easeInOut,
        }, .5)
        this.state.open ? this.tl.reverse(0.7) : this.tl.play();
    }
    giveClass = () => {
        let result = this.state.open ? "open" : "close";
        return result
    }
    listenScroll = () =>{


        if(window.scrollY >= 75){
            gsap.to("header", {y: -100, duration: .7})
            if(this.state.open) {
                this.toggleClass()
            }
        }else{
            gsap.to("header", {y: 0, duration: .7})
        }

    }
    render() {
        return(
            <Fragment>
                <header onScroll={this.handleScroll} className={"container " + this.giveClass()}>
                    <a href="/" className={"link_home"}><Logo></Logo></a>
                    <div onClick={this.toggleClass} className={"burger_btn_container"}>
                        <BurgerBtn></BurgerBtn>
                    </div>
                </header>
                <div className={"nav_container " + this.giveClass()}>
                    <Nav linkClicked = {this.toggleClass}></Nav>
                </div>
            </Fragment>
        )
    }
}


export default Header;