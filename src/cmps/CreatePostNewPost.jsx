import { Store } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { postService } from "../services/post.service.local"
import { useState } from "react"

export function CreatePostNewPost(){
  const loggedInUser = useSelector(storeState => storeState.userModule.user)
  const [caption, setCaption] = useState(postService.getEmptyPost())

    return (
      <div className="create-post-new-post"> 
            <div className="profile-info-container">
              <img className="profilePreviewImg" src={loggedInUser.imgUrl}></img>
              <p>{loggedInUser.username}</p>
            </div>
            <div>
                    
            </div>
      </div>
    )
}