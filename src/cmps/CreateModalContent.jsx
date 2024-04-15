import { useState, useRef, useEffect } from "react"
import { ImgUploader } from './ImgUploader'
import { PreviewImg } from "./PreviewImg"

export function CreateModalContent({ handleImageUploaded, uploadedImages }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previewImgUrl, setPreviewImgUrl] = useState(null)
  
  useEffect(() => {
    console.log('Current Index after update:', currentImageIndex)
    console.log('selected image in index use effect:', uploadedImages[currentImageIndex])
    setPreviewImgUrl(uploadedImages[currentImageIndex])
  }, [currentImageIndex])

  useEffect(() => {
    console.log('current image after update:', uploadedImages[currentImageIndex])
    if (currentImageIndex) setCurrentImageIndex(currIndex => currIndex + 1)
    else setPreviewImgUrl(uploadedImages[0])
  }, [uploadedImages])

  useEffect(() => {
    console.log('previewImgUrl:', previewImgUrl)
  }, [previewImgUrl])

  const triggerUpload = () => {
    document.getElementById('imgUpload').click()
  }


  return (
  <div className="create-modal-content" >
    <div className="upload-image-container">
      {uploadedImages.length ? <PreviewImg uploadedImages={uploadedImages}
                                           currentImageIndex={currentImageIndex}
                                           setCurrentImageIndex={setCurrentImageIndex}
                                           previewImgUrl={previewImgUrl} 
                                           onUploadMore={triggerUpload}
                                           onUploaded={handleImageUploaded} /> : (
          <>
            <div className="image-dropzone">
              <p style={{ textAlign: 'center' }}>Drag photos and videos here</p>
              <button className="upload-image-btn" onClick={triggerUpload}>
              Select from computer
              </button>
              <ImgUploader onUploaded={handleImageUploaded} />

            </div>
          </>
      )}
    </div>
  </div>
  )
}