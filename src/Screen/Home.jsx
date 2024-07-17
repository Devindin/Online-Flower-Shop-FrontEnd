import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import ShopSection from '../Components/ShopSection'
import GradientBackground from '../Components/GradientBackground'
import ServicesSection from '../Components/ServiceSection'
import Footer from '../Components/Footer'
import ImageGallery from '../Components/ImageGallery'
import AboutSection from '../Components/AboutSection'
import ReviewSection from '../Components/ReviewSection'

function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <GradientBackground/>
      <ImageGallery/>
      <ShopSection/>
      <ServicesSection/>
      <AboutSection/>
      <ReviewSection/>
      <Footer/>
    </div>
  )
}

export default Home
