import React, { Suspense, lazy } from "react";
const OurCoin = lazy(() => import("../containers/OurCoin"))
const NewsPreview = lazy(()=> import("../containers/NewsPreview"))
const CoinPrice = lazy(() => import("../containers/CoinPrice"))
const Memberships = lazy(() => import("../containers/Memberships"))
const AboutUs = lazy(() => import("../containers/AboutUs"))
const Hero = lazy(() => import("../containers/Hero"))
const MobileMenu = lazy(() => import("../containers/MobileMenu")) ;

function Home(){
    return (
            <div className='home'>
                <Suspense fallback={null}>
                    <MobileMenu/>
                    <Hero />
                    <CoinPrice/>
                    <AboutUs />
                    <Memberships/>
                    <OurCoin/>
                    <NewsPreview/>
                </Suspense>
            </div>
        )
}
export default Home 

// <CoinPrice/>
 