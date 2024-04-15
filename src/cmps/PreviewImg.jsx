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

    
    return (
    <div className="img-preview">
        <img src={previewImgUrl} style={{ width: '100%' }} />
        
        <div className="rotate-btns">
            {(uploadedImages.length > 1 && currentImageIndex > 0 &&  
                <button className="rotate-left" ref={prevImageButtonRef} onClick={handlePrevImg}>left</button>)}
            {(uploadedImages.length > 1 && uploadedImages.length - 1 > currentImageIndex &&
                <button className="rotate-right" ref={nextImageButtonRef} onClick={handleNextImg}>right</button>)}
        </div>
        
        <button className="upload-more-btn" onClick={onUploadMore}>More photos</button>
        <ImgUploader onUploaded={onUploaded} />
    </div>)
}