import React, { useState, useRef } from "react";

/**
    * @param {Object} props
    * @param {(assets: any[]) => void}

    */
export default function ContentManager({ onAssetsChange }) {
    const [assets, setAssets] = useState([]); //initialize local state variable with empty array

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

      const newAssets = Array.from(files).map((files) => createAssetFromFile(files));
        updateAssets(newAssets);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (!files) return;

        const newAssets = Array.from(files).map((files) => createAssetFromFile(files));
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

  return (
      <div className="p-4 space-y-4">
       {/* Hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*, video/mp4"
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
          text-2xl font-bold text-gray-600 
          rounded cursor-pointer
          transition-all duration-300
        "
      >
        +
      </div>
      {/* Preview Gallery */}
      <div className="relative w-48 h-48 bg-white">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-white shadow p-2 rounded">
            <p className="font-semibold text-sm truncate">{asset.name}</p>

            {asset.type.startsWith("video") ? (
              <video
                src={asset.url}
                className="mt-2 w-full h-32 object-cover"
                controls
                muted
              />
            ) : (
              <img
                src={asset.url}
                alt={asset.name}
                className="mt-2 w-full h-32 object-cover"
              />
            )};

{/* Hover Overlay */}
<div
  className="
    absolute inset-0 
    bg-black bg-opacity-50 
    opacity-0 hover:opacity-100 
    flex items-center justify-center
    transition-opacity
  "
>
  <button
    onClick={() => {
      if (window.confirm("Are you sure you want to remove this?")) {
        removeAsset(asset.id);
      }
    }}
    className="bg-red-500 text-white px-4 py-2 rounded text-base hover:bg-red-600"
  >
    Remove
  </button>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}
