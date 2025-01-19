// import { useState } from 'react'
import fwLogoLight from '../fivewinds.png';
import fwLogoDark from '../fivewindsDark.png';
import './App.css'
import ContentManager from './components/ContentManager'
import Timeline from './components/Timeline'
import { useState, useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0)


  return (
    <div>
      <div className="flex flex-col items-center justify-top h-screen">
        {/* Logo */}
        <img
        src={fwLogoLight}
        className="logo transform scale-175 hover:scale-200 dark:hidden"
        alt="Five Winds Logo"
        />
        <img
        src={fwLogoDark}
        className="logo transform scale-175 transition-all duration-300 hover:scale-200 mb-6 hidden dark:block"
        alt="Five Winds Logo"
        />

        {/* ContentManager */}
        <div className="w-full max-w-md mt-20 absolute left-0">
          <ContentManager />
        </div>
          
          {/* Timeline */}
          <Timeline />
      </div>
    </div>
  )
}

export default App
