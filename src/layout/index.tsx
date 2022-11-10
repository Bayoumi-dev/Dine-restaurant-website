import { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollButton from './ScrollButton'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
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
