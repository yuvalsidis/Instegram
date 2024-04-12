import { ImgUploader } from "./ImgUploader"

export function CreateModalContent() {
  return <div className="create-modal-content">
    <div className="upload-image-container">
        <div className="dropzone">
        <ImgUploader />
     {/* <p>Drag photos and videos here</p> */}
     {/* <button className="upload-image-btn">Select from computer</button> */}
        </div>
    </div>
    {/* <button onClick={onClose}>Close Modal button</button> */}
  </div>
  
}