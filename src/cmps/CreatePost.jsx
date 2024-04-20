import { useEffect, useState } from "react"
import { postService } from "../services/post.service.local"
import { CreatePostHeader } from "./CreatePostHeader"
import { CreatePostMain } from "./CreatePostMain"
import { uploadService } from "../services/upload.service"
import { addPost } from "../store/post.actions"
import { store } from "../store/store"
import { POST_CREATED } from "../store/system.reducer"

export function CreatePost({ postStage, setPostStage, setIsCreatePostOpen }) {
    const [newPost, setNewPost] = useState(postService.getEmptyPost())
    const [isPostShareClicked, setIsPostShareClick] = useState(null)
    const [fileInputChange, setFileInputChange] = useState(null)
    const [isImageUploaded, setIsImageUploaded] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)

    useEffect(() => {
        if (isPostShareClicked) {
            onUploadImg()
        }
    }, [isPostShareClicked])

    useEffect(() => {
        if (imgUrl) {
            onSharePost()
        }
    }, [imgUrl])

    async function onUploadImg() {
        if (isImageUploaded === false) {
            try {
                const imageUrl = await uploadService.uploadImg(fileInputChange)
                setImgUrl(imageUrl)
                setIsImageUploaded(true)
                console.log('CreatePost: upload image successfully')
            }
            catch (err) {
                console.log('CreatePost: error occur by upload image')
            }
        }
    }

    async function onSharePost() {
        const sharedPost = { ...newPost, imgUrl: imgUrl.url }
        try {
            const newPost = await addPost(sharedPost)
            console.log('CreatePost: upload post successfully', newPost)
            setIsCreatePostOpen(false)
            store.dispatch({ type: POST_CREATED, })
        }
        catch (err) {
            console.log('CreatePost: error occur by share post')
        }
    }

    console.log('imgUrl in CreatePost', imgUrl)

    console.log('new Post', newPost)
    console.log('fileInputChange', fileInputChange)

    return (
        <div className={`create-post ${postStage === 1 ? 'create-post-layout-one' :
            postStage === 3 ? 'create-post-layout-three' :
                postStage === 4 ? 'create-post-layout-four' :
                    null
            }`}>
            <CreatePostHeader
                postStage={postStage}
                setPostStage={setPostStage}
                setNewPost={setNewPost}
                newPost={newPost}
                setIsPostShareClick={setIsPostShareClick}
            />
            <CreatePostMain
                postStage={postStage}
                setPostStage={setPostStage}
                setNewPost={setNewPost}
                newPost={newPost}
                setFileInputChange={setFileInputChange}
            />
        </div>
    )
}