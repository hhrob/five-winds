import React, { useState } from "react";


export default function ContentManager({ onAssetsChange }) {
    const [assets, setAssets] = useState([]);

    const handleFileInput = (event) => {
        const file = event.target.files;
        if (!files) return;
