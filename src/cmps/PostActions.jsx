import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PostShare } from "./PostShare"
import { PostDetails } from "./PostDetails"

export function PostActions({ post, onUpdatePost, isPostDetailsPage, loggedInUser }) {
    const navigate = useNavigate()
    const isLiked = post.likedBy.some(likedUser => (likedUser._id === loggedInUser._id))
    const isSaved = post.savedBy.some(savedBy => (savedBy._id === loggedInUser._id))

    function handleClickOnLikePost(value) {
        let updatedLikedPost = {};
        if (value) {
            updatedLikedPost = {
                ...post,
                demodata: {
                    ...post.demodata,
                    likes: post.demodata.likes + 1
                },
                likedBy: [
                    ...post.likedBy,
                    {
                        _id: loggedInUser._id,
                        firstname: loggedInUser.firstname,
                        lastname: loggedInUser.lastname,
                        imgUrl: loggedInUser.imgUrl
                    }
                ]
            };
        } else {
            const updatedLikes = post.demodata.likes > 0 ? post.demodata.likes - 1 : 0;
            updatedLikedPost = {
                ...post,
                demodata: {
                    ...post.demodata,
                    likes: updatedLikes
                },
                likedBy: post.likedBy.filter(likedUser => likedUser._id !== loggedInUser._id)
            };
        }
        onUpdatePost(updatedLikedPost);
    }

    
    function handleClickOnSavedPost(value) {
        let updatedSavedPost = []
        if (value) {
            updatedSavedPost = {
                ...post, savedBy: [...post.savedBy, {
                    _id: loggedInUser._id, firstname: loggedInUser.firstname,
                    lastname: loggedInUser.lastname, imgUrl: loggedInUser.imgUrl
                }]
            }
        }
        else {
            updatedSavedPost = { ...post, savedBy: post.savedBy.filter(savedUser => (savedUser._id != loggedInUser._id)) }
        }

        onUpdatePost(updatedSavedPost)
    }

    function handleClickOnComment() {
        navigate(`/p/${post._id}`)
        console.log('clicked comment button')
    }

    function handleClickOnSharePost() {
        console.log('sharing is caring')
    }

    function handleClickOnSavePost() {

    }


    return (
        <div className={isPostDetailsPage ? "page-post-actions" : "post-actions"}>
            <div className="post-actions-btns">
                <div>
                    {isLiked ? (
                        <img className='icon' src="/public/icons/RedLike.svg" alt="Liked Icon" onClick={() => handleClickOnLikePost(false)} />
                    ) : (
                        <img className='icon' src="/public/icons/Like.svg" alt="Like Icon" onClick={() => handleClickOnLikePost(true)} />
                    )}
                </div>
                <div onClick={isPostDetailsPage ? null : handleClickOnComment}>
                    <img className='icon' src="/public/icons/Comment.svg" alt="Comment Icon" />
                </div>
                <div onClick={handleClickOnSharePost}>
                    <img className='icon' src="/public/icons/Share.svg" alt="Share Icon" />
                </div>
            </div>
            <div className="post-actions-secondary-btns" onClick={handleClickOnSavePost}>

                {isSaved ? (
                    <img className='icon' src="/public/icons/BlackBookmark.svg" alt="black Bookmark Icon" onClick={() => handleClickOnSavedPost(false)} />
                ) : (
                    <img className='icon' src="/public/icons/Bookmark.svg" alt="bookmark Icon" onClick={() => handleClickOnSavedPost(true)} />
                )}

            </div>
            {/* <PostShare/>  will be the in modal*/}
            {/* <PostDetails/> opptional with nav link*/}
            {/* Post save, Post Like buttons*/}
        </div>
    )
}