// import { useState } from 'react'
import fwLogoLight from '../fivewinds.png';
import fwLogoDark from '../fivewindsDark.png';
import './App.css'
import ContentManager from './components/ContentManager'
import Timeline from './components/Timeline'
import { useState, useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling on cleanup
      document.body.style.overflow = '';
    };
  }, []);


  return (
    <div>
      <div className="flex flex-col items-center justify-top h-screen">
        {/* Logo */}
        <img
        src={fwLogoLight}
        className="logo scale-175 hover:scale-200 mb-6 dark:hidden"
        alt="Five Winds Logo"
        />
        <img
        src={fwLogoDark}
        className="logo scale-175 hover:scale-200 mb-6 hidden dark:block"
        alt="Five Winds Logo"
        />

        {/* ContentManager */}
        <div className="w-full max-w-md">
          <ContentManager />
        </div>
          
          {/* Timeline */}
          <Timeline />
      </div>
    </div>
  )
}

export default App
