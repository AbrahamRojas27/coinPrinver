import React from "react";
import { HeroImg } from "../components/hero/HeroImg";
import { HeroInfo } from "../components/hero/HeroInfo";


function Hero(){
    return(
        <section className="hero">
            <HeroImg/>
            <HeroInfo/>
        </section>
    )
}

export default Hero 