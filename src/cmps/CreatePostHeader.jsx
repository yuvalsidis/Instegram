
export function CreatePostHeader({ postStage }) {
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
                    <div className="previous-icon-container">
                        <img src='/public/icons/PreviousBig.svg' alt='Previous Big Icon'></img>
                    </div>
                    <p className="create-post-header-title">Edit</p>
                    <button className="create-post-header-btns">Next</button>
                </>
                :
                <>
                </>
            }
        </div>
    )
}