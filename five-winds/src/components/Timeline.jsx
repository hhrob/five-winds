import React, { useState } from "react";
import ContentManager from './ContentManager'
function Timeline() {
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" or "options"

  return (
    <div className="fixed bottom-0 left-0 w-full">
      {/* Tabs (Always Visible) */}
      <div className="px-4 flex">
        <button
          className={`px-4 py-2 rounded-t-md font-semibold transition-all duration-200 ${
            activeTab === "timeline"
              ? " border-blue dark:border-red"
              : " hover:border-blue dark:hover:border-red"
          }`}
          onClick={() => setActiveTab("timeline")}
        >
          Timeline
        </button>
        <button
          className={`px-4 py-2 rounded-t-md font-semibold transition-all duration-200 ${
            activeTab === "options"
              ? " border-blue dark:border-red"
              : " hover:border-blue dark:hover:border-red"
          }`}
          onClick={() => setActiveTab("options")}
        >
          Options
        </button>
      </div>

      {/* Content Area (Switches Based on Tab) */}
      <div className="h-80 transition-all duration-300 bg-light-blue dark:bg-dark-red border-t shadow-lg flex items-center justify-center">
        {activeTab === "timeline" ? (
          <div className="flex gap-4 px-4 overflow-x-auto max-w-screen-lg w-full">
            <p>🎬 Drop content here</p>
          </div>
        ) : (
          <div className="flex flex-col items-start p-4">
            <h3 className="text-lg font-bold">⚙️ Options</h3>
            <button className="mt-2 p-2 bg-light-blue dark:bg-dark-red dark:hover:bg-red hover:bg-blue hover:shadow-lg transition-all duration-300 rounded-md">Option 1</button>
            <button className="mt-2 p-2 bg-light-blue dark:bg-dark-red dark:hover:bg-red hover:bg-blue hover:shadow-lg transition-all duration-300 rounded-md">Option 2</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline
