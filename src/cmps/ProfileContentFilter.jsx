import GridOnIcon from '@mui/icons-material/GridOn';

export function ProfileContentFilter({ watchedUser, loggedInUser }) {

    return (
        <div className="profile-content-filter">
            {watchedUser ?
                <>
                     <div className="posts-filter">
                        <div className='filter-container' >
                            <GridOnIcon className='profile-filter-icon' />
                            <button className='profile-flter-btn'>POSTS</button>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="posts-filter">
                        <div className='filter-container'>
                            <GridOnIcon className='profile-filter-icon' />
                            <button className='profile-flter-btn'>POSTS</button>
                        </div>
                    </div>
                    <div className="posts-save-filter">
                        <div className='filter-container'>
                            <img className=' profile-filter-icon profile-bookmark-icon' src="../../public/icons/GrayBookmark.svg" alt="Gray Bookmark Icon" />
                            <button className='profile-flter-btn'>SAVED</button>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}