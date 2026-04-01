import { Suspense, useState } from 'react'
import Banner from './assets/component/Navbar/Banner/Banner'
import Navbar from './assets/component/Navbar/Navbar'
import Stats from './assets/component/Navbar/Stats/Stats'
import Steps from './assets/component/Navbar/Steps/Steps'
import Pricing from './assets/component/Pricing/Pricing'
import CallToAction from './assets/component/CallToAction/CallToAction'
import Footer from './assets/component/Footer/Footer'
import ProductSection from './assets/component/ProductSection/ProductSection'

const fetchProduct = async () => {
  const res =  await fetch("/data.json");
  return res.json();
}

function App() {

  const productPromise = fetchProduct();
  console.log(productPromise);
  
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <ProductSection productPromise={productPromise}></ProductSection>
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  )
}

export default App
