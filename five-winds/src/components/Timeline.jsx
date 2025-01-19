import { useState } from 'react';

function Timeline() {
  const [items, setItems] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text");
    if (item) {
      alert(`Dropped:`);
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
