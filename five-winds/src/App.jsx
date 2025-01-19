// import { useState } from 'react'
import fwLogoLight from '../fivewinds.png';
import fwLogoDark from '../fivewindsDark.png';
import './App.css'
import ContentManager from './components/ContentManager'
import { useState, useEffect } from "react";

function Timeline() {
  const [items, setItems] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text");
    if (item) {
      setItems([...items, item]);
    }
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div
      className="fixed bottom-0 left-0 w-full h-32 bg-light-blue dark:bg-dark-red text-white flex items-center justify-center border-t border-gray-700 shadow-lg"
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      <div className="flex gap-4 px-4 overflow-x-auto">
        {items.map((item, index) => (
          <div key={index} className="p-2 bg-gray-700 rounded-md shadow">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}


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

    // <>
    //   <div className="flex jusify-center items-center">
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
