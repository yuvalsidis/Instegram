import { FollowerPreview } from "./FollowerPreview"
import { useLocation } from 'react-router-dom'

export function FollowerList({ fullUser, isWatchedUser, loggedInUser }) {
   const location = useLocation()
   if (!fullUser) return <div>Loading</div>

   return (
      <div className="follower-list">
         {location.pathname.includes('following') ?
            <>
               {
                  fullUser.info.following.map(user => (
                     <div key={`following-${user.id}`} className="follower-preview">
                        <FollowerPreview user={user} isWatchedUser={isWatchedUser} loggedInUser={loggedInUser} />
                     </div>
                  ))
               }

            </>
            :
            <>
               {
                  fullUser.info.followers.map(user => (
                     <div key={`follower-${user.id}`} className="follower-preview">
                        <FollowerPreview user={user} isWatchedUser={isWatchedUser} loggedInUser={loggedInUser} />
                     </div>
                  ))
               }
            </>
         }
      </div>
   )
}