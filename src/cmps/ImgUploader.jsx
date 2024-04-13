import { useState } from 'react'
import { uploadService } from '../services/upload.service'

export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 500,
    width: 500,
  })
  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    console.log('yo yo')
    setIsUploading(true)
    try {
      const { secure_url, height, width } = await uploadService.uploadImg(ev)
      setImgData({ imgUrl: secure_url, width, height })
      setIsUploading(false)
      onUploaded && onUploaded(secure_url)
      console.log('successfully uploaded img')
    } catch (error) {
      console.error('Upload Error:', error) // Log the error for debugging
      setUploadError('Error uploading image. Please try again.') // Set upload error message
    } finally {
      setIsUploading(false) // Ensure uploading state is reset even on error
    }
  }

  function getUploadLabel() {
    if (imgData.imgUrl) return 'Upload Another?'
    return isUploading ? 'Uploading....' : 'Upload Image'
  }

  return (
    <div className="upload-preview">
      {imgData.imgUrl && <img src={imgData.imgUrl} style={{ maxWidth: '200px', float: 'right' }} />}
      {/* <label htmlFor="imgUpload">{getUploadLabel()}</label> */}
      {console.log('ImgUploader in the house')}
      <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
    </div>
  )
}