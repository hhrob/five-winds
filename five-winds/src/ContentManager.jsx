import React, { useState } from 'react';

const ContentManager = () => {
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const newImages = [];
        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
        }
        setImages([...images, ...newImages]);
    };

    return (
        <>
        <div>
            <h1>Image Upload and Display</h1>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`uploaded ${index}`} style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '10px' }} />
                ))}
            </div>
        </div>
        </>
    );
};

export default ContentManager;
