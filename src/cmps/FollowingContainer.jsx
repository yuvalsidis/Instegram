import { FollowerList } from "./FollowersList"

export function FollowingContainer({ userLoaded }) {


    return (
        <div className="following-container">
            <div className="following-container-header">
                <div>
                    <p>Following</p>
                </div>
                <div className="exit-logo-container">
                    <img src="/public/icons/ExitBlack.svg" alt="Exit Black Icon" />
                </div>
            </div>
            <div className="filterbar-container">
                <input className="filter-bar-input" type="text" placeholder="Search"></input>
            </div>
        </div >
    )
}