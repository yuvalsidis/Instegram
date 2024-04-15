import { FollowerPreview } from "./FollowerPreview"

export function FollowerList({fullUser, isWatchedUser}){

    if(!fullUser) return <div>Loading</div>

     return (
        <div className="follower-list">
             {
                fullUser.info.following.map(user => (
                    <div key={`follower-${user.id}`} className="follower-preview">
                              <FollowerPreview/>
                    </div>
                ))
             }
        </div>
     )
}