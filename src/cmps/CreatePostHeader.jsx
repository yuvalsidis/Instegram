
export function CreatePostHeader({ postStage, setPostStage,setNewPost, newPost, setIsPostShareClick}) {

    function handleClickOnNext(){
        setPostStage(4)
    }
    
    function handleClickOnShare(){
        setIsPostShareClick(true)
    }
    
    function handleClickOnPrevious(){
        setPostStage(postStage--)
    }

    return (
        <div className="create-post-header">
            {postStage === 1 ?
                <>
                    <p>Create New Post</p>
                </>
                :
                <>
                </>
            }
            {postStage === 3 ?
                <>
                    <div className="previous-icon previous-icon-container" onClick={handleClickOnPrevious}>
                        <img src='/public/icons/PreviousBig.svg' alt='Previous Big Icon'></img>
                    </div>
                    <p className="create-post-header-title">Edit</p>
                    <button className="create-post-header-btns" onClick={handleClickOnNext}>Next</button>
                </>
                :
                <>
                </>
            }
              {postStage === 4 ?
                <>
                    <div className="previous-icon-container" onClick={handleClickOnPrevious}>
                        <img className="previous-icon" src='/public/icons/PreviousBig.svg' alt='Previous Big Icon'></img>
                    </div>
                    <p className="create-post-header-title">Create new post</p>
                    <button className="create-post-header-btns" onClick={handleClickOnShare}>Share</button>
                </>
                :
                <>
                </>
            }
        </div>
    )
}