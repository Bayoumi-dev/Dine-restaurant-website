import { FC } from 'react'
import CtaSection from '../components/CtaSection'
import EventsSection from '../components/eventslist/EventsSection'
import FeaturesSection from '../components/features/FeaturesSection'
import HeroSection from '../components/HeroSection'
import HighlightSection from '../components/highlights/HighlightSection'

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
