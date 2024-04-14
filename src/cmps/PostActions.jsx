import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PostShare } from "./PostShare"
import { PostDetails } from "./PostDetails"

export function PostActions({ post, onUpdatePost, isPostDetailsPage, loggedInUser }) {
    const navigate = useNavigate()
    const isLiked = post.likedBy.some(likedUser => (likedUser._id === loggedInUser._id))
  
    function handleClickOnLikePost(value) {
        let updatedLikedPost  = []
        if(value) {
            updatedLikedPost = {...post, likedBy : [...post.likedBy, {_id : loggedInUser._id, firstname : loggedInUser.firstname, 
            lastname : loggedInUser.lastname, imgUrl : loggedInUser.imgUrl}]}
        }
        else{
            updatedLikedPost = {...post, likedBy : post.likedBy.filter(likedUser => (likedUser._id != loggedInUser._id))}
        }
    
        onUpdatePost(updatedLikedPost)
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
                <div>
                    {isLiked ? (
                        <img className='icon' src="/public/icons/RedLike.svg" alt="Liked Icon" onClick={()=> handleClickOnLikePost(false)}/>
                    ) : (
                        <img className='icon' src="/public/icons/Like.svg" alt="Like Icon" onClick={()=> handleClickOnLikePost(true)}/>
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