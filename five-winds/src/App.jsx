// import { useState } from 'react'
import fwLogo from '../fivewinds.png';
import './App.css'
import ContentManager from './components/ContentManager'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-top h-screen">
        {/* Logo */}
        <img src={fwLogo} className="logo scale-200 hover:scale-175 mb-6" alt="Five Winds Logo" />
        
        {/* ContentManager */}
        <div className="w-full max-w-md">
          <ContentManager />
        </div>
      </div>
    </>

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
