import GridOnIcon from '@mui/icons-material/GridOn';
import { useState } from 'react';

export function ProfileContentFilter({ watchedUser, loggedInUser,setFilterBy }) {
    const [activeFilter, setActiveFilter] = useState('posts')

    function handleClickOnFilter(filterType) {
        switch (filterType) {
            case 'posts':
                setActiveFilter('posts')
                setFilterBy((prevFilterBy) => ({...prevFilterBy, savedBy_id : ''}))
                break
            case 'saved':
                setActiveFilter('saved')
                setFilterBy((prevFilterBy) => ({...prevFilterBy, savedBy_id : loggedInUser._id}))
                break
            default:
                setActiveFilter('posts')
                break
        }

    }

    console.log('activeFilter', activeFilter)

    return (
        <div className="profile-content-filter">
            {watchedUser ?
                <>
                    <div className={`posts-filter ${activeFilter === 'posts' ? 'filterBorder' : ''}`} onClick={() => handleClickOnFilter("posts")}>
                        <div className='filter-container' >
                            <GridOnIcon className={`profile-filter-icon ${activeFilter === 'posts' ? 'selectedColor' : ''}`} />
                            <button className={`profile-filter-btn ${activeFilter === 'posts' ? 'selectedColor' : ''}`}>POSTS</button>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={`posts-filter ${activeFilter === 'posts' ? 'filterBorder' : ''}`} onClick={() => handleClickOnFilter("posts")}>
                        <div className='filter-container'>
                            <GridOnIcon className={`profile-filter-icon ${activeFilter === 'posts' ? 'selectedColor' : ''}`} />
                            <button className={`profile-filter-btn ${activeFilter === 'posts' ? 'selectedColor' : ''}`}>POSTS</button>
                        </div>
                    </div>
                    <div className={`posts-save-filter ${activeFilter === 'saved' ? 'filterBorder' : ''}`} onClick={() => handleClickOnFilter("saved")}>
                        <div className='filter-container'>
                            {activeFilter === 'saved' ?
                                <img className=' profile-filter-icon profile-bookmark-icon' src="/public/icons/Bookmark.svg" alt="Bookmark Icon" />
                                :
                                <img className=' profile-filter-icon profile-bookmark-icon' src="/public/icons/GrayBookmark.svg" alt="Gray Bookmark Icon" />
                            }
                            <button className={`profile-filter-btn ${activeFilter === 'saved' ? 'selectedColor' : ''}`}>SAVED</button>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}