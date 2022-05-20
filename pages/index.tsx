import type { NextPage } from 'next'
import Navbar from '../screens/sections/nav';
import Hero from '../screens/sections/hero'
import Footer from '../screens/sections/footer';

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>

  )
}

export default Home
