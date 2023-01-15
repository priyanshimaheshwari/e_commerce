import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Grocery from './components/Grocery'





const App = () => {

  const options1=['Men','Women','FootWear','Accessories','Winter wear'];
  const options2=['Audio','Gaming','Powerbank','Laptop','Desktop','Smart Wear','Storage','Accessories','Health Care','personal Care']; 

  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Category options1={options1} 
      Options2={options2} />
           <Routes>
             
             <Route path='/grocery'element={<Grocery/>} />
             </Routes>
             </BrowserRouter>
      
      
      <Hero />
      <Men />
      <Women />
      <Kid />
      <Finaltouch />
      <Electronics />
      <Winter />
      <Beauty />
      <Footer />
      
      
    </div>
  )
}

export default App