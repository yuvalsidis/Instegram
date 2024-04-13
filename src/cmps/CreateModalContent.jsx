import { useState } from "react"
import { ImgUploader } from "./ImgUploader"

export function CreateModalContent() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUploaded = (url) => {
    setSelectedImage(url)
    console.log('handleImageUploaded function was called')
  }

  return (
  <div className="create-modal-content" style={{
    backgroundImage: `url(${selectedImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Center the image
  }}>
    <div className="upload-image-container">
      {selectedImage ? null : ( 
        // <div className="upload-preview">
          <div className="dropzone">
            <p style={{ textAlign: 'center' }}>Drag photos and videos here</p>
            <button className="upload-image-btn" onClick={() => document.getElementById('imgUpload').click()}>
              Select from computer
            </button>
            {/* <input type="file" id="imgUpload" accept="image/*" data-text="Drag photos and videos here" onChange={(e) => handleImageUploaded(e.target.files[0])} /> Hidden file input element */}
            <ImgUploader onUploaded={handleImageUploaded} />
          </div>
          
        // </div>
      )}
    </div>
  </div>
  )
}