import React from 'react'
import Category from './components/Category'
import Electronics from './components/Electronics'
import Hero from './components/Hero'
import Kid from './components/Kid'
import Men from './components/Men'
import Navbar from './components/Navbar'
import Finaltouch from './components/Finaltouch'
import Women from './components/Women'
import Winter from './components/Winter'
import Beauty from './components/Beauty'
import Footer from './components/Footer'
import Dropdown from './components/Dropdown'


const App = () => {

  const options1=['Men','Women','FootWear','Accessories','Winter wear'];
  const options2=['Audio','Gaming','Powerbank','Laptop','Desktop','Smart Wear','Storage','Accessories','Health Care','personal Care']; 

  return (
    <div>
      <Navbar />
      <Category options1={options1} 
      options2={options2} />
      <Hero />
      <Men />
      <Women />
      <Kid />
      <Finaltouch />
      <Electronics />
      <Winter />
      <Beauty />
      <Footer />
      <Dropdown />
      
    </div>
  )
}

export default App