import React, { useEffect } from "react";
import { MobileMenu } from "../containers/MobileMenu";
import { Hero } from "../containers/Hero";
import AboutUs from "../containers/AboutUs";
import { Memberships } from "../containers/Memberships";
import { OurCoin  } from "../containers/OurCoin";
import { NewsPreview } from "../containers/NewsPreview";
import { CoinPrice } from "../containers/CoinPrice";
import { useSelector } from "react-redux";

function Home(){
    const user = useSelector((state) => state.user)
    console.log(user)
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