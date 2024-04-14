import React, { useState } from 'react';
import { ImgUploader } from './ImgUploader';
import { CreateModalHeader } from './CreateModalHeader';
import { CreateModalContent } from './CreateModalContent';

export function CreatePostModal() {
  const [uploadedImages, setUploadedImages] = useState([])

  const handleImageUploaded = (url) => {
    setUploadedImages([...uploadedImages, url])
    console.log('handleImageUploaded function was called')
    // return <ImgUploader />
  }


  return (
      <div className="create-modal-container" >
        
          <CreateModalHeader uploadedImages={uploadedImages} />
          <CreateModalContent ImgUploader={ImgUploader}
                              handleImageUploaded={handleImageUploaded}
                              uploadedImages={uploadedImages} /> 
         
      </div>
  )
}

