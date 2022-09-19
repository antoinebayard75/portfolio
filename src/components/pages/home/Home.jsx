import "./home.scss";
import Button from '../../cta/button/Button';
import React, {useRef, useEffect} from "react";

import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Home() {
    const trigger = useRef(null);
    useEffect(() => {
        ScrollTrigger.batch(".trigger", {
            start: "top 75%",
            toggleActions: "restart pause resume pause",
            onEnter: batch => gsap.to(batch, {
                x: 0,
                opacity: 1,
                stagger: 0.4,
                ease: Power2.easeInOut,
            }),
        });

    }, []);
    return (
        <main>
            <section className={"hero_section"}   style={{
                //backgroundImage: `url('${process.env.PUBLIC_URL}/images/test.png')`
            }}>
                <div className="container">
                    <h1 ref={trigger} className={"trigger"}>OFFRE DE SERVICES D'ACCOMPAGNEMENT WEB, CRÉATION D'APPLICATIONS OU DE SITES WEBS SUR MESURE</h1>
                    <Button link={"/"} label={"Contactez-moi"}></Button>
                </div>
            </section>
            <section className="presentation_section">
                <div className="contact_me container">
                    <div className="contact_me_box">
                            <div className="after"></div>
                            <div className="before"></div>
                        <div className="contact_me_box_content">
                            <h1>Un projet ?</h1>
                            <a href={"mailto:antoinebayard.pro@gmail.com"}>antoinebayard.pro@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p ref={trigger} className={"trigger"}>01 - À propos : Je suis développeur informatique, je propose mes services pour les petites et moyennes entreprises. Mon but est d'allier mes connaissances afin d'établir avec mes clients des solutions à certains problèmes (visibilité en ligne, sites web, application intra-net pour entreprise, etc).</p>
                </div>
            </section>
        </main>

    );
}




export default Home;