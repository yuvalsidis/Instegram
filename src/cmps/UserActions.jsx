
import { FloodOutlined } from "@mui/icons-material"
import { useState, useEffect } from "react"

export function UserAction({ loggedInUser, watchedUser }) {
    const [isFollow, setIsFollow] = useState(false)

    useEffect(() => {
        if (loggedInUser && watchedUser) {
            checkIfFollow()
        }
    }, [isFollow])

    function checkIfFollow() {
        const following = loggedInUser.info.following
        console.log('asdasdasdasd', loggedInUser.info.following)
        const isFollowing = following.some((following) => {
            console.log('following', following)
            if (following._id === watchedUser._id) {
                return true;
            }
        });
        console.log('asd', isFollowing)
        setIsFollow(isFollowing);
    }


    console.log('isFollow', isFollow)
    return (
        <div className="user-action">
            {watchedUser ?
                <>
                    <p>{watchedUser.username}</p>
                    {isFollow ?
                        <>
                            <button className="user-info-btn"> Following </button>
                            <button className="user-info-btn"> Messege</button>
                        </>
                        :
                        <>
                            <button className="user-info-follow-btn"> Following </button>
                        </>
                    }
                    <img className='icon' src="../../public/icons/OptionsWatchedUser.svg" alt="Options Watched user Icon" />

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