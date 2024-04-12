import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './LoginSignup.jsx'
import { HomePage } from '../pages/HomePage.jsx'
import { ExploreOutlined } from '@mui/icons-material'


export function AppHeader( {handleOpenCreatePost } ) {
    

    return (
        <header className="app-header full">
            <nav>
                <NavLink className='logo' to="/" exact="true">
                    <h1>Instalike</h1>
                </NavLink>
                <NavLink to="/" exact="true">
                    <img className='icon' src="../../public/icons/Home.svg" alt="Home Icon" />
                    <div> Home</div>    
                </NavLink>
                <div>
                    <img className='icon' src="../../public/icons/Search.svg" alt="Search Icon" />
                    <div>Search</div>
                </div>
                <NavLink to="/explore" exact="true">
                    <ExploreOutlined />
                    <div>Explore</div>
                </NavLink>
                <NavLink to="/direct" exact="true">
                    <img className='icon' src="../../public/icons/Messenger.svg" alt="Messenger Icon" />
                    <div>Messeges</div>
                </NavLink>
                <div>
                    <img className='icon' src="../../public/icons/Like.svg" alt="Nofication Icon" />
                    <div>Notification</div>
                </div>
                <div onClick={handleOpenCreatePost}>
                    <img className='icon' src="../../public/icons/Create.svg" alt="Create Icon" />
                    <div>Create</div>
                </div>
                <NavLink to="/profile" exact="true">
                    <img className='icon' src="../../public/icons/User.svg" alt="Profile Icon" />
                    <div>Profile</div>
                </NavLink>
                <div>
                    <img className='icon' src="../../public/icons/More.svg" />
                    <div>More</div>
                </div>
            </nav>
        </header>
    )
}   