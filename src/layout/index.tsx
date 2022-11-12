import { FC, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollButton from './ScrollButton'
import { Outlet, useLocation } from 'react-router-dom'
import animation from '../helpers/animation'

const Layout: FC = () => {
   let { pathname } = useLocation()
   useEffect(() => animation(), [pathname])

   return (
      <>
         <Header />
         <main>
            <Outlet />
            <ScrollButton />
         </main>
         <Footer />
      </>
   )
}

export default Layout
