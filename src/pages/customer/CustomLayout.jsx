import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../../components/Footer'

export const CustomLayout = () => {
  return (
    <>
        <Navbar/>

        <Outlet/>

        <Footer/>
    </>
  )
}
