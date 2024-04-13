import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PostShare } from "./PostShare"
import { PostDetails } from "./PostDetails"

export function PostActions({ post, onUpdatePost, isPostDetailsPage }) {
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState(false)
    const [updatedPost, setUpdatedPost] = useState(post)
    const exampleUser = { _id: "u116", fullname: "Romeo", imgUrl: "https://source.unsplash.com/random" }

    useEffect(() => {
        setUpdatedPost(post => ({
            ...post, likedBy: isLiked ?
                [...post.likedBy, exampleUser]
                : post.likedBy.filter((user) => user._id !== exampleUser._id)
        }))
    }, [isLiked])

    useEffect(() => {
        onUpdatePost(updatedPost)
    }, [updatedPost])

    function onLikePost() {
        console.log('here is the like function')
        setIsLiked(!isLiked)
    }

    function handleClickOnComment() {
        navigate(`/p/${post._id}`)
        console.log('clicked comment button')
    }

    function handleClickOnSharePost() {
        console.log('sharing is caring')
    }

    function handleClickOnSavePost() {
        console.log('clicked save post')
    }


    return (
        <div className={isPostDetailsPage ? "page-post-actions" : "post-actions"}>
            <div className="post-actions-btns">
                <div onClick={onLikePost}>
                    {isLiked ? (
                        <img className='icon' src="/public/icons/RedLike.svg" alt="Liked Icon" />
                    ) : (
                        <img className='icon' src="/public/icons/Like.svg" alt="Like Icon" />
                    )}
                </div>
                <div onClick={isPostDetailsPage? handleClickOnComment : null}>
                    <img className='icon' src="/public/icons/Comment.svg" alt="Comment Icon" />
                </div>
                <div onClick={handleClickOnSharePost}>
                    <img className='icon' src="/public/icons/Share.svg" alt="Share Icon" />
                </div>
            </div>
            <div className="post-actions-secondary-btns" onClick={handleClickOnSavePost}>
                <img className='icon' src="/public/icons/Bookmark.svg" alt="Bookmark Icon" />
            </div>
            {/* <PostShare/>  will be the in modal*/}
            {/* <PostDetails/> opptional with nav link*/}
            {/* Post save, Post Like buttons*/}
        </div>
    )
}