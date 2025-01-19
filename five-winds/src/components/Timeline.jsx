import React, { useState } from "react";
import ContentManager from './ContentManager'
function Timeline() {
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" or "options"

  return (
    <div className="fixed bottom-0 left-0 w-full">
      {/* Tabs (Always Visible) */}
      <div className="flex bg-gray-500 dark:bg-gray-600 px-4">
        <button
          className={`px-4 py-2 rounded-t-md font-semibold transition-all duration-200 ${
            activeTab === "timeline"
              ? "bg-gray-700 dark:bg-gray-800 border-blue dark:border-red"
              : "hover:bg-gray-600 dark:hover:bg-gray-700 hover:border-blue dark:hover:border-red"
          }`}
          onClick={() => setActiveTab("timeline")}
        >
          Timeline
        </button>
        <button
          className={`px-4 py-2 rounded-t-md font-semibold transition-all duration-200 ${
            activeTab === "options"
              ? "bg-gray-700 dark:bg-gray-800 border-blue dark:border-red"
              : "hover:bg-gray-600 dark:hover:bg-gray-700 hover:border-blue dark:hover:border-red"
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

export default Timeline
