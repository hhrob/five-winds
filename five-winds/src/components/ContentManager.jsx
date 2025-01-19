import React, { useState, useRef } from "react";

/**
 * @param {Object} props
 * @param {(assets: any[]) => void}
 */
export default function ContentManager({ onAssetsChange }) {
  const [assets, setAssets] = useState([]); //initialize local state variable with empty array
  const [timelineAssets, setTimelineAssets] = useState([]); // For assets in the timeline
  const fileInputRef = useRef(null);

  function createAssetFromFile(file) {
    return {
      id: crypto.randomUUID(),
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
      size: file.size,
    };
  }

  const handleFileInput = (event) => {
    const files = event.target.files;
    if (!files) return;

    const newAssets = Array.from(files).map((file) => createAssetFromFile(file));
    updateAssets(newAssets);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (!files) return;

    const newAssets = Array.from(files).map((file) => createAssetFromFile(file));
    updateAssets(newAssets);
  };

  const handleDragOver = (e) => e.preventDefault();

  function updateAssets(newAssets) {
    setAssets((prev) => {
      const updated = [...prev, ...newAssets];
      if (onAssetsChange) onAssetsChange(updated);
      return updated;
    });
  }

  const removeAsset = (assetId) => {
    setAssets((prev) => {
      const assetToRemove = prev.find((a) => a.id === assetId);

      if (assetToRemove) {
        URL.revokeObjectURL(assetToRemove.url);
      }

      const filtered = prev.filter((a) => a.id !== assetId);

      if (onAssetsChange) onAssetsChange(filtered);

      return filtered;
    });
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Add asset to timeline on drop
  const handleTimelineDrop = (e) => {
    e.preventDefault();
    const assetId = e.dataTransfer.getData("assetId");
    const asset = assets.find((a) => a.id === assetId);
    if (asset && !timelineAssets.find((a) => a.id === assetId)) {
      setTimelineAssets((prev) => [...prev, asset]);
    }
  };

  return (
    <div className="p-4 pl-10">

      {/* Hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*,video/mp4"
        ref={fileInputRef}
        onChange={handleFileInput}
        style={{ display: "none" }} // Hide the input
      />
      {/* Plus Box (button or div) */}
      <div
        onClick={openFileDialog}
        className="
          w-12 h-12 flex items-center justify-center
          bg-light-blue hover:bg-blue
          dark:hover:bg-red dark:bg-dark-red
          text-2xl font-bold
          rounded cursor-pointer
          transition-all duration-300
        "
      >
        +
      </div>

      {/* Preview Gallery */}
      <div className="flex flex-wrap gap-4 w-screen pt-4 pb-128">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="dark:bg-gray-900 shadow-lg dark:shadow-none p-2 rounded w-32"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("assetId", asset.id)} // Set asset ID on drag start
          >
            <p className="font-semibold text-sm truncate">{asset.name}</p>

            {asset.type.startsWith("video") ? (
              <video
                src={asset.url}
                className="w-32 h-32 object-cover"
                controls
                muted
              />
            ) : (
              <img
                src={asset.url}
                alt={asset.name}
                className="w-32 h-32 object-cover"
              />
            )}

            <div className="mt-2 text-center">
              <button
                onClick={(e) => {
                  
                }}
                className="bg-light-blue hover:bg-blue dark:bg-dark-red dark:hover:bg-red transition-colors duration-300 px-4 py-2 rounded text-base hover:bg-red-600"
              >
                Add to Timeline
              </button>
            {/* Hover overlay for remove button */}
            <div className="mt-2 text-center">
              <button
                onClick={(e) => {
                  if (e.ctrlKey || window.confirm(`Remove ${asset.name}?`)) {
                    removeAsset(asset.id);
                  }
                }}
                className="bg-light-blue hover:bg-blue dark:bg-dark-red dark:hover:bg-red transition-colors duration-300 px-4 py-2 rounded text-base hover:bg-red-600"
              >
                Remove
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
