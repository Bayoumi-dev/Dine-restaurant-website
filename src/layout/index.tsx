import Header from './Header'
import Footer from './Footer'
import { FC } from 'react'
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
   return (
      <>
         <Header />
         <main><Outlet /></main>
         <Footer />
      </>
   )
}

export default Layout
