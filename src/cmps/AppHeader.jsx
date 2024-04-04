import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './LoginSignup.jsx'
import { HomePage } from '../pages/HomePage.jsx'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export function AppHeader() {

    return (
        <header className="app-header full">
            <h1 className='logo'>Instegram</h1>
            <nav>
                <>  
                    <NavLink to="/" exact={true}>Home</NavLink>
                </>
                <>
                    <SearchOutlinedIcon/>
                    <div>Search</div>
                </>
                <>
                    <ExploreOutlinedIcon/>
                    <NavLink to="/explore" exact={true}>Explore</NavLink>
                </>
                <>
                    <NavLink to="/direct" exact={true}>Messeges</NavLink>
                </>
                <>
                    <div>Notification</div>
                </>
                <>
                    <div>Create</div>
                </>
                <>
                    <NavLink to="/profile" exact={true}>Profile</NavLink>
                </>
            </nav>
        </header>
    )
}   