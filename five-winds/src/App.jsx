// import { useState } from 'react'
import fwLogoLight from '../fivewinds.png';
import fwLogoDark from '../fivewindsDark.png';
import './App.css'
import ContentManager from './components/ContentManager'
import { useState, useEffect } from "react";

function BottomBar() {
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" or "options"

  return (
    <div className="fixed bottom-0 left-0 w-full">
      {/* Tabs (Always Visible) */}
      <div className="flex bg-gray-500 dark:bg-gray-600 px-4">
        <button
          className={`px-4 py-2 rounded-t-md text-white font-semibold transition-all duration-200 ${
            activeTab === "timeline"
              ? "bg-gray-700 dark:bg-gray-800 border-b-2 border-blue-500"
              : "hover:bg-gray-600 dark:hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("timeline")}
        >
          Timeline
        </button>
        <button
          className={`px-4 py-2 rounded-t-md text-white font-semibold transition-all duration-200 ${
            activeTab === "options"
              ? "bg-gray-700 dark:bg-gray-800 border-b-2 border-blue-500"
              : "hover:bg-gray-600 dark:hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("options")}
        >
          Options
        </button>
      </div>

      {/* Content Area (Switches Based on Tab) */}
      <div className="h-80 transition-all duration-300 bg-light-blue dark:bg-dark-red text-white border-t border-gray-500 shadow-lg flex items-center justify-center">
        {activeTab === "timeline" ? (
          <div className="flex gap-4 px-4 overflow-x-auto max-w-screen-lg w-full">
            <p className="text-white">🎬 Drop content here</p>
          </div>
        ) : (
          <div className="flex flex-col items-start p-4">
            <h3 className="text-lg font-bold">⚙️ Options</h3>
            <button className="mt-2 p-2 bg-blue-500 rounded-md text-white">Option 1</button>
            <button className="mt-2 p-2 bg-blue-500 rounded-md text-white">Option 2</button>
          </div>
        )}
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
          
          {/* BottomBar */}
          <BottomBar />
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
