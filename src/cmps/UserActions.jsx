
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
        const isFollowing = following.some((following) => {
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
                    <div className="info-username-container">
                        <p className="info-username">{watchedUser.username}</p>
                    </div>
                    {isFollow ?
                        <>
                            <div className="user-info-btns">
                                <button className="following-btn user-info-btn"> Following </button>
                                <a className=" user-info-link messege-link "> Messege</a>
                            </div>
                        </>
                        :
                        <>
                            <div className="user-info-btns">
                                <button className="user-info-follow-btn  user-info-btn"> Follow </button>
                            </div>

                        </>
                    }
                    <div className=" user-info-icon-container">
                        <img className='icon user-info-icon' src="/public/icons/OptionsWatchedUser.svg" alt="Options Watched user Icon" />
                    </div>

                </>
                :
                <>
                    <div className="info-username-container">
                        <p className="info-username">{loggedInUser.username}</p>
                    </div>
                    <div className="logged-in-user-links">
                        <a className="user-info-link">Edit Profile</a>
                        <a className="user-info-link">View Archive</a>
                    </div>
                    <div className=" user-info-icon-container">
                        <img className='icon' src="/public/icons/OptionsUser.svg" alt="Options user Icon" />
                    </div>
                </>
            }
        </div>

    )
}