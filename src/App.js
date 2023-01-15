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
<<<<<<< HEAD
import Grocery from './components/Grocery'

=======
import Dropdown from './components/Dropdown'
>>>>>>> d157a0a825d1a990052fa3460356892f411e21ac


const App = () => {

  const options1=['Men','Women','FootWear','Accessories','Winter wear'];
  const options2=['Audio','Gaming','Powerbank','Laptop','Desktop','Smart Wear','Storage','Accessories','Health Care','personal Care']; 

  return (
    <div>
      <Navbar />
      <Category options1={options1} 
      Options2={options2} />
      <Hero />
      <Men />
      <Women />
      <Kid />
      <Finaltouch />
      <Electronics />
      <Winter />
      <Beauty />
      <Footer />
<<<<<<< HEAD
      <Grocery />
=======
      <Dropdown />
>>>>>>> d157a0a825d1a990052fa3460356892f411e21ac
      
    </div>
  )
}

export default App