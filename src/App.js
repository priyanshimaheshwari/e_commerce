import React from 'react'
import Category from './components/Category'
import Electronics from './components/Electronics'
import Hero from './components/Hero'
import Kid from './components/Kid'
import Men from './components/Men'
import Navbar from './components/Navbar'
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
      <Electronics />
    </div>
  )
}

export default App