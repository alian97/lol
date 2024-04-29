import React from 'react'
import Home from './page/Home'
import Navbar from './components/Navbar'
import About from './page/About'
import Blog from './page/Blog'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
    </div>
  )
}

export default App