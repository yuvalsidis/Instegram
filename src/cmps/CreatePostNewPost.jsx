import { Store } from "@mui/icons-material"
import { useSelector } from "react-redux"
 
export function CreatePostNewPost(){
  const loggedInUser = useSelector(storeState => storeState.userModule.user)

    return (
      <div className="create-post-new-post"> 
            <div className="profile-info-container">
              <img src={loggedInUser.imgUrl}></img>
            </div>
      </div>
    )
}