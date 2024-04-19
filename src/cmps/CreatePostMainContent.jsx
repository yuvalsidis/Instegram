import { useState, useRef } from "react"


export function CreatePostMainContent({ postStage, setPostStage, filterStyles,  imageUrl, setImageUrl }) {
    const fileInputRef = useRef(null)

    let fileInputChange = null

    console.log('filterStyles', )

    function handleFileInputChange(event) {
        fileInputChange = event.target.files[0]
        if (fileInputChange) {
            const imgUrl = URL.createObjectURL(fileInputChange)
            console.log('object imgUrl look like this : ', imgUrl)
            setImageUrl(imgUrl)
        }
        console.log(fileInputChange)
        setPostStage(3)
    }

    function handleClickOnSelectFromComputer() {
        fileInputRef.current.click()
    }

    return (
        <div className="create-post-main-content">
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