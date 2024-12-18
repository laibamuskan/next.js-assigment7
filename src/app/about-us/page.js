import React from 'react'
import HeroSection from '../components/about/heroSection/page'
import Content from '../components/about/content/page'
import ServicesCard from '../components/about/serviceCard/page'
import FeaturedWorkCard from '../components/about/featuredWorkCard/page'
import DataCard from '../components/about/dataCard/page'
import Testimonial from '../components/about/testimonial/page'
import Navbar from '../components/common/navbar/page'
import Footer from '../components/common/footer/page'

const AboutUS = () => {
  return (
    <div>
      <Navbar />
      <HeroSection isAboutUs={true} heading="Cool Comfort Solutions" subHeading="Expert AC solutions, simplified." description="Providing reliable AC services to keep your home cool and comfortable." />
      <Content />
      <ServicesCard />
      <FeaturedWorkCard />
      <DataCard />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default AboutUS