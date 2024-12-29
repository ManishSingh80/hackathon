import React from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Stats from './Stats'
import Accreditation from './Accreditation'
import AppPromo from './AppPromo'
import Footer from './Footer'
import YogicPathSection from './YogicPathSection'
import InstructorsSection from './InstructorSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
import DownloadSection from './DownloadSection'

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <Welcome />
      <Stats />
      <YogicPathSection/>
      <Accreditation />
      <InstructorsSection/>
      <AppPromo />
      <TestimonialsSection />
      <PricingSection />
      <DownloadSection/>
      <Footer />
    </div>
  )
}

export default HomePage

