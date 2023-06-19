import React from 'react'
import WhyUsSection from '../../components/WhyUsHome/WhyUsHome'
import HeroSection from './src/HeroSection/HeroSection'
import ClientsSection from './src/OurClients/OurClients'
import OurClients from './src/OurClients/OurClients'
import AboutSection from './src/About/About'
import FavoritePlaces from '../../components/OurFavPlaces/OurFavPlaces'
import AboutUsSection from './src/MoreAboutUs/MoreAboutUs'

function Home() {
  return (
    <> 
    <HeroSection/>   
    <WhyUsSection/>
    <OurClients/>
    <AboutSection/>
    <FavoritePlaces/>
    <AboutUsSection/>
    </>

  )
}

export default Home