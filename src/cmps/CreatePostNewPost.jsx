import { Store } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { postService } from "../services/post.service.local"
import { useState } from "react"
import { utilService } from "../services/util.service"

export function CreatePostNewPost({imageUrl}) {
  
  const loggedInUser = useSelector(storeState => storeState.userModule.user)
  const [description, setDescription] = useState(postService.getEmptyPost())
  const newId = utilService.makeId()
  console.log('imgUrl', imageUrl)
  const handleChange = (event) => {

    setDescription({
      ...description, _id: newId, imgUrl: imageUrl, txt: event.target.value, createdAt: new Date(),
      by: { fullName: (loggedInUser.firstname + ' ' + loggedInUser.lastname), imgUrl: loggedInUser.imgUrl, _id: loggedInUser._id, }
    })
    console.log(description)
  }

  return (
    <div className="create-post-new-post">
      <div className="profile-info-container">
        <img className="profilePreviewImg" src={loggedInUser.imgUrl}></img>
        <p>{loggedInUser.username}</p>
      </div>
      <textarea
        className='post-add-description-textarea'
        value={description.txt}
        onChange={handleChange}
        placeholder='Write a caption...'
      />
    </div>
  )
}