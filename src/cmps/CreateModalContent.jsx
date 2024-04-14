import { useState, useRef, useEffect } from "react"

export function CreateModalContent({ ImgUploader, handleImageUploaded, uploadedImages }) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // const [selectedImage, setSelectedImage] = useState(null)
  // const [currentImageIndex, setCurrentImageIndex] = useState(uploadedImages.length > 0 ? 0 : -1)
  const nextImageButtonRef = useRef(null)
  const prevImageButtonRef = useRef(null)

  useEffect(() => {
    console.log('Current Index after update:', currentImageIndex)
    console.log('selected image in index use effect:', uploadedImages[currentImageIndex])
  }, [currentImageIndex])

  useEffect(() => {
    console.log('current image after update:', uploadedImages[currentImageIndex])
  }, [uploadedImages])

  const handleNextImg = () => {
    setCurrentImageIndex(currIndex => currIndex + 1)
  }

  const handlePrevImg = () => {
    setCurrentImageIndex(currIndex => currIndex - 1)
  }


  return (
  <div className="create-modal-content" >
    <div className="upload-image-container">
      {uploadedImages.length ? <img src={uploadedImages[currentImageIndex]} style={{ width: '100%' }} /> : ( 
        // <div className="upload-preview">
          <>
            <div className="image-dropzone">
              <div className="direction-btns">
                {(uploadedImages.length > 1 && uploadedImages.length - 1 > currentImageIndex) &&
                  <button ref={nextImageButtonRef} onClick={handleNextImg}>right</button>
                }
                {!uploadedImages.length && 
                  <p style={{ textAlign: 'center' }}>Drag photos and videos here</p>
                }
                {(uploadedImages.length > 1 && currentImageIndex > 0) &&  
                <button ref={prevImageButtonRef} onClick={handlePrevImg}>left</button>
                }
              </div>
              <button className="upload-image-btn" onClick={() => document.getElementById('imgUpload').click()}>
              Select from computer
              </button>
            <ImgUploader onUploaded={handleImageUploaded} style={{ backgroundSize: '300px' }} />
            </div>
          </>
      )}
    </div>
  </div>
  )
}