import { useState, useRef } from "react"

export function CreatePostMainContent() {
    const fileInputRef = useRef(null)
    let fileInputChange = null

    function handleFileInputChange(event){
         fileInputChange = event.target.files[0]
         console.log(fileInputChange)     
    }

    function handleClickOnSelectFromComputer(){
        fileInputRef.current.click()
    }

    return (
        <div className="create-post-main-content">
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
                style={{display: "none"}}
                />
                <button className="select-from-computer-btn" onClick={handleClickOnSelectFromComputer}>Select from computer</button>
            </div>
        </div>
    )
}