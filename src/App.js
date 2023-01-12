import React from 'react'
import Category from './components/Category'
import Electronics from './components/Electronics'
import Hero from './components/Hero'
import Kid from './components/Kid'
import Men from './components/Men'
import Navbar from './components/Navbar'
import Shoe from './components/Shoe'
import Women from './components/Women'

const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Hero />
      <Men />
      <Women />
      <Kid />
      <Shoe />
      <Electronics />
    </div>
  )
}

export default App