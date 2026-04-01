import { Suspense, useState } from 'react'
import Banner from './assets/component/Navbar/Banner/Banner'
import Navbar from './assets/component/Navbar/Navbar'
import Stats from './assets/component/Navbar/Stats/Stats'
import Steps from './assets/component/Navbar/Steps/Steps'
import Pricing from './assets/component/Pricing/Pricing'
import CallToAction from './assets/component/CallToAction/CallToAction'
import Footer from './assets/component/Footer/Footer'
import ProductSection from './assets/component/ProductSection/ProductSection'
import { DiVim } from 'react-icons/di'

const fetchProduct = async () => {
  const res =  await fetch("/data.json");
  return res.json();
}

function App() {

  const productPromise = fetchProduct();
  console.log(productPromise);
  const [selectedType, setSelectedType] = useState("product");
  const [carts, setCarts] = useState([]);
  

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense fallback={<div className='flex justify-center items-center h-64'>
        <span className="loading loading-spinner loading-xl "></span>
      </div>}>
        <ProductSection productPromise={productPromise} selectedType={selectedType} setSelectedType={setSelectedType} carts={carts} setCarts={setCarts}></ProductSection>
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  )
}

export default App
