import React, { useState } from 'react';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageSelect} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
};

export default UploadImage;