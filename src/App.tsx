import { FC } from 'react'
import Layout from './layout'
import Booking from './pages/Booking'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: 'booking',
            element: <Booking />,
         },
      ],
   },
])

const App: FC = () => <RouterProvider router={router} />
export default App
 