import React, { useState } from "react";


export default function ContentManager({ onAssetsChange }) {
    const [assets, setAssets] = useState([]);

    const handleFileInput = (event) => {
        const file = event.target.files;
        if (!files) return;

        const newAssets = Array.from(files).map((files) => createAssetFromFile(file));
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
            const filtered = prev.filter((a) => a.id !== assetId);
            if (onAssetsChange) onAssetsChange(filtered);
            return filtered;
        });
    };


