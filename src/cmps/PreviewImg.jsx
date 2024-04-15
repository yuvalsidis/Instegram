import { useRef } from "react"
import { ImgUploader } from "./ImgUploader"

export function PreviewImg({ uploadedImages, previewImgUrl, onUploadMore, onUploaded, currentImageIndex, setCurrentImageIndex }) {
    const nextImageButtonRef = useRef(null)
    const prevImageButtonRef = useRef(null)

    const handleNextImg = () => {
        setCurrentImageIndex(currIndex => currIndex + 1)
        // setPreviewImgUrl(uploadedImages[currentImageIndex])
    }
    
    const handlePrevImg = () => {
        setCurrentImageIndex(currIndex => currIndex - 1)
    }

    
    return (<>
        {(uploadedImages.length > 1 && uploadedImages.length - 1 > currentImageIndex &&
            <button ref={nextImageButtonRef} onClick={handleNextImg}>right</button>)}
        
        <img src={previewImgUrl} style={{ width: '100%' }} />
        <button className="upload-more-btn" onClick={onUploadMore}>More photos</button>
        {/* <button className="upload-image-btn" onClick={() => document.getElementById('imgUpload').click()}>
              More photos
              </button> */}
        <ImgUploader onUploaded={onUploaded} />
        {(uploadedImages.length > 1 && currentImageIndex > 0 &&  
            <button ref={prevImageButtonRef} onClick={handlePrevImg}>left</button>)}
        
        </>)
}