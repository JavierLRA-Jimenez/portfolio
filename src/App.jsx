import React from 'react'
import Animated from './Components/Animated'
import Intro from '..//src/Components/Intro'
import Portfolio from '..//src/Components/Portfolio'
import Timeline from './Components/Timeline'
import Technologies from './Components/Technologies'
import Contact from './Components/Contact'

function App() {

  return (
    <div className='App'>
      <Animated/>
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Technologies/>
      <Contact/>
    </div>
  )
}

export default App
