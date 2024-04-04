import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './LoginSignup.jsx'
import { HomePage } from '../pages/HomePage.jsx'
import { ExploreOutlined } from '@mui/icons-material'


export function AppHeader() {

    return (
        <header className="app-header full">
            <h1 className='logo'>Instegram</h1>
            <nav>
                <div>
                    <img className='icon' src="../../public/icons/Home.svg" alt="Home Icon" />
                    <NavLink to="/" exact={true}>Home</NavLink>
                </div>
                <div>
                    <img className='icon' src="../../public/icons/Search.svg" alt="Search Icon" />
                    <div>Search</div>
                </div>
                <div>
                    <ExploreOutlined/>
                    {/* <img className='icon' src="../../public/icons/Explore.svg" alt="Explore Icon" /> */}
                    <NavLink to="/explore" exact={true}>Explore</NavLink>
                </div>
                <div>
                    <img className='icon' src="../../public/icons/Messenger.svg" alt="Messenger Icon" />
                    <NavLink to="/direct" exact={true}>Messeges</NavLink>
                </div>
                <div>  
                    <img className='icon' src="../../public/icons/Like.svg" alt="Nofication Icon" />
                    <div>Notification</div>
                </div>
                <div>
                    <img className='icon' src="../../public/icons/Create.svg" alt="Create Icon" />
                    <div>Create</div>
                </div>
                <div>  <img className='icon' src="../../public/icons/User.svg" alt="Profile Icon" />
                    <NavLink to="/profile" exact={true}>Profile</NavLink>
                </div>
            </nav>
        </header>
    )
}   