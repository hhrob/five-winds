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
    <div className="p-4">

      {/* Hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*,video/mp4"
        ref={fileInputRef}
        onChange={handleFileInput}
        className="hidden"
      />

      {/* 
        Container: 
        - "flex" to place items side by side
        - "flex-nowrap" so they don't wrap to a new line (they will horizontally scroll if overflow)
        OR 
        - "flex-wrap" if you want them to go to the next line when running out of space
      */}
      <div className="flex flex-wrap gap-4 items-start">

        {/* Plus button (first item in the row) */}
        <div
          onClick={openFileDialog}
          className="
            w-12 h-12 flex items-center justify-center 
            bg-blue-200 hover:bg-blue-300
            text-2xl font-bold text-gray-700 
            rounded cursor-pointer
            transition-all duration-300
          "
        >
          +
        </div>

        {/* Map over assets to display each as a separate item */}
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="relative w-48 h-48 bg-white shadow rounded overflow-hidden"
          >
            {asset.type.startsWith("video") ? (
              <video
                src={asset.url}
                className="w-full h-full object-cover"
                controls
                muted
              />
            ) : (
              <img
                src={asset.url}
                alt={asset.name}
                className="w-full h-full object-cover"
              />
            )}

            {/* Hover overlay for remove button */}
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
                  if (window.confirm(`Remove ${asset.name}?`)) {
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

