import React, { useEffect } from "react";
import { MobileMenu } from "../containers/MobileMenu";
import { Hero } from "../containers/Hero";
import AboutUs from "../containers/AboutUs";
import { Memberships } from "../containers/Memberships";
import { OurCoin  } from "../containers/OurCoin";
import { NewsPreview } from "../containers/NewsPreview";
import { CoinPrice } from "../containers/CoinPrice";

function Home(){

    return (
            <div className='home'>
                <MobileMenu/>
                <Hero />
                <CoinPrice/>
                <AboutUs />
                <Memberships/>
                <OurCoin/>
                <NewsPreview/>
            </div>
        )
}
export default Home 