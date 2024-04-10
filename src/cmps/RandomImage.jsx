import React, { useState, useEffect } from 'react';
import { CloudinaryContext, createUploadWidget } from '@cloudinary/react';
import storageService from '/src/services/async-storage.service.js'; 

export const RandomImage = () => {
  const [imageIds, setImageIds] = useState([]); // Store uploaded image IDs
  const [imageUrl, setImageUrl] = useState(null); // Store random image URL for display
  const [isLoading, setIsLoading] = useState(false); // Optional state for loading indicator during image fetch

  // Function to handle image upload using Cloudinary's upload widget
  const handleImageUpload = async () => {
    setIsLoading(true); // Set loading indicator (optional)
    const uploadWidget = createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      publicApiApiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
      publicApiSecret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
    //   folder: 'your_folder_name', // Optional folder for organization
    });

    uploadWidget.open((error, result) => {
      setIsLoading(false); // Clear loading indicator (optional)
      if (error) console.error('Error uploading image:', error);
      if (result && result.info) {
        const uploadedImageId = result.info.public_id;
        setImageIds([...imageIds, uploadedImageId]);
        storeRandomImageIds(imageIds); // Call storage function with updated array
      }
    });
  };

  // Function to store uploaded image IDs in local storage
  const storeRandomImageIds = async (updatedImageIds) => {
    try {
      await storageService.post('randomImageIds', JSON.stringify(updatedImageIds));
    } catch (error) {
      console.error('Error storing random image IDs:', error);
    }
  };

  // Fetch random image ID and update display on component mount
  useEffect(() => {
    const fetchRandomImageId = async () => {
      try {
        const storedImageIds = await storageService.get('randomImageIds');
        if (storedImageIds) {
          const imageIds = JSON.parse(storedImageIds);
          setImageIds(imageIds); // Update state with all stored IDs
          const randomIndex = Math.floor(Math.random() * imageIds.length);
          const randomImageId = imageIds[randomIndex];
          setImageUrl(randomImageId);
        } else {
          console.warn('No random image IDs found in local storage.');
        }
      } catch (error) {
        console.error('Error fetching random image ID:', error);
      }
    };
    fetchRandomImageId();
  }, []);

  return (
    <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
      {isLoading && <p>Uploading image...</p>} {/* Optional loading indicator */}
      <button onClick={handleImageUpload}>Upload Random Image</button>
      {imageUrl && <Image publicId={imageUrl} width="300" height="200" />}
    </CloudinaryContext>
  );
};
