import { useState } from 'react'
import Banner from './assets/component/Navbar/Banner/Banner'
import Navbar from './assets/component/Navbar/Navbar'
import Stats from './assets/component/Navbar/Stats/Stats'
import Steps from './assets/component/Navbar/Steps/Steps'
import Pricing from './assets/component/Pricing/Pricing'
import CallToAction from './assets/component/CallToAction/CallToAction'
import Footer from './assets/component/Footer/Footer'
import ProductSection from './assets/component/ProductSection/ProductSection'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <ProductSection></ProductSection>
      <Steps></Steps>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  )
}

export default App
