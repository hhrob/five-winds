import React, { useState } from "react";

/**
    * @param {Object} props
    * @param {(assets: any[]) => void}

    */
export default function ContentManager({ onAssetsChange }) {
    const [assets, setAssets] = useState([]); //initialize local state variable with empty array

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

    return (
    <div className="p-4">
        {/* File Input */}
        <div className="flex flex-col items-start space-y-2">
        <label className="font-semibold">Upload Files</label>
        <input
            type="file"
            multiple
            accept="image/*, video/mp4"
            onChange={handleFileInput}
            className="cursor-pointer border p-2"
        />
        </div>

        {/* Drag & Drop Area */}
        <div
        className="mt-4 border-2 border-dashed border-gray-400 h-24 flex items-center justify-center text-gray-600"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        >
        Drag & Drop Files Here
        </div>

        {/* Preview Gallery */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {assets.map((asset) => (
            <div key={asset.id} className="bg-white shadow p-2 rounded">
            <p className="font-semibold text-sm truncate">{asset.name}</p>

            {asset.type.startsWith("video") ? (
                <video src={asset.url} className="mt-2 w-full h-32 object-cover" controls muted />
            ) : (
                <img src={asset.url} alt={asset.name} className="mt-2 w-full h-32 object-cover" />
            )}

            <p className="text-xs mt-1">
                {(asset.size / (1024 * 1024)).toFixed(2)} MB
            </p>

            <button
                onClick={() => removeAsset(asset.id)}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
            >
                Remove
            </button>
            </div>
        ))}
        </div>
    </div>
    );
    }
