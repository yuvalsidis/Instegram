import { useState, useRef } from 'react'
import { uploadService } from '../services/upload.service'


export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 500,
    width: 500,
  })
  const [isUploading, setIsUploading] = useState(false)
  const imgUploaderRef = useRef(null)

  async function uploadImg(ev) {
    console.log('yo yo')
    setIsUploading(true)
    try {
      const { secure_url, height, width } = await uploadService.uploadImg(ev)
      
      setImgData({ imgUrl: secure_url, width, height })
      onUploaded && onUploaded(secure_url)
      setIsUploading(false)
      
      
    } catch (error) {
      console.error('Upload Error:', error) // Log the error for debugging
      setUploadError('Error uploading image. Please try again.') // Set upload error message
    } finally {
      setIsUploading(false) // Ensure uploading state is reset even on error
    }
    console.log('successfully uploaded img')
  }

  function getUploadLabel() {
    return isUploading ? 'Uploading...' : ''
  }


  return (
    <div className="upload-preview">
      {console.log('ImgUploader in the house')}
      <label htmlFor="imgUpload">{getUploadLabel()}</label>
      {/* {!imgData.imgUrl && <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />} */}
      <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
    </div>
  )
}