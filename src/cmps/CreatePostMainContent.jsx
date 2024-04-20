import { useState, useRef } from "react"


export function  CreatePostMainContent({ postStage, setPostStage, filterStyles,  imageUrl, setImageUrl, setFileInputChange }) {
    const fileInputRef = useRef(null)
 
    function handleFileInputChange(event) {
        const fileInputChange = event.target.files[0]
        if (fileInputChange) {
            const imgUrl = URL.createObjectURL(fileInputChange)
            setImageUrl(imgUrl)
            setFileInputChange(fileInputChange)
        }
        setPostStage(3)
    }

    function handleClickOnSelectFromComputer() {
        fileInputRef.current.click()
    }

    return (
        <div className={`create-post-main-content ${
            postStage === 3 ? 'create-post-main-content-three' :
            postStage === 4 ?  'create-post-main-content-four'
            : null
        }`}>
            {imageUrl ?
                <>
                    <img yl src={imageUrl} style={filterStyles} alt="couldnt fetch img"></img>
                </>
                :
                <>
                    <div>
                        <img className="create-post-icon" src="/public/icons/CreatePost.svg" alt="Create Post Icon" />
                    </div>
                    <div className="drag-photos-p">
                        <p>Drag photos and videos here</p>
                    </div>
                    <div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileInputChange}
                            style={{ display: "none" }}
                        />
                        <button className="select-from-computer-btn" onClick={handleClickOnSelectFromComputer}>Select from computer</button>
                    </div>
                </>
            }
        </div>
    )
}