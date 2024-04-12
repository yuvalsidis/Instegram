
import { useState, useEffect } from "react"

export function UserAction({ loggedInUser, watchedUser }) {
    const [isFollow, setIsFollow] = useState(false)

    useEffect(()=>{
        checkIfFollow()
    },[])

    function checkIfFollow() {
        const isFollowing = loggedInUser.info.following.some((following) => {
            if (following._id === watchedUser.id) {
                return true; 
            }
        });
        setIsFollow(isFollowing); 
    }


    console.log('isFollow', isFollow)
    return (
        <div className="user-actions">
            {watchedUser ?
                <>
                    <p>{watchedUser.username}</p>

                    <img className='icon' src="../../public/icons/OptionsUser.svg" alt="Options user Icon" />

                </>
                :
                <>
                    <p>{loggedInUser.username}</p>
                    <a className="user-info-link">Edit Profile</a>
                    <a className="user-info-link">View Archive</a>
                    <img className='icon' src="../../public/icons/OptionsUser.svg" alt="Options user Icon" />
                </>
            }
        </div>

    )
}