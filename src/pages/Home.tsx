import { FC } from 'react'
import CtaSection from '../components/CtaSection'
import EventsSection from '../components/EventsSection'
import FeaturesSection from '../components/FeaturesSection'
import HeroSection from '../components/HeroSection'
import HighlightSection from '../components/HighlightSection'

const Home: FC = () => {
   return (
      <>
         <HeroSection />
         <FeaturesSection />
         <HighlightSection />
         <EventsSection />
         <CtaSection />
      </>
   )
}

export default Home
