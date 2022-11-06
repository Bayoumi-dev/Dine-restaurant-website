import { FC } from 'react'
import Layout from './layout'
import Booking from './pages/Booking'
import Home from './pages/Home'

const App: FC = () => {
   return (
      <Layout>
         <Home/>
         {/* <Booking /> */}
      </Layout>
   )
}
export default App
