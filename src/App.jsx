import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import HackerRoom from './components/HackerRoom'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App