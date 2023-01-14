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

const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Hero />
      <Men />
      <Women />
      <Kid />
      <Finaltouch />
      <Electronics />
      <Winter />
    </div>
  )
}

export default App